function rot13(str) {

let resultado = '';

  for (let i = 0; i < str.length; i++) {
    const caracter = str[i];
    const ascii = str.charCodeAt(i);
    
    if (ascii >= 65 && ascii <= 90) {
      let codigoDecodificado = ((ascii - 65 + 13) % 26) + 65;
      resultado += String.fromCharCode(codigoDecodificado);
    } else if (ascii >= 97 && ascii <= 122) {
      let codigoDecodificado = ((ascii - 97 + 13) % 26) + 97;
      resultado += String.fromCharCode(codigoDecodificado);
    } else {
      resultado += caracter;
    }
  }
  return resultado;
}

rot13("SERR PBQR PNZC");
