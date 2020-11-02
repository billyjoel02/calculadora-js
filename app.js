const $d = document, 
    $numeros = $d.querySelectorAll('.numero'),
    $operaciones = $d.querySelectorAll('.button-operacion'),
    $panel = $d.querySelector('.panel-numeros .info'),
    $panel1 = $d.querySelector('.panel-numeros .resultado');
let operA="", operB="", oper = "", resultado;

$numeros.forEach(($b)=>{
    $b.addEventListener("click",()=> {
        if(oper!=="") {
            operB += $b.textContent;
            $panel1.textContent += $b.textContent;
        } else {
            $panel.innerHTML += $b.textContent;
            operA += $b.textContent;
            console.log(operA);
        }
    });
});

$d.querySelector('.button-igual').addEventListener("click", ()=> {
    if(operA!=="" && operB !== "") resultadoOperacion(oper);
});

$operaciones.forEach(($o)=>{
    $o.addEventListener("click",()=> {
        if(operA!=="") {
            $panel1.innerHTML = '';
            $panel.innerHTML='';
            $panel.innerHTML += `${operA} ${$o.textContent}`;
            oper = $o.textContent;
        }
    });
});

$d.querySelector(".vaciar").addEventListener("click",() => {
    $panel.innerHTML ="";
    $panel1.innerHTML ="";
    operA="";
    operB="";
    oper="";
});

function resultadoOperacion(o) {
    switch(o) {
        case '+': resultado  =  +operA + +operB; break;
        case '*': resultado  =  +operA * +operB; break;
        case '/': resultado  =  +operA / +operB; break;
        case '-': resultado  =  +operA - +operB; break;
    }
    $panel.textContent = `${operA} ${oper} ${operB} = `;
    $panel1.textContent = resultado;
    operA = resultado;
    operB = "";
}