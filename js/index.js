const botaoEnviar = document.getElementById("botao-enviar");

const formulario = document.getElementById("formulario");

botaoEnviar.addEventListener("click", () => {

    const campoTelefone = document.getElementById("telefone");

    const valorCampoTelefone = campoTelefone.value;
    console.log(valorCampoTelefone)

    if (valorCampoTelefone.length >= 11) {
        formulario.submit();
    } else {
        alert("Favor inserir o telefone com o DDD!");
    }

}
);