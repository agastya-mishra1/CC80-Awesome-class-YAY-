function getPara1(){
var inputs= [];
for (var i = 1; i <=6; i++){
inputs.push(document.getElementById("input"+i).value); 
}
inputs.join(".");
document.getElementById("showPara1").innerHTML=inputs.join(".");
}

function getPara2(){
    var text= [];
    for (var k = 1; k <=6; k++){
    text.push(document.getElementById("text"+k).value); 
    }
    text.join(".");
    document.getElementById("showPara2").innerHTML=text.join(".");
    }