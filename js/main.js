let button = document.getElementById('button');
let pipka = document.getElementById('olo')
let pipka2 = document.getElementById('olo2')

pipka.hidden = true;
pipka2.hidden = false;

button.onmouseover = function(){
    pipka2.hidden = true;
    pipka.hidden = false;
}
button.onmouseout = function(){
    pipka2.hidden = false;
    pipka.hidden = true;
}