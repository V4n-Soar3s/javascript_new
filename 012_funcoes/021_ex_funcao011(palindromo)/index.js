function isPalindrome(palavra) {
    // Remover espaços e colocar tudo em minúsculas para tornar a verificação mais robusta
    const palavraNormalizada = palavra.replace(/\s+/g, '').toLowerCase();
  
    // Inverter a palavra e comparar com a original
    const palavraInvertida = palavraNormalizada.split('').reverse().join('');
  
    // Retornar true se for palíndromo, caso contrário, false
    return palavraNormalizada === palavraInvertida;
  }
  
  // Testando a função com alguns exemplos
  console.log(isPalindrome('arara'));  // true
  console.log(isPalindrome('radar'));  // true
  console.log(isPalindrome('hello'));  // false
  console.log(isPalindrome('A man a plan a canal Panama'));  // true (ignorando espaços e maiúsculas/minúsculas)

  // Segue como fazer palavras invertidas
  function reverseString(str) {
    // Usa o método split() para separar a string em um array de caracteres,
    // o método reverse() para inverter o array e join() para juntar os caracteres novamente em uma string.
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("hello")); // Saída: "olleh"
  console.log(reverseString("JavaScript")); // Saída: "tpircSavaJ"
  console.log(reverseString("12345")); // Saída: "54321"

  //COMO FAZER A FUNÇÃO CONTAR APENAS AS VOGAIS
   
  function countVowels(str) {
    // Definimos um conjunto de vogais (tanto minúsculas quanto maiúsculas)
    const vowels = 'aeiouAEIOU';
    
    // Usa o método filter() para filtrar as vogais e o comprimento do resultado para contar
    return str.split('').filter(char => vowels.includes(char)).length;
  }
  
  console.log(countVowels("hello"));        // Saída: 2 (e, o)
  console.log(countVowels("JavaScript"));  // Saída: 3 (a, a, i)
  console.log(countVowels("ABCDE"));       // Saída: 2 (A, E)
  console.log(countVowels("bcdfg"));       // Saída: 0 (nenhuma vogal)
  