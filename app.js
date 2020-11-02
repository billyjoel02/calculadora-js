const $d = document, 
    $numeros = $d.querySelectorAll('.numero'),
    $operaciones = $d.querySelectorAll('.button-operacion'),
    $panel = $d.querySelector('.panel-numeros .info'),
    $panel1 = $d.querySelector('.panel-numeros .resultado');
let num1="", num2="", oper = "", resultado;

$numeros.forEach(($b)=>{
    $b.addEventListener("click",()=> {
        if(oper!=="") {
            num2 += $b.textContent;
            $panel1.textContent += $b.textContent;
        } else {
            $panel.innerHTML += $b.textContent;
            num1 += $b.textContent;
            console.log(num1);
        }
    });
});

$d.querySelector('.button-igual').addEventListener("click", ()=> {
    if(num1!=="" && num2 !== "") resultadoOperacion(oper);
});

$operaciones.forEach(($o)=>{
    $o.addEventListener("click",()=> {
        if(num1!=="") {
            $panel1.innerHTML = '';
            $panel.innerHTML='';
            $panel.innerHTML += `${num1} ${$o.textContent}`;
            oper = $o.textContent;
        }
    });
});

$d.querySelector(".vaciar").addEventListener("click",() => {
    $panel.innerHTML ="";
    $panel1.innerHTML ="";
    num1="";
    num2="";
    oper="";
});

function resultadoOperacion(o) {
    switch(o) {
        case '+': resultado  =  +num1 + +num2; break;
        case '*': resultado  =  +num1 * +num2; break;
        case '/': resultado  =  +num1 / +num2; break;
        case '-': resultado  =  +num1 - +num2; break;
    }
    $panel.textContent = `${num1} ${oper} ${num2} = `;
    $panel1.textContent = resultado;
    num1 = resultado;
    num2 = "";
}