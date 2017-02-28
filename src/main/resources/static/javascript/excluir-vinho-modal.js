$('#confirmaExclusaoModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var name = button.data('nome'); // Extract info from data-* attributes
  var url = button.data('url-apagar');
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this);
  var form = modal.find('form');
  form.attr('action', url);
  modal.find('.modal-body span').html("Tem certeza que deseja excluir o <strong>" + name + "</strong>?");
  
});