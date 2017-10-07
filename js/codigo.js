$(document).ready(function () {
  debugger;
  var sideslider = $('[data-toggle=collapse-side]');
  var sel = sideslider.attr('data-target');
  var sel2 = sideslider.attr('data-target-2');
  sideslider.click(function (event) {
    $(sel).toggleClass('in');
    $(sel2).toggleClass('out');
  });



  $('#idprueba').click(
    function (e) {
      if ($(this).siblings('ul').is(":visible")) {
        alert("caca")
      } else {
        $(this).siblings('ul').css({ display: "block" });
      }
    }
  );



  $('.pulsador').click(function () {
    var valor = $(this)[0].id;
    switch (valor) {
      case "suma":
      $.get(valor+".html", function(htmlexterno){
        $("#contenido").html(htmlexterno);
           });
        break;
      default:
        break;
    }

  });
});
function optener(pagina) {
  switch (valor) {
    case "suma":
      break;
    default:
      break;
  }
}