likes = 0;
document.getElementById("points").innerHTML = likes;

function aa(element, color){
     element.style.color = color;
     document.getElementById("bb").disabled = true;
     document.getElementById("cc").disabled = true;
     document.getElementById("aa").disabled = true;
     likes = parseInt(document.getElementById("points").innerHTML);
     likes += 10;
     //alert("Value of likes is: " + likes);
     document.getElementById("points").innerHTML = likes;
}

function bb(element, color){
    let likes = 0;
    element.style.color = color;
    document.getElementById("aa").disabled = true;
    document.getElementById("bb").disabled = true;
    document.getElementById("cc").disabled = true;
    
}
function cc(element, color){
    element.style.color = color;
    document.getElementById("bb").disabled = true;
    document.getElementById("cc").disabled = true;
    document.getElementById("aa").disabled = true;
   
}

function aatwo(element, color){
    element.style.color = color;
    document.getElementById("bbtwo").disabled = true;
    document.getElementById("aatwo").disabled = true;
    document.getElementById("cctwo").disabled = true;
}

function bbtwo(element, color){
    let likes = 0;
    element.style.color = color;
    document.getElementById("aatwo").disabled = true;
    document.getElementById("bbtwo").disabled = true;
    document.getElementById("cctwo").disabled = true;
    
}
function cctwo(element, color){
    element.style.color = color;
    document.getElementById("bbtwo").disabled = true;
    document.getElementById("cctwo").disabled = true;
    document.getElementById("aatwo").disabled = true;
    likes = parseInt(document.getElementById("points").innerHTML) + 10;
    // alert("Value of likes is: " + likes);
    document.getElementById("points").innerHTML = likes;
}

function aathree(element, color){
    element.style.color = color;
    document.getElementById("ccthree").disabled = true;
    document.getElementById("aathree").disabled = true;
    document.getElementById("bbthree").disabled = true;

}

function ccthree(element, color){
    element.style.color = color;
    document.getElementById("bbthree").disabled = true;
    document.getElementById("ccthree").disabled = true;
    document.getElementById("aathree").disabled = true;
    likes = parseInt(document.getElementById("points").innerHTML) + 10;
    // alert("Value of likes is: " + likes);
    document.getElementById("points").innerHTML = likes;
}

function bbthree(element, color){
    let likes = 0;
    element.style.color = color;
    document.getElementById("aathree").disabled = true;
    document.getElementById("bbthree").disabled = true;
    document.getElementById("ccthree").disabled = true;
}

function aafour(element, color){
    element.style.color = color;
    document.getElementById("bbfour").disabled = true;
    document.getElementById("ccfour").disabled = true;
    document.getElementById("aafour").disabled = true;
}

function ccfour(element, color){
    element.style.color = color;
    document.getElementById("aafour").disabled = true;
    document.getElementById("ccfour").disabled = true;
    document.getElementById("bbfour").disabled = true;
}

function bbfour(element, color){
    let likes = 0;
    element.style.color = color;
    document.getElementById("aafour").disabled = true;
    document.getElementById("bbfour").disabled = true;
    document.getElementById("ccfour").disabled = true;
    likes = parseInt(document.getElementById("points").innerHTML) + 10;
    // alert("Value of likes is: " + likes);
    document.getElementById("points").innerHTML = likes;
    
}



function next (){

}

function left(){
    window.location = "index.html";
}