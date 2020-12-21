

/**
 * Recursive binary to decimal conversion
 * @param {String} input 
 */
function rec_bin2dec(input){
   // input=input.split("").reverse().join(""); recursive ops
    if(input.length==1)
        return Number(input[0]);
    else 
        return Number(input[0])*Math.pow(2,input.length-1)+ rec_bin2dec(input.substring(1,input.length));
}

document.getElementById("calculate").addEventListener("click",function(){
    console.trace();//debug
    var input =document.getElementById("number").value;
    var output = rec_bin2dec(input);
    document.getElementById("output").value= output;

});
document.getElementById("number").addEventListener("keyup",function(){
    console.trace();//debug
    var r = /[01]+/
    var input = document.getElementById("number").value;
    var result = r.exec(input);
    if(result==null ||result[0]!=result.input){
        document.getElementById("hidden").style.display="block";
        document.getElementById("calculate").disabled=true;
    }else{
        document.getElementById("hidden").style.display="none";
        document.getElementById("calculate").disabled=false;
    }

});