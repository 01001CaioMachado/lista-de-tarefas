$(document).ready(function () {
    $('#form-atividade').submit(function (e) { 
        e.preventDefault();

        const novaTarefa = $('#lista-tarefa').val().trim();
        if (novaTarefa){
            const novaTarefaCadastrada = $('<li>')
                .text(novaTarefa)
                .click(function(){
                    $(this).toggleClass('completed');
                })
                .append('<span class="remove"><i class="fas fa-trash-alt"></i></span>');

            $('#agenda-tarefa').append(novaTarefaCadastrada);
            $('#lista-tarefa').val('');
        }
        
    });

    // Evento para remover tarefa
    $(document).on('click', '.remove', function() {
        $(this).parent().remove();
    });
    
});