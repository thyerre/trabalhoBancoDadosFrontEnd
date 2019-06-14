import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SaidaService } from '../saida.service';
import { Saida } from './../saida.model'
import { ClienteService } from './../../cliente/cliente.service';
import { Cliente } from './../../cliente/cliente.model';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.component.html',
  styleUrls: ['./detalhar.component.css']
})
export class DetalharComponent implements OnInit {
  saida: Saida;
  loader: boolean = true
  option: number = 1;
  cliente: Cliente;
  saida_produtos: any[] = []
  saida_servicos: any[] = []
  vl_venda: string = ''
  cont: number = 0
  vl_final_produto: number
  ds_produto: string
  tipo_venda: string
  nome_usuario: string
  pagamento:string = "AVISTA";
  dividir:number = 1;
  total:number = 0;
  totalDesc:number = 0;
  desc:number = 0;
  parc:number = 0;
  id_saida:number;
  parcelas:any[];
  dt_saida:Date;

  constructor(private saidaService: SaidaService, private router: ActivatedRoute,private clienteService: ClienteService) { }

  ngOnInit() {
    this.getSaida();
  }
  getSaida() {
    if (this.router.snapshot.params['id']) {
      this.saidaService.saidaById(this.router.snapshot.params['id']).subscribe(saidas => {
        console.log(saidas)
        this.saida_produtos = saidas['saida_produto']
        this.saida_servicos = saidas['saida_servico']
        this.dt_saida = saidas['saida'][0].dt_saida;
        this.id_saida = saidas['saida'][0].id_saida;
        this.nome_usuario = saidas['saida'][0].nome_usuario;
        this.dividir = saidas['saida'][0].qt_parcela;
        this.pagamento = this.saidaService.getTipoPagamento(saidas['saida'][0].tipo_parcela);
        this.cliente = saidas['saida'][0].nome
        this.calculoTotal(saidas);
        // this.clienteService.clienteById(saidas[0].id_cliente).subscribe(cliente => {
          
        // });
        // this.saidaService.getParcelas(this.router.snapshot.params['id']).subscribe(parcelas => {
        //   this.parcelas = parcelas
        // });
      });
    }else{
      this.saidaService.goTo();
    }
  }

  pagarParcela(parcela){
    if(confirm("Deseja pagar essa parcela?")){
      this.saidaService.PagarParcela(parcela.id).subscribe(parcelas => {
        this.saidaService.getParcelas(this.router.snapshot.params['id']).subscribe(parcelas => {
          this.parcelas = parcelas
        });
        this.saidaService.notify("Parcela paga!");
    });
    }
  }

  calculoTotal(saida){
    this.total = saida['total'];
    this.desc = saida['total_desconto'];
    this.totalDesc = saida['total'] - saida['total_desconto'];
    let p = (saida['total']- saida['total_desconto'])/ this.dividir;
    this.parc = parseFloat(p.toFixed(2));
  }
}
