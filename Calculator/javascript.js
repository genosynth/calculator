function putNumber(x){     

        document.getElementById("resultbox").value += x;
    }

function cancel(){ //not working!

    //var x = document.getElementById("resultbox");
    document.getElementById("resultbox").value = "";
}

function operator(op){

    document.getElementById("resultbox").value += op;
}

function equals(){

    var x = document.getElementById("resultbox");
    x = eval(x.value);
    document.getElementById("resultbox").value = x;

    
}