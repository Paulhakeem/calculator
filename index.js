function clearScreen(){
    document.getElementById("results").value ="";
}
function display(value){
    document.getElementById("results").value += value;
}
function calculate(){
    var p = document.getElementById("results").value;
    var q = eval(p)
    document.getElementById("results").value = q;
}