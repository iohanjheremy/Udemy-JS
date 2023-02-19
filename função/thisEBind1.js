const pessoa = {
    saudacao: 'Bom Dia!',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()

const falar = pessoa.falar
falar() // conflitop entre paradigmas: funcional e orientado a objeto

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()