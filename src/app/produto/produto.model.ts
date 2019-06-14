export class Produto {
    constructor(
        public id: number,
        public ds_produto: string,
        public nu_referencia: string,
        public fabricante: string,
        public vl_venda: number,
        public vl_custo: number,
        public dt_lancamento: string,
        public bo_ativo: boolean,
        public cores: string,
        public fornecedor: string,
        public observacao: string,
        public img:string
    ) { }
}
