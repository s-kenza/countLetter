function countVowelsAndConsonants() {
    const input = document.getElementById('inputText').value;
    const cleanedInput = input.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").trim();
    const voyelles = cleanedInput.match(/[aeiou]/gi);
    const consonnes = cleanedInput.match(/[bcdfghjklmnpqrstvwxyz]/gi);

    const nbVoyelles = voyelles ? voyelles.length : 0;
    const nbConsonnes = consonnes ? consonnes.length : 0;

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `La phrase "${input}" contient ${nbVoyelles} voyelle(s) et ${nbConsonnes} consonne(s).`;
  }