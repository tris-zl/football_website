
document.getElementById("btn_1").onclick = function() {
    var state = document.getElementById("myForm")
    if(state.style.display == "block"){
        state.style.display = "none"
    }
    else{
        state.style.display = "block"
    }
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

document.getElementById("menu_aufstellungen_btn").onclick = function() {
    var state = document.getElementById("menu_links")
    if(state.style.display == "block"){
        state.style.display = "none"
    }
    else{
        state.style.display = "block"
    }
}

