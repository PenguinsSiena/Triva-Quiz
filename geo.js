likes = 0;
document.getElementById("points").innerHTML = likes;

function a(element, color){
     element.style.color = color;
     document.getElementById("b").disabled = true;
     document.getElementById("c").disabled = true;
     document.getElementById("a").disabled = true;
}

function b(element, color){
    let likes = 0;
    element.style.color = color;
    document.getElementById("a").disabled = true;
    document.getElementById("c").disabled = true;
    document.getElementById("b").disabled = true;
    likes = parseInt(document.getElementById("points").innerHTML);
    likes += 10;
    //alert("Value of likes is: " + likes);
    document.getElementById("points").innerHTML = likes;
}
function c(element, color){
    element.style.color = color;
    document.getElementById("b").disabled = true;
    document.getElementById("a").disabled = true;
    document.getElementById("c").disabled = true;
}

function atwo(element, color){
    element.style.color = color;
    document.getElementById("btwo").disabled = true;
    document.getElementById("ctwo").disabled = true;
    document.getElementById("atwo").disabled = true;
}

function ctwo(element, color){
    let likes = 0;
    element.style.color = color;
    document.getElementById("btwo").disabled = true;
    document.getElementById("atwo").disabled = true;
    document.getElementById("ctwo").disabled = true;
    likes = parseInt(document.getElementById("points").innerHTML) + 10;
    // alert("Value of likes is: " + likes);
    document.getElementById("points").innerHTML = likes;
    
}
function btwo(element, color){
    element.style.color = color;
    document.getElementById("ctwo").disabled = true;
    document.getElementById("btwo").disabled = true;
    document.getElementById("atwo").disabled = true;
}

function bthree(element, color){
    element.style.color = color;
    document.getElementById("cthree").disabled = true;
    document.getElementById("athree").disabled = true;
    document.getElementById("bthree").disabled = true;
}

function cthree(element, color){
    element.style.color = color;
    document.getElementById("bthree").disabled = true;
    document.getElementById("cthree").disabled = true;
    document.getElementById("athree").disabled = true;
}

function athree(element, color){
    let likes = 0;
    element.style.color = color;
    document.getElementById("bthree").disabled = true;
    document.getElementById("cthree").disabled = true;
    document.getElementById("athree").disabled = true;
    likes = parseInt(document.getElementById("points").innerHTML) + 10;
    // alert("Value of likes is: " + likes);
    document.getElementById("points").innerHTML = likes;
    
}

function bfour(element, color){
    element.style.color = color;
    document.getElementById("cfour").disabled = true;
    document.getElementById("bfour").disabled = true;
    document.getElementById("afour").disabled = true;
}

function cfour(element, color){
    element.style.color = color;
    document.getElementById("bfour").disabled = true;
    document.getElementById("cfour").disabled = true;
    document.getElementById("afour").disabled = true;
}

function afour(element, color){
    let likes = 0;
    element.style.color = color;
    document.getElementById("bfour").disabled = true;
    document.getElementById("afour").disabled = true;
    document.getElementById("cfour").disabled = true;
    likes = parseInt(document.getElementById("points").innerHTML) + 10;
    // alert("Value of likes is: " + likes);
    document.getElementById("points").innerHTML = likes;
    
}



function next (){

}

function left(){
    window.location = "index.html";
}