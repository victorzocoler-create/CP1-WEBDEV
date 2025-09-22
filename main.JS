function calcular() {

let HorasIniciais = parseInt(document.getElementById("horaIni").value);

let MinutosIniciais = parseInt(document.getElementById("minIni").value);

let HoraFinal = parseInt(document.getElementById("horaFim").value);

let MinutoFinal = parseInt(document.getElementById("minFim").value);



if (HorasIniciais > 23 || HoraFinal > 23 || MinutosIniciais > 59 || MinutoFinal > 59) {

alert("Erro: valores de hora ou minuto inválidos.");

return;

}



let horas = HoraFinal - HorasIniciais;

let minutos = MinutoFinal - MinutosIniciais;


if (minutos < 0) {

minutos += 60;

horas -= 1;

}


if (horas < 0) {

horas += 24;

}


let horasFormatadas = String(horas).padStart(2, '0');

let minutosFormatados = String(minutos).padStart(2, '0');



document.getElementById("horas").textContent = horasFormatadas;

document.getElementById("minutos").textContent = minutosFormatados;

}
    

    


    


        

    


    



    



