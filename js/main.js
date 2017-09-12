/* 
Naive file type check using the MIME file type
If the file type matches then the CSV is reformatted
If the file type does not match then the user is alerted
via a browser alert
*/
function verifyFile(input) {
  var mime_csv_arr=["text/csv",
                  "application/x-csv",
                  "application/csv", 
                  "text/x-comma-separated-values",
                  "text/comma-separated-values",
                  "application/vnd.ms-excel"]  

  var blob = input.files[0]; 
  if (mime_csv_arr.includes(blob.type)) {
    console.log('File supported')
    // Will need to proccess the CSV in this block //
    return true;
  }
  alert('File not supported')
  return false
}

function fbSearch() {

}

// jQuery event handlers
$(document).ready(function() {
  $("#csv_select").change(function(event){
    var input = document.getElementById("csv_select")
    var flag = verifyFile(input)
    if (flag) {
      $("#target").submit(function(event){
        console.log("Running API search")
        /*
        This block of code should do two things.
          1. Kick off the API search
          2. Display some sort of loading GIF on the DOM
        */
        fbSearch()
        event.preventDefault()
      })
    }
    event.preventDefault()

  });
});



/* ------ Notes ------ 
  $('#target').submit(function(event) {
  var input = document.getElementById("csv_select") 
  verifyFile(input)
  event.preventDefault()
  })


*/