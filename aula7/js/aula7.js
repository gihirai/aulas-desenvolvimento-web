function getRadio(){
    let elemento  = document.getElementsByName("gender");
    //*passando de posição em posição para ver qual o gender de determinada posição
    for(let i = 0; elemento.length; i++){
        //* se esse elemento for check vai ser verdadeiro
        if(elemento[i].checked){
            //*INNERHTML: reseta o elemento
            document.getElementById("radioResult").innerHTML = "o genero selecionado é: " + elemento[i].value;
        }
    }
}

function getOption(){
    //* da algo e ele procura com base nisso - quero procurar tudo que está como select1
    let selectElement = document.querySelector("#select1");
    let text = selectElement.value;
    //*textContent chama o conteudo de texto
    document.querySelector(".output").textContent = text;
}

function getCheckBox(){
    //* todas as inputs checkbox que forem selecionadas = checkedes
    let checkBoxes = document.querySelectorAll('input[type=checkbox]:checked') ;
    let text = ""; 
    for(let i = 0; i < checkBoxes.length; i++){
        text = text + "," + checkBoxes[i].value;
    }
    //*conteudo do texto separando elas por virgulas
    document.getElementById("pri").innerHTML = text;
}