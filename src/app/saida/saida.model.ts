export class Saida {
    constructor(
        public id: number,
        public id_produto: number,
        public id_cliente: number,
        public bo_ativo: boolean,
        public vl_venda: number,
        public vl_desconto: number,
        public id_usuario: number,
        public observacao: string,
        public tipo_venda: string,
        public ds_saida:string,
        public ds_servico:string,
        public qt_produto:number,
        public id_saida:number,
        public qt_dividir:number,
        public tipo_saida:string,
        public dt_entrega:Date
        ) { }
}
// id|observacao|id_cliente|id_usuario|bo_ativo|id|id_saida|ds_saida|id_produto|vl_venda|vl_desconto|bo_ativo|tipo_venda|qt_produto|ds_servico    |id|ds_produto    |