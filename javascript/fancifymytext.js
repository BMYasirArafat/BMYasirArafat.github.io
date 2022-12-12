

function bigger(){
    let textArea = document.getElementById("mainText");
    textArea.style.fontSize = "24pt";
}

function fancyText(event){
    if(event.target.checked){
        let textArea = document.getElementById("mainText");
        textArea.style.fontWeight = 'bold';
        textArea.style.color = 'blue';
        textArea.style.textDecoration = 'underline';
    }
}

function boringText(event){
    if(event.target.checked){
        let textArea = document.getElementById("mainText");
        textArea.style.fontWeight = 'normal';
    }
}

function moo(){
    let textArea = document.getElementById("mainText");
    textArea.value = textArea.value.toUpperCase();
    let sentences = textArea.value.split('.');
    if(sentences[sentences.length-1] === ''){
        sentences.splice(sentences.length-1,1);
    }
    sentences = sentences.map(sentence => sentence + '-Moo');
    textArea.value = sentences.join('.');
}