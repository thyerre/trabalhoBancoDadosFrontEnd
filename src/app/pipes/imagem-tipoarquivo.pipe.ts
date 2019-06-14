import { Pipe, PipeTransform } from '@angular/core';
import { API_PATH_IMG } from './../app.api';

@Pipe({
  name: 'imagemTipoArquivo'
})
export class ImagemTipoarquivoPipe implements PipeTransform {

  
  transform(value: any, args?: any, args_value?: any): any {
    return this.args(value, args,args_value);
  }
  args(dados: string, args: string, args_value: string) {
    if (args == 'show') {
      if(dados){
        return this.getPathImg(args_value+"/"+dados)
      }else{
        return 'assets/img/user/padrao.png'
      }
    }else{
      this.convertMesToString(dados);
    }
  }
  convertMesToString(arquivo: string) {
    let extensao = this.getExtension(arquivo).toLowerCase();
    let tipo = ''
    switch (extensao) {
        case 'pdf': {
            tipo = 'assets/img/file/pdf.svg'
            break;
          }
          case 'txt': {
            tipo = 'assets/img/file/txt.svg'
            break;
          }
          case 'pptx': case 'ppt': case 'pps': {
            tipo = 'assets/img/file/ppt.svg'
            break;
          }
          case 'xls': case 'xlsx': {
            tipo = 'assets/img/file/xls.svg'
            break;
          }
          case "doc": case "docx": case "dotx": case "dot": {
            tipo = 'assets/img/file/docs.svg'
            break;
          }
          case "jpeg": case "jpg": case "png": case "svg": case "gif": case "bmp": case "svg": case "svg": case "svg": {
            tipo = 'assets/img/file/picture.svg'
            break;
          }
          default: {
            break;
          }
    }
    return tipo
  }
  getExtension(name) {
    return name.split('.').pop();
  }
  getPathImg(path):string{
    return `${API_PATH_IMG}/${path}`
  }
}
