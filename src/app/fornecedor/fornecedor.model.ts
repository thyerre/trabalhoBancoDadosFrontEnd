export class Fornecedor {
    constructor(
        public id: number,
        public endereco: string,
        public razao_social: string,
        public nome_contato: string,
        public ins_est: number,
        public nome_fantasia: string,
        public telefone: string,
        public pais: string,
        public bo_ativo: boolean,
        public cnpj: string,
        public observacao: string
    ) { }
}
