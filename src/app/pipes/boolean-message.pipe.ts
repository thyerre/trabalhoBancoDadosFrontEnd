import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'BooleanMessage'
})
export class BooleanMessagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return this.tratarBo(value, args);
  }
  tratarBo(value: string, args: string) {
    let texto = '';
    // console.log(args);
    
  
    switch (args) {
      case 'simnao': {
        texto = "SIM"
        if (value == "0") {
          texto = "NÃO";
        }
        break;
      }
      case 'boativo': {
        texto = "ATIVO"
        if (value == "0") {
        texto = "INATIVO"
        }
        break;
      }
      case 'pagamento': {
        texto = "PAGO"
        if (value == "0") {
          texto = "ABERTO";
        }
        break;
      }
      case 'aguardando': {
        if (value == "0") {
          texto = "Aguardando Pagamento"
        }
        break;
      }
      case 'frequencia-cor': {
        texto = ""
        if (value == "p") {
          texto = "green";
        }
        if (value == "f") {
          texto = "red";
        }
        if (value == "j") {
          texto = "";
        }
        if (value == "") {
          texto = "";
        }

        if(value == "+"){
          texto = "green";
        }
        if(value == "-"){
          texto = "#ff0000";
        }
        if(parseInt(value) < 0){
          texto = "#ff0000";
        }
        break;
      }
      default: {
        break;
      }
    }
    return texto;
  }

}
