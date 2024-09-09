function source() {
    let results = "";
    let section = document.getElementById("resultados-pesquisa");
    let sourceField = document.getElementById("source-field").value;

    for (let item of animes) {
        if(sourceField == ''){
         section.innerHTML = "<p>Sem Registros</p>"
                return;
            }
        if(item.titulo.includes(sourceField) || item.descricao.includes(sourceField) || item.anoLancamento.includes(sourceField)){

            results += `
            <div class="item-resultado">
            <h2>${item.titulo}</h2>
            <p class="descricao-meta">
            ${item.descricao}
            <a href="${animes.link}" target="_blank">Saiba mais</a>
            </p>
            <p class="descricao-meta">
            Ano de Lançamento: ${item.anoLancamento}
            </p>
            </div>
            `
        }else if(!results){
            section.innerHTML = "<p>Sem Registros</p>"
        }

        section.innerHTML = results
    }
        
}