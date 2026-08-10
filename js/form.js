
//class contato

class Contato {
  constructor(nome,email, cpf, sobrenome,telefone, contato) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.sobrenome = sobrenome;
    this.telefone = telefone;
    this.contato = contato;
  }
}

function Post(form) {
  let data = new Contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);

console.log(data);

Enviar();
  
}

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }else{
        alert(`Tente novamente! `);
    }

}