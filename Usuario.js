const Genero = Object.freeze*( {
M: "M",
F: "F",
OUTRO: "Outro"
})







class Usuario {
    id;
    nome;
    senha;
    dataNascimento;
    genero;
    isAdmin;

    constructor (id, nome, senha, dataNascimento, genero){
this.id = id;
this.nome = nome;
this.dataNascimento = new date (dataNascimento);
this.genero = genero;
this.isAdmin = false;
    }
perfil(){
    return "Nome: " + this.nome + " - Data Nascimento: " + this.dataNascimento
}




}
const user1 = new Usuario(1, "Guilherme","123","2009-11-23T00:00:00",Genero.M );
console.log (User1)
user1.nome = "Guilherme";
console.log(user1)
console.log(user1.perfil())