const horas = document.getElementById('horas'); /* pegar elemento pelo id */
const Minutos = document.getElementById('minutos');
const Segundos = document.getElementById('Segundos');

const relogio = setInterval(function time(){
    let datetoday = new Date();
    let hr = datetoday.getHours();
    let min = datetoday.getMinutes();
    let s = datetoday.getSeconds();

    if(hr < 10) hr = '0' + hr;

    if(min < 10) min = '0' + min;

    if(s < 10) s = '0' + s;

    horas.textContent = hr;
    Minutos.textContent = min;
    Segundos.textContent = s;
})