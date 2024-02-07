async function getCep(cep){
    try{
        const resp = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let data = await resp.json();
        if(resp.status == 200) console.log('Tudo certo', JSON.stringify(data));
        else console.log(resp.status);
        print(data);
    }catch(error){
        console.error('O erro é ' + error);
    }
}

function print(data) {
    document.querySelector("#bairro").value = data.bairro;
    document.querySelector("#endereco").value = data.logradouro;
    document.querySelector("#cidade").value = data.localidade;
    document.querySelector("#uf").value = data.uf;
    document.querySelector("#ddd").value = data.ddd;
}
