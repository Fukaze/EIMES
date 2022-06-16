function ASD(){
  document.getElementById('ASD').innerHTML = "BRRRRRRRR";
}

function BLA() {
 if (document.getElementById('BLA').style == "display:none") {
    document.getElementById('BLA').style = "display:block";
 }

 else if (document.getElementById('BLA').style == "display:block") {
    document.getElementById('BLA').style = "display:inline";
 }
 else {
   document.getElementById('BLA').style = "display:none";
 }

}
