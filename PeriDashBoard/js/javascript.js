
/* Afficher le contenu des documents GoogleDocs après avoir appuillé sur un bouton du menu */
$(".btn-googledoc").click(function(){
  let path = $(this).data("path");
  $("#googledoc-path").prop("value", path);
  $("#googledoc-view").replaceWith($("#googledoc-view").clone().attr("src", path));
}); 

/* Ouvrir le document dans le navigateur */
$("#googledoc-goto").click(function(){
  let path = $("#googledoc-path").prop("value");
  window.open(path, '_blank');
}); 

$(document).ready(function () {
  chargerListeDocumentsGoogleDoc();
});

function chargerListeDocumentsGoogleDoc(){
  $.getJSON('src/liens-googledoc.json')
  .fail(function () {
      console.error('Fichier de liens est non disponible.')
  })
  .done(function (data) {
      let listeBoutons;
      $.each(data.lien, function (i, item) {
        let $btn = $('<a>').addClass('btn btn-dark btn-googledoc').attr('role', 'button').data('path', item.url);
        $btn.append(item.nom);
        listeBoutons.append($btn);
      });
      $('#sortie-nouvelles').append(listeBoutons);
  })
}