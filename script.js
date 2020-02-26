

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


$( document ).ready(function() {
    var val = 20;
    console.log(val);
    var $circle = $('#svg #bar');
    
    if (isNaN(val)) {
     val = 100; 
    }
    else{
      var r = $circle.attr('r');
      var c = Math.PI*(r*2);
     
      if (val < 0) { val = 0;}
      if (val > 100) { val = 100;}
      
      var pct = ((100-val)/100)*c;
      
      $circle.css({ strokeDashoffset: pct});
      
      $('#cont').attr('data-pct',val);
    }
  });



function myFunction() {
    console.log('lklklkl');
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filterbyname");
    filter = input.value.toUpperCase();
    table = document.getElementById("campaignTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }



function sortTable(n) { 
    console.log(n);
    var table; 
    table = document.getElementById("campaignTable"); 
    var rows, i, x, y, count = 0; 
    var switching = true; 

    var direction = "ascending"; 

    while (switching) { 
        switching = false; 
        var rows = table.rows; 

        for (i = 1; i < (rows.length - 1); i++) { 
            var Switch = false; 

            x = rows[i].getElementsByTagName("TD")[n]; 
            y = rows[i + 1].getElementsByTagName("TD")[n]; 

            if (direction == "ascending") { 

                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) 
                    { 
                    Switch = true; 
                    break; 
                } 
            } else if (direction == "descending") { 

                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) 
                    { 
                    Switch = true; 
                    break; 
                } 
            } 
        } 
        if (Switch) { 
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); 
            switching = true; 

            count++; 
        } else { 
            // Run while loop again for descending order 
            if (count == 0 && direction == "ascending") { 
                direction = "descending"; 
                switching = true; 
            } 
        } 
    } 
} 

function sortBy(sort) {
    var selectedValue = sort.value;
    alert(  " Value: " + selectedValue);
}
