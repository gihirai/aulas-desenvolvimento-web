function displayRadioValue() {
    var elemento = document.getElementsByName('gender');
      
    for(i = 0; i < elemento.length; i++) {
        if(elemento[i].checked)
        document.getElementById("result").innerHTML
                = "Genero: "+elemento[i].value;
    }
}

function getOption() {
    selectElement = document.querySelector('#select1');
    let output = selectElement.value;
    document.getElementById("output0").textContent = output;
    if(output === "São Paulo"){
        document.getElementById("output0").style.background = 'rgb(255,0,0)';
    }
    else if(output === "Santos"){
        document.getElementById("output0").style.background = 'rgb(0,0,255)';
    }
    else if(output === "Palmeiras"){
        document.getElementById("output0").style.background = 'rgb(0,255,0)';
    }
    else if(output === "Corinthians"){
        document.getElementById("output0").style.background = 'rgb(255,255,0)';
    }
    else if(output === "Flamengo"){
        document.getElementById("output0").style.background = 'rgb(255,0,255)';
    }
}

function getCheckedBox(){
    let checkBoxes = document.querySelectorAll(
        'input[type="checkbox"]:checked');
    let text = "";
    for(i = 0; i < checkBoxes.length; i++) {
        text = `${text}, ${checkBoxes[i].value}`;
    }
    document.getElementById('pri').innerHTML = text;
}



function getOption2(){
    selectElement = document.querySelector('#select2');
    let output = selectElement.value;
    document.getElementById("output2").textContent = output;
    if(output === "São Paulo"){
        document.getElementById("output2").style.background = 'rgb(0,255,0)';
       }
        else{
         document.getElementById("output2").style.background = 'rgb(255,0,0)';
        }
}


function getOption3(){
    selectElement = document.querySelector('#select3');
    let output = selectElement.value;
    document.getElementById("output3").textContent = output;
    if(output === "Corinthians"){
        document.getElementById("output3").style.background = 'rgb(0,255,0)';
    }
    else{
        document.getElementById("output3").style.background = 'rgb(255,0,0)';
    }
}

function getOption4(){
    selectElement = document.querySelector('#select4');
    let output = selectElement.value;
    document.getElementById("output4").textContent = output;
    if(output === "Palmeiras"){
        document.getElementById("output4").style.background = 'rgb(0,255,0)';
    } else {
        document.getElementById("output4").style.background = 'rgb(255,0,0)';
    }
}

function getOption5(){
    selectElement = document.querySelector('#select5');
    let output = selectElement.value;
    document.getElementById("output5").textContent = output;
    if(output === "Santos"){
        document.getElementById("output5").style.background = 'rgb(0,255,0)';
    }else{
        document.getElementById("output5").style.background = 'rgb(255,0,0)';
    }
}

function editDisplay(){
    document.getElementById("pStyle").style.color = 'red';
}