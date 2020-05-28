

// var options = document.getElementById("listtext");
// onclick = function () {
//     if (listtext = ajiDeGallina
// }

// function ddlselect()
// {
//     var d = document.getElementById("ddselect");
//     var displaytext= d.options(d.selectedIndex).text;
//     document.getElementById("txtvalue").value=displaytext;
// }

function fn1()
        {
            var select = document.getElementById("ddselect");
            //console.log(select.options[select.selectedIndex].value)
            //var selected = select.options[select.selectedIndex].value
            var selected = select.selectedIndex
            if(selected === 1) { //redirect to Arroz Con Pato
            window.document.location='./Ingredients.html';
             } else if (selected === 2) {
            window.document.location='./Ingredients2.html';
             } else if (selected === 3) {
            window.document.location='./Ingredients3.html';
             } else {
            console.log ('choose another')
             }
            }

// Get the modal
var modal = document.getElementById("myModal");
    
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}