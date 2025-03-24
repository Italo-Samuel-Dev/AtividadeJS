//Permite a entrada de dados pelo terminal
const readline = require("readline");

// Cria uma interface para entrada e saída de dados no terminal
const rl = readline.createInterface({
  input: process.stdin, // Define que a entrada será recebida pelo terminal
  output: process.stdout, // Define que a saída será exibida no terminal
});

let usuarios = []; // Array para armazenar os usuários

function menu() {
    console.log("\n--- MENU ---");
    console.log("1 - Incluir usuário");
    console.log("2 - Alterar usuário");
    console.log("3 - Excluir usuário");
    console.log("4 - Pesquisar usuário pelo nome");
    console.log("5 - Listar usuários cadastrados");
    console.log("6 - Sair");

    rl.question("Escolha uma opção: ", function (opcao) {
        switch (opcao) {
            case "1":
                incluirUsuario();
                break;
            case "2":
                alterarUsuario();
                break;
            case "3":
                excluirUsuario();
                break;
            case "4":
                pesquisarUsuario();
                break;
            case "5":
                listarUsuarios();
                break;
            case "6":
                console.log("Saindo...");
                rl.close();
                break;
            default:
                console.log("Opção inválida!");
                menu();
        }
    });
}

function incluirUsuario() {
    rl.question("Digite o CPF: ", function (cpf) {
        if (usuarios.some(u => u.cpf === cpf)) {
            console.log("Erro: CPF já cadastrado!");
            return menu();
        }
        rl.question("Digite o nome: ", function (nome) {
            rl.question("Digite a data de nascimento (DD/MM/AAAA): ", function (dataNascimento) {
                rl.question("Digite o e-mail: ", function (email) {
                    usuarios.push({ cpf, nome, dataNascimento, email });
                    console.log("✅ Usuário cadastrado com sucesso!");
                    menu();
                });
            });
        });
    });
}

function alterarUsuario() {
    rl.question("Digite o CPF do usuário que deseja alterar: ", function (cpf) {
        let usuario = usuarios.find(u => u.cpf === cpf);
        if (!usuario) {
            console.log("Usuário não encontrado!");
            return menu();
        }
        rl.question("Novo nome (deixe vazio para manter): ", function (nome) {
            rl.question("Nova data de nascimento (DD/MM/AAAA, deixe vazio para manter): ", function (dataNascimento) {
                rl.question("Novo e-mail (deixe vazio para manter): ", function (email) {
                    if (nome) usuario.nome = nome;
                    if (dataNascimento) usuario.dataNascimento = dataNascimento;
                    if (email) usuario.email = email;
                    console.log("✅ Usuário alterado com sucesso!");
                    menu();
                });
            });
        });
    });
}

function excluirUsuario() {
    rl.question("Digite o CPF do usuário que deseja excluir: ", function (cpf) {
        let index = usuarios.findIndex(u => u.cpf === cpf);
        if (index === -1) {
            console.log("Usuário não encontrado!");
            return menu();
        }
        usuarios.splice(index, 1);
        console.log("✅ Usuário excluído com sucesso!");
        menu();
    });
}

function pesquisarUsuario() {
    rl.question("Digite o nome do usuário que deseja pesquisar: ", function (nome) {
        let resultados = usuarios.filter(u => u.nome.toLowerCase().includes(nome.toLowerCase()));
        if (resultados.length === 0) {
            console.log("Nenhum usuário encontrado!");
        } else {
            console.log("Usuários encontrados:");
            resultados.forEach(u => console.log(`${u.nome} - CPF: ${u.cpf} - Nascimento: ${u.dataNascimento} - Email: ${u.email}`));
        }
        menu();
    });
}

function listarUsuarios() {
    if (usuarios.length === 0) {
        console.log("Nenhum usuário cadastrado.");
    } else {
        console.log("\n--- Lista de Usuários ---");
        usuarios.forEach(u => console.log(`${u.nome} - CPF: ${u.cpf} - Nascimento: ${u.dataNascimento} - Email: ${u.email}`));
    }
    menu();
}

// Inicia o programa
menu();
