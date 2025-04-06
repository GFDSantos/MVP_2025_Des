/*
--------------------------------------------------------------------------------------
Função getList() para buscar os apartamentos
--------------------------------------------------------------------------------------
*/
const getList = async () => {
    try {
        const response = await fetch('http://127.0.0.1:5000/apartamentos');
        if (!response.ok) {
            throw new Error(`Erro HTTP! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data); // Debug
        if (data && data.apartamentos && Array.isArray(data.apartamentos)) {
            data.apartamentos.forEach(item => insertList(item.condominio, item.endereco, item.disposicao, item.valor));
        } else {
            console.error("Resposta do servidor não contém apartamentos:", data);
        }
    } catch (error) {
        console.error('Erro:', error);
    }
};

/*
--------------------------------------------------------------------------------------
Chamada da função para carregamento inicial dos dados
--------------------------------------------------------------------------------------
*/
getList();

/*
--------------------------------------------------------------------------------------
Função para colocar um item na lista do servidor via requisição POST
--------------------------------------------------------------------------------------
*/
const postItem = async (inputCondominio, inputEndereco, inputDisposicao, inputValor) => {
    try {
        const formData = new FormData();
        formData.append('condominio', inputCondominio);
        formData.append('endereco', inputEndereco);
        formData.append('disposicao', inputDisposicao);
        formData.append('valor', inputValor);

        const response = await fetch('http://127.0.0.1:5000/apartamento', {
            method: 'post',
            body: formData
        });
        if (!response.ok) {
            throw new Error(`Erro HTTP! status: ${response.status}`);
        }
        await response.json(); // Ou verifique a resposta se necessário
    } catch (error) {
        console.error('Erro:', error);
    }
};

/*
--------------------------------------------------------------------------------------
Função para deletar um item da lista do servidor via requisição DELETE
--------------------------------------------------------------------------------------
*/
const deleteItem = async (condominio) => {
    try {
        const response = await fetch(`http://127.0.0.1:5000/apartamento?condominio=${condominio}`, {
            method: 'delete'
        });
        if (!response.ok) {
            throw new Error(`Erro HTTP! status: ${response.status}`);
        }
        await response.json(); // Ou verifique a resposta se necessário
    } catch (error) {
        console.error('Erro:', error);
    }
};

/*
--------------------------------------------------------------------------------------
Função para adicionar um novo apartamento com nome do condomínio, endereço, disposição e valor
--------------------------------------------------------------------------------------
*/
const newItem = () => {
    let inputCondominio = document.getElementById("newCondominio").value;
    let inputEndereco = document.getElementById("newEndereco").value;
    let inputDisposicao = document.getElementById("newDisposicao").value;
    let inputValor = document.getElementById("newValor").value;

    if (!inputCondominio || !inputEndereco) {
        alert("Preencha todos os campos!");
        return;
    }

    if (isNaN(inputValor)) {
        alert("O valor precisa ser um número!");
        return;
    }

    insertList(inputCondominio, inputEndereco, inputDisposicao, inputValor);
    postItem(inputCondominio, inputEndereco, inputDisposicao, inputValor);
    alert("Apartamento adicionado!");
};

/*
--------------------------------------------------------------------------------------
Função para inserir itens na lista apresentada
--------------------------------------------------------------------------------------
*/
const insertList = (condominio, endereco, disposicao, valor) => {
    const item = [
        condominio,
        `<a href="https://www.google.com/maps/search/?api=1&query=$${encodeURIComponent(endereco)}" target="_blank">${endereco}</a>`,
        disposicao,
        valor
    ];
    const table = document.getElementById('myTable');
    const row = table.insertRow();

    item.forEach(text => {
        const cell = row.insertCell();
        cell.innerHTML = text;
    });

    // Criar e adicionar o botão de excluir
    const deleteBtn = document.createElement("span");
    deleteBtn.className = "close";
    deleteBtn.textContent = "\u00D7";
    deleteBtn.onclick = () => {
        if (confirm("Você tem certeza que deseja remover este item?")) {
            row.remove();
            deleteItem(condominio);
            alert("Apartamento removido!");
        }
    };

    const btnCell = row.insertCell();
    btnCell.appendChild(deleteBtn);

    // Limpa os campos de entrada
    document.getElementById("newCondominio").value = "";
    document.getElementById("newEndereco").value = "";
    document.getElementById("newDisposicao").value = "";
    document.getElementById("newValor").value = "";
};

/*
--------------------------------------------------------------------------------------
Função para buscar endereço pelo CEP
--------------------------------------------------------------------------------------
*/
const buscarEndereco = async () => {
    const cep = document.getElementById("newCep").value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cep.length !== 8) {
        alert("CEP inválido!");
        return;
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) {
            throw new Error(`Erro HTTP! status: ${response.status}`);
        }
        const data = await response.json();

        if (data.erro) {
            alert("CEP não encontrado!");
            return;
        }

        document.getElementById("newEndereco").value = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
    } catch (error) {
        console.error('Erro:', error);
        alert("Erro ao buscar CEP!");
    }
};