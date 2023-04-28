function convert(){
// o comando getelementbyid nos returna um elemento do html por seu id ou class
   var temperatura = Number(document.getElementById("temperatura").value)   
   var resultado = 0
        if (document.getElementById("CF").checked){
            resultado = temperatura* (9/5)+32 
        }
        else if (document.getElementById("CK").checked){
            resultado = temperatura + 273.15
        }
        else if (document.getElementById("FC").checked){
            resultado = (temperatura - 32)/(9/5)
        }
        else if (document.getElementById("FK").checked){
            resultado = (temperatura - 32)*(5/9)+273
        }
        else if (document.getElementById("KF").checked){
            resultado = temperatura - 273
        }
        else if (document.getElementById("CF").checked){
            resultado = (temperatura-273)* (9/5) +32
        }
// innerhtml envia para o html a resposta
    document.getElementById("Resultado").innerHTML=resultado
}