function renderTabelaBoletim() {
    // Arrays para textos dinâmicos
    const headerTexts = [
        "Português",
        "Matemática",
        "Geografia",
        "História",
        "Biologia",
        "Química",
        "Física",
        "Inglês",
        "Educação Física"
    ];

    const paragraphTexts = [
        "Prof Silvia",
        "Prof Técia",
        "Prof Kauê",
        "Prof Shirley",
        "Prof Cristiane",
        "Prof Daniel",
        "Prof Célia",
        "Prof Yasmin",
        "Prof Valéria"
    ];

    const logoImages = [
        "port",
        "mat",
        "geo",
        "hist",
        "bio",
        "quim",
        "fis",
        "eng",
        "edfis"
    ];

    const classeCor = [
        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        "pink",
        "purple",
        "brown"
    ];

    // Acessa o texto do título diretamente
    const tituloTexto = document.title; // ou use document.getElementById('pageTitle').textContent;

    // Declara a variável index
    let index;

    // Verifica o valor de tituloTexto e define o índice correspondente
    if (tituloTexto === 'Português') {
        index = 0;
    } else if (tituloTexto === 'Matemática') {
        index = 1;
    } else if (tituloTexto === 'Geografia') {
        index = 2;
    } else if (tituloTexto === 'História') {
        index = 3;
    } else if (tituloTexto === 'Biologia') {
        index = 4;
    } else if (tituloTexto === 'Química') {
        index = 5;
    } else if (tituloTexto === 'Física') {
        index = 6;
    } else if (tituloTexto === 'Inglês') {
        index = 7;
    } else if (tituloTexto === 'Educação Física') {
        index = 8;
    } else {
        // Se nenhum valor corresponder, define um valor padrão
        index = 0; // ou qualquer outro valor padrão
    }

    // Agora você pode usar a variável `index` para outras operações
    console.log("Index definido: ", index);

    // Cabeçalho
    const headerHtml = `
        <header class="${classeCor[index]}">
            <h1>${headerTexts[index]}</h1>
            <p>${paragraphTexts[index]}</p>
            <img src="ft_${logoImages[index]}.jpg">
            <span class="botaovoltar"><a href="../inicio.html">Voltar</a></span>
        </header>
    `;

    // Tabela de atividades
    const atividades = [
        { nome: 'AV1', valor: 2.5, nota: 2.5 },
        { nome: 'R1', valor: 2.5, nota: 2.5 },
        { nome: 'AV2', valor: 2.5, nota: 2.5 },
        { nome: 'R2', valor: 2.5, nota: 2.5 },
        { nome: 'AV3', valor: 2.5, nota: 2.5 },
        { nome: 'R3', valor: 2.5, nota: 2.5 },
        { nome: 'AV4', valor: 2.5, nota: 2.5 },
        { nome: 'R4', valor: 2.5, nota: 2.5 }
    ];

    let tableRows = '';

    atividades.forEach(atividade => {
        tableRows += `
            <tr>
                <td>${atividade.nome}</td>
                <td>${atividade.valor}</td>
                <td>${atividade.nota}</td>
            </tr>
        `;
    });

    const tableHtml = `
        <div class="txtblt"><h1>BOLETIM:</h1></div>
        <table>
            <thead class="${classeCor[index]}">
                <tr>
                    <th>Atividade:</th>
                    <th>Valor:</th>
                    <th>Nota:</th>
                </tr>
            </thead>
            <tbody>
                ${tableRows}
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="2">Nota: </td>
                    <td>10.0</td>
                </tr>
            </tfoot>
        </table>
    `;

    // Adiciona o conteúdo ao body
    document.body.innerHTML = headerHtml + tableHtml;
}

// Chama a função para renderizar a tabela
renderTabelaBoletim();