function onClick(){
    let item = ["Nome", "Idade", "Profissão", "Cpf"];
    item[0] = document.getElementById('nome').value;
    item[1] = document.getElementById('idade').value;
    item[2] = document.getElementById('bandaFavorita').value;
    item[3] = document.getElementById('musicaFavorita').value;

    console.log(item);
}