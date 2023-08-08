const x = 0
const y = 3
const w = x

const outroW = 15 - y
const outroY = 5

const final = x + outroY + 7 + outroW
console.log(final)

const serie = {
    nome:"Simpsons",
    temporadas: 12
}

serie.temporadas = 9
serie.episodios = 50 
const frase = `A série ${serie.nome} tem ${serie.temporadas} temporadas.`
const totalEpisodios = serie.temporadas *  serie.episodios

console.log(serie)
console.log(totalEpisodios)

//Objetos em Javascript são mutaveis por padrão.

const pessoa = {
    nome: 'Giro',
    idade: 37,
    peso:110,
    altura:1.83,
}
console.log(pessoa)
