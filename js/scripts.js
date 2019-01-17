$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    debugger;
    var height = parseInt($("#height").val());

    if (height <= 3) {
      $('#Tier1').show();
    }
    else if (height > 3 && height <= 5) {
      $('#Tier1').show();
      $('#Tier2').show();
    } else {
      $('#Tier1').show();
      $('#Tier2').show();
      $('#Tier3').show();
    }

  });
});
