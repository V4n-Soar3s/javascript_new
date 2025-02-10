//choice pattern 

const reg = /\w+: (Vanessa|Matheus|Maria)/;//Nome: Vanessa

console.log(reg.test("Nome: Vanessa"));//true
console.log(reg.test("Nome: José"));//false 
