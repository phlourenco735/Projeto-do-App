const itens = 
[
    {
        nome: "Chester Bennington",
        idade: 41,
        funcao: "Cantor principal",
        membro: "19 anos"
    },
    {
        nome: "Mike Shinoda",
        idade: 43,
        funcao: "Pianista",
        membro: "24 anos"
    },
    {
        nome: "Joe Hahn",
        idade: 43,
        funcao: "Toca-discos",
        membro: "24 anos"
    },
    {
        nome: "Mark Wakefield",
        idade: 46,
        funcao: "Cantor",
        membro: "2 anos"
    },
    {
        nome: "Rob Bourdon",
        idade: 41,
        funcao: "Baterista",
        membro: "25 anos"
    },
    {
        nome: "Dave Farrell",
        idade: 43,
        funcao: "Baixista",
        membro: "25 anos"
    },
    {
        nome: "Brad Delson",
        idade: 42,
        funcao: "Baixista Elétrico",
        membro: "3 anos"
    },
    {
        nome: "Kyle Christener",
        idade: 43,
        funcao: "Baixista",
        membro: "Alguns Meses"
    },
    {
        nome: "Scott Koziol",
        idade: 44,
        funcao: "Músico",
        membro: "2 anos"
    }
];

const lista = document.getElementById("lista");
const data = document.getElementById("data");

lista.style.fontFamily = "Comic Sans MS";

function search() {
    lista.innerHTML = "";
    for (let i = 0; i <= itens.length - 1; i++) {
        //if(itens[i].nome == data.value) {
        let pattern = new RegExp(data.value.toLowerCase(), 'g');
        if(itens[i].nome.toLowerCase().match(pattern)) {
            lista.innerHTML += 
            `
            <li>
                <p> Nome: ${itens[i].nome} </p>
                <p> Idade: ${itens[i].idade} </p>
                <p> Função na banda: ${itens[i].funcao} </p>
                <p> Tempo na banda: ${itens[i].membro} </p>
            </li>
            <br>
            <hr style="width:300px;margin:auto;height:5px;border-width:0;color:red;background-color:red"/> 
            <br>
            `;
        }
    }
}