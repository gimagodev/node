// https://medium.com/tableless/o-que-todo-desenvolvedor-javascript-precisa-saber-2cc33daedb86

var months = [
    {shortName: 'Jan', fullName: 'Janeiro',  number: 1},
    {shortName: 'Fev', fullName: 'Fevereiro', number: 2},
    {shortName: 'Mar', fullName: 'Março',  number: 3},
    {shortName: 'Abr', fullName: 'Abril', number: 4},
    {shortName: 'Mai', fullName: 'Maio',  number: 5},
    {shortName: 'Jun', fullName: 'Junho', number: 6},
    {shortName: 'Jul', fullName: 'Julho',  number: 7},
    {shortName: 'Ago', fullName: 'Agosto', number: 8},
    {shortName: 'Set', fullName: 'Setembro',  number: 9},
    {shortName: 'Out', fullName: 'Outubro', number: 10},
    {shortName: 'Nov', fullName: 'novembro',  number: 11},
    {shortName: 'Dez', fullName: 'Dezembro', number: 12},
   
];

// // forma difícil
// var shortNameMonths = [];
// for (var i = 0; i < months.length; i++) {
//     shortNameMonths.push(months[i].shortName);
// }

// map
var shortNameMonths = months.map(function(month) {
    return month.shortName;
});

// filter
var primeiroSemestre = months.filter(function(month) {
    return month.number <= 6
});

// reduce
var monthsAcc = months.reduce(function(acc, month) {
    return acc + '/' + month.shortName;
}, '');

console.log(monthsAcc); // /JAN/FEB/MAR/APR..

console.log(primeiroSemestre); 