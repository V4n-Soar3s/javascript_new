//método slice

let nums = [0,1,2,3,4,5,6,7,8,9];//criei um array de números 

console.log(nums.slice(4,5));//quando utilizo slice nesse ponto estou determinando que seja apresentado o elemento que esta dentro do indice 4 e solicitando que pare de ser executado um indice antes do indice 5 o que fará retornar apenas o número 4

console.log(nums.slice(4,6));//neste caso serão apresentados os elementos que estão dentro do indice 4 e 5 o elemento do indice 6 não será apresentado pois nele eu determinei que o programa seria interrompido, retornaram apenas os valores 4 e 5

console.log(nums.slice(2));//quando chamo o slice desta forma determinando um indice inicial mas nao um indice final eu faço com que o programa apresente todos os elementos a partir do indice 2 neste caso retornará os elementos 2,3,4,5,6,7,8,9

console.log(nums.slice(-2));//solicitei que sejam apresentados apenas os dois ultimos elementos dentro do array retornara apenas 8 e 9


console.log(nums.slice(3, -2));//Solicitei que sejam apresentados os elementos iniciando a partir do indice 3 sem incluir os dois ultimos indices do array retornara 3,4,5,6,7