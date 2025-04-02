
function conversor(){

    const entrada = Number(document.getElementById("digitar").value)
    const saida = document.getElementById("resultado")

    let valorWons = entrada;
    const umwon = 0.0040;

    saida.value = valorWons*umwon;
}
