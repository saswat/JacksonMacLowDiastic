function diastic(seed, words){
  var phrase = "";
  var currentWord = 0;
  for (var i = 0; i < seed.length; i++) {
    var c = seed.charAt(i); // character at index i in string, e.g. i = 4 for rainbow is n

    for (var j = currentWord; j < words.length; j++)
      if (words[j].charAt(0) == c) {
        phrase += words[j];
        phrase += " ";
        // console.log(words[j]);
        break;
      }
  }
  return phrase;
}

var srctxt;
var words;

function preload(){
  srctxt = loadStrings("civilwar.txt");
}



function setup() {
  noCanvas()
  srctxt = join(srctxt, " ,.!?");
  words = splitTokens(srctxt, " ");

  var seed = select("#seed");
  var submit = select("#submit");
  //below is a submit on mousepress function with an anonymous function within.
  submit.mousePressed(function() {

    var phrase = diastic(seed.value(), words);
    // createP(seed.value());
    // createP(srctxt);
    createP(phrase)
  });

}

function draw() {

}
