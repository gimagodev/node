const numeros = [3,2,8,5,9,4,1,6,7]
let aux=0
let i=0

while( i<10) {
    if (numeros[i]>numeros[i+1]) {
        aux = numeros[i]
        numeros[i] = numeros[i+1]
        numeros[i+1] = aux
        i=0
    } else 
        i++
}

for(var j=0;j<10; j++)
    console.log(numeros[j])

