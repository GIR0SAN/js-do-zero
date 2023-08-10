const x = 0
const y = 3
const w = x

const outroW = 15 - y
const outroY = 5

const final = x + outroY + 7 + outroW
//console.log(final)

const serie = {
    nome:"Simpsons",
    temporadas: 12
}

serie.temporadas = 9
serie.episodios = 50 
const frase = `A série ${serie.nome} tem ${serie.temporadas} temporadas.`
const totalEpisodios = serie.temporadas *  serie.episodios

//console.log(serie)
//console.log(totalEpisodios)

//Objetos em Javascript são mutaveis por padrão.

const pessoa = {
    nome: 'Giro',
    idade: 37,
    peso:110,
    altura:1.83,
}
//console.log(pessoa)


const compras = ['pera', 'maça', 'pão']

compras[0] = 'abacaxi'
compras[3]='goiaba'
compras[4]='mamão'
//console.log(compras)

const carros = []
carros[0] = 'Fusca'
//console.log(carros[0])

const series = [
    {nome:'Simpsons', ano:1980},
    {nome:'Family Guy', ano: 2005},
]
//console.log(series[0].ano)


//Array de arrays- Array multidimensional ou Aninhamento de Arrays
const trimestres = [
    ['Janeiro', 'Fevereiro', 'Março'],
    ['Abril', 'Maio', 'Junho'],
    ['Julho', 'Agosto', 'Setembro']
]

console.log(trimestres[2][1][0])
//acima, 2 pega o terceiro array, 1 pega o segundo nome do terceiro array, e o 0 pega o proimeiro caracther do nome escolhido.

///adicionar array em Aninhamento de arrray:

trimestres[3]=['Outubro','Novembro','Dezembro']
console.log(trimestres)

// PRORPIEDADE DE OBJETO PODE ARMAZENAR QUALQUER TIPO DE DADOS, INCLUSIVE ARRAYS!!!


const pokemon = {
    nome: 'Charizard',
    tipos: ['Fogo', 'Voador']
}

console.log(pokemon.tipos[1])

const cidade = {
    nome:'Sorocaba',
    climaEnsolarado: true
}
console.log(cidade.climaEnsolarado)