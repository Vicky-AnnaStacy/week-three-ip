
  $(document).ready(function () {
    /*Form section*/
    $("form#form34A").submit(function (event) {
      // event.preventDefault();
      var name = $("input#MERGE1").val();
      if ($("input#MERGE1").val() && $("input#MERGE0").val()) {
        alert(
          name +
            ", we have received your message. Thank you for reaching out to us."
        );
      } else {
        alert("Please enter your name and email!");
      }
    });
    /*What we do section*/
    $("#whole-design").click(function () {
      $("#design").toggle();
      $("#design-image").toggle();
    });
  