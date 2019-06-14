import { Injectable } from "@angular/core";

@Injectable()
export class Helper {
    constructor() { }

    encrypt(dados) {

        dados = dados.replace(/A/g, "গ");
        dados = dados.replace(/B/g, "খ");
        dados = dados.replace(/C/g, "ক");
        dados = dados.replace(/D/g, "ঔ");
        dados = dados.replace(/E/g, "ও");
        dados = dados.replace(/F/g, "ঐ");
        dados = dados.replace(/G/g, "এ");
        dados = dados.replace(/H/g, "ঌ");
        dados = dados.replace(/I/g, "ঋ");
        dados = dados.replace(/J/g, "ঊ");
        dados = dados.replace(/K/g, "উ");
        dados = dados.replace(/L/g, "ঈ");
        dados = dados.replace(/M/g, "ই");
        dados = dados.replace(/N/g, "আ");
        dados = dados.replace(/O/g, "অ");
        dados = dados.replace(/P/g, "ॿ");
        dados = dados.replace(/Q/g, "ॾ");
        dados = dados.replace(/R/g, "ॼ");
        dados = dados.replace(/S/g, "ॻ");
        dados = dados.replace(/T/g, "ॲ");
        dados = dados.replace(/U/g, "९");
        dados = dados.replace(/V/g, "७");
        dados = dados.replace(/W/g, "ॠ");
        dados = dados.replace(/X/g, "ॡ");
        dados = dados.replace(/Y/g, "फ़");
        dados = dados.replace(/Z/g, "ॐ");



        dados = dados.replace(/a/g, "अ");
        dados = dados.replace(/b/g, "आ");
        dados = dados.replace(/c/g, "इ");
        dados = dados.replace(/d/g, "ई");

        dados = dados.replace(/e/g, "उ");
        dados = dados.replace(/f/g, "ऊ");
        dados = dados.replace(/g/g, "ऋ");
        dados = dados.replace(/h/g, "ऌ");
        dados = dados.replace(/i/g, "ऍ");
        dados = dados.replace(/j/g, "ऎ");
        dados = dados.replace(/k/g, "ए");
        dados = dados.replace(/l/g, "ऐ");
        dados = dados.replace(/m/g, "ঙ");
        dados = dados.replace(/n/g, "ঘ");
        dados = dados.replace(/o/g, "ओ");
        dados = dados.replace(/p/g, "औ");
        dados = dados.replace(/q/g, "क");
        dados = dados.replace(/r/g, "ख");
        dados = dados.replace(/s/g, "ग");
        dados = dados.replace(/t/g, "घ");
        dados = dados.replace(/u/g, "ङ");
        dados = dados.replace(/v/g, "च");
        dados = dados.replace(/w/g, "छ");
        dados = dados.replace(/x/g, "ज");
        dados = dados.replace(/y/g, "झ");
        dados = dados.replace(/z/g, "ञ");

        dados = dados.replace(/á/g, "ट");
        dados = dados.replace(/é/g, "य");
        dados = dados.replace(/í/g, "म");
        dados = dados.replace(/ó/g, "भ");
        dados = dados.replace(/ú/g, "ब");

        dados = dados.replace(/à/g, "फ");
        dados = dados.replace(/è/g, "प");
        dados = dados.replace(/ì/g, "ऩ");
        dados = dados.replace(/ò/g, "न");
        dados = dados.replace(/ù/g, "ध");

        dados = dados.replace(/ã/g, "द");
        dados = dados.replace(/õ/g, "थ");

        dados = dados.replace(/ç/g, "त");

        dados = dados.replace(/ê/g, "ण");


        dados = dados.replace(/ /g, "߷");
        

        return dados;
    }
    decrypt(dados) {
        dados = dados.replace(/গ/g, "A");
        dados = dados.replace(/খ/g, "B");
        dados = dados.replace(/ক/g, "C");
        dados = dados.replace(/ঔ/g, "D");
        dados = dados.replace(/ও/g, "E");
        dados = dados.replace(/ঐ/g, "F");
        dados = dados.replace(/এ/g, "G");
        dados = dados.replace(/ঌ/g, "H");
        dados = dados.replace(/ঋ/g, "I");
        dados = dados.replace(/ঊ/g, "J");
        dados = dados.replace(/উ/g, "K");
        dados = dados.replace(/ঈ/g, "L");
        dados = dados.replace(/ই/g, "M");
        dados = dados.replace(/আ/g, "N");
        dados = dados.replace(/অ/g, "O");
        dados = dados.replace(/ॿ/g, "P");
        dados = dados.replace(/ॾ/g, "Q");
        dados = dados.replace(/ॼ/g, "R");
        dados = dados.replace(/ॻ/g, "S");
        dados = dados.replace(/ॲ/g, "T");
        dados = dados.replace(/९/g, "U");
        dados = dados.replace(/७/g, "V");
        dados = dados.replace(/ॠ/g, "W");
        dados = dados.replace(/ॡ/g, "X");
        dados = dados.replace(/फ़/g, "Y");
        dados = dados.replace(/ॐ/g, "Z");



        dados = dados.replace(/अ/g, "a");
        dados = dados.replace(/आ/g, "b");
        dados = dados.replace(/इ/g, "c");
        dados = dados.replace(/ई/g, "d");
        dados = dados.replace(/उ/g, "e");
        dados = dados.replace(/ऊ/g, "f");
        dados = dados.replace(/ऋ/g, "g");
        dados = dados.replace(/ऌ/g, "h");
        dados = dados.replace(/ऍ/g, "i");
        dados = dados.replace(/ऎ/g, "j");
        dados = dados.replace(/ए/g, "k");
        dados = dados.replace(/ऐ/g, "l");
        dados = dados.replace(/ঙ/g, "m");
        dados = dados.replace(/ঘ/g, "n");
        dados = dados.replace(/ओ/g, "o");
        dados = dados.replace(/औ/g, "p");
        dados = dados.replace(/क/g, "q");
        dados = dados.replace(/ख/g, "r");
        dados = dados.replace(/ग/g, "s");
        dados = dados.replace(/घ/g, "t");
        dados = dados.replace(/ङ/g, "u");
        dados = dados.replace(/च/g, "v");
        dados = dados.replace(/छ/g, "w");
        dados = dados.replace(/ज/g, "x");
        dados = dados.replace(/झ/g, "y");
        dados = dados.replace(/ञ/g, "z");

        dados = dados.replace(/ट/g, "á");
        dados = dados.replace(/य/g, "é");
        dados = dados.replace(/म/g, "í");
        dados = dados.replace(/भ/g, "ó");
        dados = dados.replace(/ब/g, "ú");

        dados = dados.replace(/फ/g, "à");
        dados = dados.replace(/प/g, "è");
        dados = dados.replace(/ऩ/g, "ì");
        dados = dados.replace(/न/g, "ò");
        dados = dados.replace(/ध/g, "ù");

        dados = dados.replace(/द/g, "ã");
        dados = dados.replace(/थ/g, "õ");

        dados = dados.replace(/त/g, "ç");

        dados = dados.replace(/ण/g, "ê");

        dados = dados.replace(/߷/g, " ");


        dados = dados.replace(/Գ/g, "0");
        dados = dados.replace(/Բ/g, "1");
        dados = dados.replace(/Ա/g, "2");
        dados = dados.replace(/Ѿ/g, "3");
        dados = dados.replace(/Ѽ/g, "4");
        dados = dados.replace(/Ϫ/g, "5");
        dados = dados.replace(/ϟ/g, "6");
        dados = dados.replace(/ƨ/g, "7");
        dados = dados.replace(/Ʀ/g, "8");
        dados = dados.replace(/ƣ/g, "9");

        return dados;
    }

}