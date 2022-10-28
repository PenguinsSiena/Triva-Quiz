likes = 0;
document.getElementById("points").innerHTML = likes;

function aoa(element, color){
     element.style.color = color;
     document.getElementById("bob").disabled = true;
     document.getElementById("coc").disabled = true;
     document.getElementById("aoa").disabled = true;
}

function bob(element, color){
    let likes = 0;
    element.style.color = color;
    document.getElementById("aoa").disabled = true;
    document.getElementById("coc").disabled = true;
    document.getElementById("bob").disabled = true;
    
}
function coc(element, color){
    element.style.color = color;
    document.getElementById("bob").disabled = true;
    document.getElementById("coc").disabled = true;
    document.getElementById("aoa").disabled = true;
    likes = parseInt(document.getElementById("points").innerHTML);
    likes += 10;
    //alert("Value of likes is: " + likes);
    document.getElementById("points").innerHTML = likes;
}

function ata(element, color){
    element.style.color = color;
    document.getElementById("btb").disabled = true;
    document.getElementById("ata").disabled = true;
    document.getElementById("ctc").disabled = true;
}

function ctc(element, color){
    let likes = 0;
    element.style.color = color;
    document.getElementById("btb").disabled = true;
    document.getElementById("ctc").disabled = true;
    document.getElementById("ata").disabled = true;
    
}
function btb(element, color){
    element.style.color = color;
    document.getElementById("ctc").disabled = true;
    document.getElementById("btb").disabled = true;
    document.getElementById("ata").disabled = true;
    likes = parseInt(document.getElementById("points").innerHTML) + 10;
    // alert("Value of likes is: " + likes);
    document.getElementById("points").innerHTML = likes;
}

function atha(element, color){
    element.style.color = color;
    document.getElementById("cthc").disabled = true;
    document.getElementById("atha").disabled = true;
    document.getElementById("bthb").disabled = true;
    likes = parseInt(document.getElementById("points").innerHTML) + 10;
    // alert("Value of likes is: " + likes);
    document.getElementById("points").innerHTML = likes;
}

function cthc(element, color){
    element.style.color = color;
    document.getElementById("bthb").disabled = true;
    document.getElementById("cthc").disabled = true;
    document.getElementById("atha").disabled = true;
}

function bthb(element, color){
    let likes = 0;
    element.style.color = color;
    document.getElementById("atha").disabled = true;
    document.getElementById("bthb").disabled = true;
    document.getElementById("cthc").disabled = true;
}

function afa(element, color){
    element.style.color = color;
    document.getElementById("cfc").disabled = true;
    document.getElementById("afa").disabled = true;
    document.getElementById("bfb").disabled = true;
}

function cfc(element, color){
    element.style.color = color;
    document.getElementById("bfb").disabled = true;
    document.getElementById("cfc").disabled = true;
    document.getElementById("afa").disabled = true;
}

function bfb(element, color){
    let likes = 0;
    element.style.color = color;
    document.getElementById("afa").disabled = true;
    document.getElementById("bfb").disabled = true;
    document.getElementById("cfc").disabled = true;
    likes = parseInt(document.getElementById("points").innerHTML) + 10;
    // alert("Value of likes is: " + likes);
    document.getElementById("points").innerHTML = likes;
    
}



function next (){

}

function left(){
    window.location = "index.html";
}