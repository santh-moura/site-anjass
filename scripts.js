document.getElementById('menu-button').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

const materias = [
    "",
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

function criarTabelaHorarios() {
    const tabelaHTML = `
        <h1>Horários:</h1>
        <table>
            <thead>
                <tr>
                    <th>Horário</th>
                    <th>Segunda</th>
                    <th>Terça</th>
                    <th>Quarta</th>
                    <th>Quinta</th>
                    <th>Sexta</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>07:15 - 08:05</td>
                    <td>${materias[3]}</td>
                    <td>${materias[6]}</td>
                    <td>${materias[7]}</td>
                    <td>${materias[9]}</td>
                    <td>${materias[5]}</td>
                </tr>
                <tr>
                    <td>08:05 - 08:55</td>
                    <td>${materias[3]}</td>
                    <td>${materias[7]}</td>
                    <td>${materias[1]}</td>
                    <td>${materias[4]}</td>
                    <td>${materias[9]}</td>
                </tr>
                <tr>
                    <td>08:55 - 09:45</td>
                    <td>${materias[2]}</td>
                    <td>${materias[8]}</td>
                    <td>${materias[6]}</td>
                    <td>${materias[3]}</td>
                    <td>${materias[6]}</td>
                </tr>
                <tr>
                    <td>10:00 - 10:50</td>
                    <td>${materias[7]}</td>
                    <td>${materias[9]}</td>
                    <td>${materias[2]}</td>
                    <td>${materias[6]}</td>
                    <td>${materias[4]}</td>
                </tr>
                <tr>
                    <td>10:50 - 11:40</td>
                    <td>${materias[4]}</td>
                    <td>${materias[2]}</td>
                    <td>${materias[8]}</td>
                    <td>${materias[5]}</td>
                    <td>${materias[1]}</td>
                </tr>
                <tr>
                    <td>11:40 - 12:30</td>
                    <td>${materias[5]}</td>
                    <td>${materias[2]}</td>
                    <td>${materias[4]}</td>
                    <td>${materias[1]}</td>
                    <td>${materias[2]}</td>
                </tr>
            </tbody>
        </table>
    `;

    document.getElementById('tabela-horarios').innerHTML = tabelaHTML;
}

const AbrevMaterias = [
    "",
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
    "",
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

function criarBlocosMaterias() {
    const materiasHTML = `
        <div class="materias">
            <div class="bloco ${classeCor[1]} alinhamento">
                <br>
                <a href="pasta_materias/${AbrevMaterias[1]}.html">Português</a>
                <img src="pasta_materias/ft_${AbrevMaterias[1]}.jpg" alt="Português">
            </div>
            <div class="bloco ${classeCor[2]} alinhamento">
                <br>
                <a href="pasta_materias/${AbrevMaterias[2]}.html">Matemática</a>
                <img src="pasta_materias/ft_${AbrevMaterias[2]}.jpg" alt="Matemática">
            </div>
            <div class="bloco ${classeCor[3]} alinhamento">
                <br>
                <a href="pasta_materias/${AbrevMaterias[3]}.html">Geografia</a>
                <img src="pasta_materias/ft_${AbrevMaterias[3]}.jpg" alt="Geografia">
            </div>
            <div class="bloco ${classeCor[4]} alinhamento">
                <br>
                <a href="pasta_materias/${AbrevMaterias[4]}.html">História</a>
                <img src="pasta_materias/ft_${AbrevMaterias[4]}.jpg" alt="História">
            </div>
            <div class="bloco ${classeCor[5]} alinhamento">
                <br>
                <a href="pasta_materias/${AbrevMaterias[5]}.html">Biologia</a>
                <img src="pasta_materias/ft_${AbrevMaterias[5]}.jpg" alt="Biologia">
            </div>
            <div class="bloco ${classeCor[6]} alinhamento">
                <br>
                <a href="pasta_materias/${AbrevMaterias[6]}.html">Química</a>
                <img src="pasta_materias/ft_${AbrevMaterias[6]}.jpg" alt="Química">
            </div>
            <div class="bloco ${classeCor[7]} alinhamento">
                <br>
                <a href="pasta_materias/${AbrevMaterias[7]}.html">Física</a>
                <img src="pasta_materias/ft_${AbrevMaterias[7]}.jpg" alt="Física">
            </div>
            <div class="bloco ${classeCor[8]} alinhamento">
                <br>
                <a href="pasta_materias/${AbrevMaterias[8]}.html">Inglês</a>
                <img src="pasta_materias/ft_${AbrevMaterias[8]}.jpg" alt="Inglês">
            </div>
            <div class="bloco ${classeCor[9]} alinhamento">
                <br>
                <a href="pasta_materias/${AbrevMaterias[9]}.html">Ed. Física</a>
                <img src="pasta_materias/ft_${AbrevMaterias[9]}.jpg" alt="Ed. Física">
            </div>
        </div>
    `;

    document.getElementById('bloco-materias').innerHTML = materiasHTML;
}

function criarCabecalho() {
    const cabecalhoHTML = `
        <div class="cabecalho">
            <a href="index.html">Voltar</a>
            <p>aluno@escola.pr.gov.br</p>
            <img src="Captura de tela_2024-08-09_10-55-14.png">
        </div>
    `;

    document.getElementById('cabecalho').innerHTML = cabecalhoHTML;
}

window.addEventListener('load', criarCabecalho);
window.addEventListener('load', criarBlocosMaterias);
window.addEventListener('load', criarTabelaHorarios);
