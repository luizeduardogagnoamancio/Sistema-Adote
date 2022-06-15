const formCadastro = document.querySelector("#form-cadastro")
if (formCadastro) {
    formCadastro.addEventListener("submit", function(e) {
        submitForm(e, this)
    })
}