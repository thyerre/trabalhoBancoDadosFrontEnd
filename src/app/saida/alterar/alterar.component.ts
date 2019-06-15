import { Component, OnInit,AfterViewChecked } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import { ActivatedRoute } from '@angular/router'
import { SaidaService } from '../saida.service';
import { Saida } from '../saida.model'
import { Produto } from './../../produto/produto.model';
import { ProdutoService } from './../../produto/produto.service';

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css']
})
export class AlterarComponent implements OnInit,AfterViewChecked {
  saida: Saida;
  formProduto: FormGroup
  formService: FormGroup
  loader: boolean = true
  option: number = 1;
  produtos: Produto[];
  clientes: any[];
  items: Saida[] = []
  idCliente: number
  vl_venda: string = ''
  cont: number = 0
  vl_final_produto: number
  ds_produto: string
  tipo_venda: string
  id_saida:number
  pagamento:string;
  dividir:number;
  total:number = 0;
  totalDesc:number = 0;
  desc:number = 0;
  parc:number = 0;
  numberMask = createNumberMask({
    prefix:"R$ ",
    suffix : "",
    includeThousandsSeparator : true,
    thousandsSeparatorSymbol : ".",
    allowDecimal : true,
    decimalSymbol : ",",
    decimalLimit :2,
    requireDecimal : true,
    allowNegative : true,
    allowLeadingZeroes : true,
    integerLimit : 7
  })


  constructor(private router: ActivatedRoute, private produtoService: ProdutoService, private saidaService: SaidaService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getSaidaById()
    this.getFormulario()
    this.initializeFormEmpty();
    
  }
  ngAfterViewChecked(){
    this.calculoTotal();
  }

  initializeFormEmpty() {
    this.formProduto = this.formBuilder.group({
      ds_saida: this.formBuilder.control(''),
      id_produto: this.formBuilder.control('', [Validators.required]),
      id_cliente: this.formBuilder.control(''),
      vl_venda: this.formBuilder.control({ value: this.vl_venda, disabled: true }),
      observacao: this.formBuilder.control(''),
      vl_desconto: this.formBuilder.control(''),
      tipo_venda: this.formBuilder.control(''),
      qt_produto: this.formBuilder.control(1),
      ds_servico: this.formBuilder.control(''),

    })
    this.formService = this.formBuilder.group({
      ds_saida: this.formBuilder.control(''),
      id_produto: this.formBuilder.control(''),
      id_cliente: this.formBuilder.control(''),
      vl_venda: this.formBuilder.control('', [Validators.required]),
      observacao: this.formBuilder.control(''),
      vl_desconto: this.formBuilder.control(''),
      tipo_venda: this.formBuilder.control('', [Validators.required]),
      qt_produto: this.formBuilder.control(1),
      ds_servico: this.formBuilder.control('', [Validators.required]),

    })
  }
  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1)
    this.calculoTotal();
    this.saidaService.notify("Item removido!");
  }
  calculoTotal(){
    let vl = 0;
    let des =0;
    let vlDe = 0;

    this.items.map(function (item) {
      vl += item.vl_venda * item.qt_produto;
      des += item.vl_desconto;
      vlDe += (item.vl_venda * item.qt_produto) - item.vl_desconto;
    })
    this.total = vl;
    this.desc = des;
    this.totalDesc = vlDe;
    let p = vlDe / this.dividir;
    this.parc = parseFloat(p.toFixed(2));
  }

  addCliente() {
    let id =  this.idCliente
    if (this.items.length > 0) {
      this.items.map(function (item) {
        item.id_cliente = id
      })
    }
  }
  addItem(form) {
    form.vl_desconto = form.vl_desconto == '' ? 0 : form.vl_desconto
    form.tipo_venda = 'produto'
    form.vl_venda = parseFloat(this.vl_venda)
    form.vl_desconto = parseFloat(form.vl_desconto)
    form.ds_produto = this.ds_produto
    this.items.push(form)
    this.cont += 1;
    this.saidaService.notify("Porduto adicionado");
    this.calculoTotal();
  }
  addTipo(tipo) {
    this.tipo_venda = tipo
  }
  addServico(form) {
    form.vl_desconto = form.vl_desconto == '' ? 0 : form.vl_desconto
    form.tipo_venda = this.tipo_venda
    form.vl_venda = parseFloat(form.vl_venda)
    form.vl_desconto = parseFloat(form.vl_desconto)
    form.ds_produto = this.ds_produto
    this.items.push(form)
    this.cont += 1;
    this.saidaService.notify("Serviço adicionado");
    this.calculoTotal();
  }
  addValor(val, name) {
    this.vl_venda = val
    this.ds_produto = name
  }
  calValorFinal(val) {
    this.vl_final_produto = parseFloat(this.vl_venda) - parseFloat(val);
  }
  getOption(op) {
    this.option = op
    this.vl_venda = ""
    this.initializeFormEmpty();
  }
  save() {
    if(this.items.length > 0 ){
      this.addCliente();
      this.addDividir();
      this.addPagamento();

      this.saidaService.update(this.items,this.id_saida).subscribe(saida => {
        this.saidaService.notify("Saida salva com sucesso!");
        this.saidaService.goTo();
      });
    }
  }
  getSaidaById() {
    if (this.router.snapshot.params['id']) {
      this.saidaService.saidaById(this.router.snapshot.params['id']).subscribe(saidas => {
        this.items = saidas
        this.dividir = saidas[0].qt_dividir;
        this.pagamento = saidas[0].tipo_saida;
        this.id_saida = saidas[0].id_saida;
        this.idCliente = saidas[0].id_cliente
        this.loader = false
      });
    }else{
      this.saidaService.goTo();
    }
  }
  addDividir() {
    let qt = this.dividir
    if (this.items.length > 0) {
      this.items.map(function (item) {
        item.qt_dividir = qt
      })
    }
  }

  addPagamento() {
    let pg = this.pagamento
    if (this.items.length > 0) {
      this.items.map(function (item) {
        item.tipo_saida = pg
      })
    }
  }
  getFormulario() {
    this.produtoService.getProdutos().subscribe(produtos => {
      this.produtos = produtos
    });
  }
}
