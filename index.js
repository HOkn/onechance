//おりたたみindexをつくる
function ShowCBox(boxid) {
   var target = document.getElementById(boxid);
   if(target.style.display != "block") {
      target.style.display = "block";
   }
   else {
      target.style.display = "";
   }
}
function HideCBox(boxid) {
   var target = document.getElementById(boxid);
   if(target.style.display != "none"){
      target.style.display = "none";
   }
   else{
      target.style.display = "";
   }
}


