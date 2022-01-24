  var input  = document.querySelector("input");

  var buttonencriptar = document.querySelector("button.encriptar"); // Manejo de boton "Encriptar"
  buttonencriptar.onclick = encriptar;

  var buttondesencriptar = document.querySelector("button.desencriptar"); // Manejo de boton "Desencriptar"
  buttondesencriptar.onclick = desencriptar;

  //var frase = []; // Arreglo para separar palabras de la frase

  function encriptar () {

    // alert ("El Texto de Codificar es : " + input.value);

    var texto = input.value;
    frase = texto.split("");

    for (var posicion = 0 ; posicion < frase.length ; posicion++) {
  
      if(frase[posicion] == "e") {
                  frase[posicion] = "enter"
                }
      if(frase[posicion] == "u") {
                  frase[posicion] = "ufat"
                }
      if(frase[posicion] == "i") {
                  frase[posicion] = "imes"
                }
      if(frase[posicion] == "a") {
                  frase[posicion] = "ai"
                }             
      if(frase[posicion] == "o") {
                  frase[posicion] = "ober"
                }
    } // cierre for

    var codificado = frase.join(''); // Texto ya codificado

    // alert ("la nueva frase es: " + codificado);

    document.getElementById("copy").value = codificado; // Envio String a Casilla Texto

  }

  function desencriptar () {

   // alert ("El Texto de Codificar es : " + input.value);
    var texto = input.value;
   texto = texto.replace(/enter/g, "e").replace(/ai/g , "a").replace(/ufat/g , "u").replace(/imes/g , "i").replace(/ober/g , "o");

   // alert ("la nueva frase es: " + texto);

    document.getElementById("copy").value = texto;

  }

  function copyToClipBoard() {

    var content = document.getElementById('copy');
    
    content.select();
    document.execCommand('copy');

    alert("Copiado Exitoso");
  }