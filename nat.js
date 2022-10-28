
likes = 0;
document.getElementById("points").innerHTML = likes;

function ao(element, color){
     element.style.color = color;
     document.getElementById("bo").disabled = true;
     document.getElementById("co").disabled = true;
     document.getElementById("ao").disabled = true;
}

function bo(element, color){
    let likes = 0;
    element.style.color = color;
    document.getElementById("ao").disabled = true;
    document.getElementById("co").disabled = true;
    document.getElementById("bo").disabled = true;
    
}
function co(element, color){
    element.style.color = color;
    document.getElementById("bo").disabled = true;
    document.getElementById("ao").disabled = true;
    document.getElementById("co").disabled = true;
    likes = parseInt(document.getElementById("points").innerHTML);
     likes += 10;
     //alert("Value of likes is: " + likes);
     document.getElementById("points").innerHTML = likes;
     likes = document.getElementById("likes").value;
     localStorage.setItem("likes", likes);
   
}

function at(element, color){
    element.style.color = color;
    document.getElementById("bt").disabled = true;
    document.getElementById("ct").disabled = true;
    document.getElementById("at").disabled = true;
    likes = parseInt(document.getElementById("points").innerHTML);
     likes += 10;
     //alert("Value of likes is: " + likes);
     document.getElementById("points").innerHTML = likes;
     likes = document.getElementById("likes").value;
}

function bt(element, color){
    let likes = 0;
    element.style.color = color;
    document.getElementById("at").disabled = true;
    document.getElementById("ct").disabled = true;
    document.getElementById("bt").disabled = true;
    
}
function ct(element, color){
    element.style.color = color;
    document.getElementById("bt").disabled = true;
    document.getElementById("at").disabled = true;
    document.getElementById("ct").disabled = true;
}

function ath(element, color){
    element.style.color = color;
    document.getElementById("cth").disabled = true;
    document.getElementById("bth").disabled = true;
    document.getElementById("ath").disabled = true;

}

function cth(element, color){
    element.style.color = color;
    document.getElementById("bth").disabled = true;
    document.getElementById("ath").disabled = true;
    document.getElementById("cth").disabled = true;
    likes = parseInt(document.getElementById("points").innerHTML);
    likes += 10;
    //alert("Value of likes is: " + likes);
    document.getElementById("points").innerHTML = likes;
    likes = document.getElementById("likes").value;

}

function bth(element, color){
    let likes = 0;
    element.style.color = color;
    document.getElementById("ath").disabled = true;
    document.getElementById("cth").disabled = true;
    document.getElementById("bth").disabled = true;
}

function af(element, color){
    element.style.color = color;
    document.getElementById("bf").disabled = true;
    document.getElementById("cf").disabled = true;
    document.getElementById("bf").disabled = true;
}

function cf(element, color){
    element.style.color = color;
    document.getElementById("af").disabled = true;
    document.getElementById("cf").disabled = true;
    document.getElementById("bf").disabled = true;
}

function bf(element, color){
    let likes = 0;
    element.style.color = color;
    document.getElementById("af").disabled = true;
    document.getElementById("cf").disabled = true;
    document.getElementById("bf").disabled = true;
    likes = parseInt(document.getElementById("points").innerHTML) + 10;
    // alert("Value of likes is: " + likes);
    document.getElementById("points").innerHTML = likes;
    likes = document.getElementById("likes").value;
    localStorage.setItem("likes", likes);
    
}



function next (){

}

function left(){
    window.location = "index.html";
}q