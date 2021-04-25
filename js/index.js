const botaoEnviar = document.getElementById("botao-enviar");



botaoEnviar.addEventListener("click", () => {

    const campoTelefone = document.getElementById("telefone");

    const campoEmail = document.getElementById("campo-email");

    const formulario = document.getElementById("formulario");

    const valorCampoTelefone = campoTelefone.value;

    const valorCampoEmail = campoEmail.value;

    if (valorCampoTelefone.length >= 11) {
        
        if (valorCampoEmail.indexOf("@") >= 1) {
            formulario.submit();
    } else {
        alert("Preencha os dados corretamente!");
    }
    } else {
        alert("Favor inserir o telefone com o DDD!");
    }

}
);