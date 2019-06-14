export class Cliente{
        constructor(
        public id: number,
             public nome: string,
             public img: string,
             public cpf: string,
             public telefone: string,
             public email: string,
             public referencia: string,
             public dt_nascimento: string,
             public endereco: string,
             public bo_ativo: boolean,
             public sort_order: number,
             ){}
         }
         