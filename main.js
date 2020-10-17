let fullNames = {

      A : 'Alfa',
      B : 'Bravo',
      C : 'Charlie',
      D : 'Delta',
      E : 'Echo',
      F : 'Foxtrot',
      H : 'Hotel',
      G : 'Golf',
      I : 'India',
      J : 'Juliett',
      K : 'Kilo',
      L : 'Lima',
      M : 'Mike',
      N : 'November',
      O : 'Oscar', 
      P : 'Papa',
      Q : 'Quebec',
      R : 'Romeo',
      S : 'Sierra',
      T : 'Tango',
      U : 'Uniform',
      V : 'Victor',
      W : 'Whiskey',
      X : 'X-ray',
      Y : 'Yankee',
      Z : 'Zulu',
      1 : 'One',
      2 : 'Two',
      3 : 'Three',
      4 : 'Four',
      5 : 'Five',
      6 : 'Six',
      7 : 'Seven',
      8 : 'Eight',
      9 : 'Nine',
      0 : 'Zero',
      
};


let code = prompt("Enter your code!");

if (code ==""|| code.length > 6 || code.length < 6) {
     alert("Error");
}
     


var splitedcode = code.split("");

var letter  = splitedcode[0].toUpperCase();
var letter1 = splitedcode[1].toUpperCase();
var letter2 = splitedcode[2].toUpperCase();
var letter3 = splitedcode[3].toUpperCase();
var letter4 = splitedcode[4].toUpperCase();
var letter5 = splitedcode[5].toUpperCase();


var result = `${fullNames[letter]} ${fullNames[letter1]} ${fullNames[letter2]} ${fullNames[letter3]} ${fullNames[letter4]} ${fullNames[letter5]}`;

console.log(result);