function obterMensagens() {
    return $.ajax({
        url: 'https://app-p2-js-c88e9128234a.herokuapp.com/mensagens',
        method: 'GET',
        dataType: 'json',
        crossDomain: true
    });
}

function inserirMensagem(mensagem) {
    return $.ajax({
        url: 'https://app-p2-js-c88e9128234a.herokuapp.com/mensagens',
        method: 'POST',
        data: JSON.stringify(mensagem),
        contentType: 'application/json',
        dataType: 'text',
        crossDomain: true
    });
}

function validarUsuario(objLoginSenha) {
    return $.ajax({
        url: 'https://app-p2-js-c88e9128234a.herokuapp.com/usuarios/validar',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'text',
        crossDomain: true,
        data: JSON.stringify(objLoginSenha)
    });
}