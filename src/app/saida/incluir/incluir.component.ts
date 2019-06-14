import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import { SaidaService } from '../saida.service';
import { Saida } from '../saida.model'
import { Produto } from 'src/app/produto/produto.model';
import { ProdutoService } from 'src/app/produto/produto.service';
import { ClienteService } from './../../cliente/cliente.service'
import { Cliente } from './../../cliente/cliente.model'
@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponent implements OnInit {
  saida: Saida;
  formProduto: FormGroup
  formService: FormGroup
  loader: boolean = true
  option: number = 1;
  produtos: Produto[];
  clientes: Cliente[];
  items: Saida[] = []
  idCliente: number = 1;
  vl_venda: string = ''
  cont: number = 0
  vl_final_produto: number
  ds_produto: string
  tipo_venda: string
  pagamento:string = "AVISTA";
  dividir:number = 1;
  total:number = 0;
  totalDesc:number = 0;
  desc:number = 0;
  parc:number = 0;
  formas_pagamento:any[]
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


  constructor(private produtoService: ProdutoService, private clienteService: ClienteService, private saidaService: SaidaService, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.getFormulario()
    this.initializeFormEmpty();
  }
  initializeFormEmpty() {
    this.formProduto = this.formBuilder.group({
      id_cliente: this.formBuilder.control(''),
      tipo_venda: this.formBuilder.control(''),
      ds_saida: this.formBuilder.control(''),
      vl_venda: this.formBuilder.control({value:'',disabled:true}),
      id_produto: this.formBuilder.control('', [Validators.required]),
      observacao: this.formBuilder.control(''),
      vl_desconto: this.formBuilder.control(''),
      qt_produto: this.formBuilder.control(1,Validators.pattern("[0-9]*")),
      ds_servico: this.formBuilder.control(''),
      list: this.formBuilder.control([])
    })
    this.formService = this.formBuilder.group({
      ds_saida: this.formBuilder.control(''),
      id_produto: this.formBuilder.control(''),
      id_cliente: this.formBuilder.control(''),
      vl_venda: this.formBuilder.control('', [Validators.required]),
      observacao: this.formBuilder.control(''),
      vl_desconto: this.formBuilder.control(''),
      tipo_venda: this.formBuilder.control('servico', [Validators.required]),
      qt_produto: this.formBuilder.control(1,Validators.pattern("[0-9]*")),
      ds_servico: this.formBuilder.control('', [Validators.required]),
      dt_entrega: this.formBuilder.control('', [Validators.required]),

    })
  }
  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1)
    this.calculoTotal();
    this.saidaService.notify("Item removido!");


  }
  addCliente() {
    let id =  this.idCliente
    if (this.items.length > 0) {
      this.items.map(function (item) {
        item.id_cliente = id
      })
    }
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
  addItem(form) {
    form.vl_desconto = form.vl_desconto == '' ? 0 : form.vl_desconto
    form.tipo_venda = 'produto'
    form.vl_venda = parseFloat(this.vl_venda)
    form.vl_desconto = parseFloat(form.vl_desconto)
    form.ds_produto = this.ds_produto
    this.items.push(form)
    this.cont += 1;
    this.calculoTotal();
    this.saidaService.notify("Porduto adicionado");
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
    this.calculoTotal();
    this.saidaService.notify("Serviço adicionado");
  }
  addValor(val, name) {
    console.log(val);
    console.log(name);
    
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
    console.log(this.items)
    if(this.items.length > 0 ){
      this.addCliente();
      this.addDividir();
      this.addPagamento();

      this.saidaService.save(this.items).subscribe(produtos => {
        this.saidaService.notify("Venda salva com sucesso!");
        this.saidaService.goTo();
      });
    }else{
      this.saidaService.notify("Adiciona no mínimo um produto!");
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
  atualizarQuantidade(item,acao) {
    if (acao) {
      item.qt_produto += 1;
    }else{
      if(item.qt_produto == 1)return;
      item.qt_produto -= 1;
    }
    this.calculoTotal();
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
    this.clienteService.getClientes().subscribe(clientes => {
      this.clientes = clientes
    });
    this.saidaService.getFormasDePagamento().subscribe(formas_pagamento => {
      this.formas_pagamento = formas_pagamento
    });
  }
}
