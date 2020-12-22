function backup_compatibility_copyToClipboard(text){
    console.trace();
    var dummy = document.createElement("textarea");
    //dummy.style.display = "hidden";
    dummy.value=text;
    document.body.appendChild(dummy);
    dummy.focus();
    dummy.select();
    document.execCommand("copy");
    console.log("backup copied!")
    document.body.removeChild(dummy);
}


function copyToClipboard(text){
 //if(true)
    if(!navigator.clipboard)
      backup_compatibility_copyToClipboard(text);
   else{
       navigator.clipboard.writeText(text).then(function(){
            console.log("successful copied!")

       },function(){
           confirm.log("not copied!!")
       } );
   }   
  

}



document.getElementById("animate").addEventListener("click",function(){
console.trace();
var radius= document.getElementById("top-left").value.trim() 
+" "+ document.getElementById("top-right").value.trim() 
+" "+ document.getElementById("bottom-right").value.trim() 
+" "+ document.getElementById("bottom-left").value.trim() ;

document.getElementById("box").style.borderRadius= radius;

});

document.getElementById("copy").addEventListener("click",function(){
//console.trace();
var radius =document.querySelector("#box").style.borderRadius;
copyToClipboard(radius);

});