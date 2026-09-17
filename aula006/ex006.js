let num = [1, 2, 3, 4, 5, 6];

num.push(7); // o variavel.push() adiciona um elemento no array
num.length; // o variavel.length serve para contar os elementos do array
num.sort; // o variavel.sort serve para colocar os elementos em ordem crescente

//O comando sempre vai seguindo a ordem, então vai adicionar o elemento 7, 
//depois contar a quantidade de elementos no array e depois colocar em ordem crescente

for(let i=0; i<num.length; i++){ //Estrutura de repetição for
    console.log(num[i]);
}
let i = 0; //Aqui eu tive que criar a variavel fora do comando pq o while
// coloca somente a condição
while(i<num.length){ //Estrutura de repetição while
    console.log(num[i]);
    i++;
}

i=0; //aqui tive que igualar i = 0, pq ele esta com valor 7 devido as somas 
     //do laço while acima

do{ //estrutura de repetição do while, que executa primeiro o bloco e depois testa 
    //a condição do laço
    console.log(num[i]);
    i++;
}while(i<num.length);


for(let pos in num){ // estrutura for(variavel1 in variavel2), usada para
                     // arrays e objetos que em cada um
    console.log(`A posição ${pos} esta com o numero ${num[pos]}`);
}

num.indexOf(3) // variavel.indexOf(ElementoQueQuerAchar) procura o index(posição) que
               // esta contido o elemento do comando
console.log(num.indexOf(3)) // Procura o 3 e retorna o 2 que é a posição no array
//se o console.log voltar o valor -1 é pq o elemento nao esta no array