var http = require('http');

http.createServer(function (req, res) {
        
    let valorMaximo = 1000; 
    let qtdNumeros = 500;
    const vetor =[];

    // Gera números aleatórios sem repetição
    for (let i = 0; i < qtdNumeros; i++) {

        nr = Math.floor(Math.random() * valorMaximo);
        while ( vetor.indexOf(nr) > 0) {
            nr = Math.floor(Math.random() * valorMaximo);
        }
        vetor.push(nr);

    }  
       
    // ordena o vetor
    let i=0;
    const tamanhoVetor = vetor.length;

    while( i < tamanhoVetor ) {

        if (vetor[i] > vetor[i+1]) {
            let aux = vetor[i];
            vetor[i] = vetor[i+1];
            vetor[i+1] = aux;
            i=0;
        } else 
            i++;
    }
 
    // mostra na tela o vetor ordenado
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<meta charset="utf-8" />');
    res.write('<body>')

    res.write('<h2>Quantidade de elementos na ordenação: '+tamanhoVetor+'. Range dos números: 0 a '+valorMaximo+'</h2>')
    res.write('<hr /><h3>');

    for(let i = 0; i < tamanhoVetor; i++) {
        res.write(vetor[i]+(i==tamanhoVetor-1 ? '' : ', '));
    }
    
    res.write('</h3>');
    res.write('</body>')
    res.end('</html>')

  }).listen(2); 