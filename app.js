function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();

    let resultados = "";
    campoPesquisa = campoPesquisa.toLowerCase();
    let titulo = "";
    let descricao = "";
    let tags = "";



    if (!campoPesquisa){
        section.innerHTML = "<p>Perdão, nenhuma correspondência encontrada. Busque por raças de gatos, cuidados, indicações, etc."
        return;
    }


    for (let dado of dados) {
        
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        resultados += `
            <div class="item-resultado">
                <h2> <a href="#" target="_blank"> ${dado.titulo} </a></h2>
                <p class="descricao-meta"> ${dado.descricao} </p>
                <a href= ${dado.link} target="_blank">Saiba mais.</a>
            </div>
            `;
        }
    }

    if (!resultados) {
       resultados = "<p>Perdão, nenhuma correspondência encontrada. Busque por raças de gatos, cuidados, indicações, etc.</p>";
    }

    section.innerHTML = resultados;
    

    resultados.forEach(resultado => {
        const itemResultado = document.createElement('div');
        itemResultado.innerHTML = `
          <h2>${resultado.titulo}</h2>
          <img src="${resultado.imagem}" alt="${resultado.titulo}">
          <p>${resultado.descricao}</p>
        `;
        resultadosPesquisa.appendChild(itemResultado);
      });
}
