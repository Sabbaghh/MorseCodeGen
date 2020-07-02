
var textToMorse = document.querySelector(".textToMorse"),
morseToText = document.querySelector(".morseToText");
switchButton = document.querySelector(".btn"),
mainForm = document.querySelector(".main-form");

// textToMorse convertor function
textToMorse.onkeyup= function() {
  var mystring = textToMorse.value;
  var alphapetToMorse = { a : ".-",b : "-..." , c:"-.-." , d:"-.." , e: "." , f:"..-." , g:"--.", h:"...." , i:".."
  , j:".---" , k:"-.-" , l:".-..", m:"--", n:"-.",o:"---",p:".--.",q:"--.-",r:".-.", s:"..."
  , t:"-" ,u:"..-", v:"...-",w:".--",x:"-..-",y:"-.--",z:"--..","  ":" / " , "0":"-----", "1":".----","2":"..---","3":"...--"
  , "4":"....-" , "5":"....." , "6":"-....","7":"--...","8":"---.." , "9":"----." , "\"":".-..-."};

// the split and join helps me putting spaces between each charchter instade of putting spacing inside variables in the object
  mystring=mystring.split("").join(" ");

//the for loop is looping inside th object not the array to reduce the runtime
// it looks inside the string replace all all Similar charchter at once by using expressions
  for(var letter in alphapetToMorse){
  var re = new RegExp(letter, "ig");
  mystring=mystring.replace(re,alphapetToMorse[letter]);
  }
  morseToText.textContent = mystring;
}
// end of the covertor to morse function

// morseToText convertor function
morseToText.onkeyup= function() {
  var mystring = morseToText.value;
  var alphapetToMorse = { ".-": "a","-..." : "b" , "-.-.":"c" , "-..":"d" , ".": "e" , "..-.":"f" , "--.":"g", "....":"h" , "..":"i"
  , ".---":"j" , "-.-":"k" , ".-..":"l", "--":"m", "-.":"n","---":"o",".--.":"p","--.-":"q",".-.":"r", "...":"s"
  , "-":"t" ,"..-":"u", "...-":"v",".--":"w","-..-":"x","-.--":"y","--..":"z","/":"  " , " ":""
  , "-----":"0", ".----":"1","..---":"2","...--":"3", "....-":"4" , ".....":"5" , "-....":"6","--...":"7","---..":"8" , "----.":"9"
  , ".-..-.":"\""};

//split the string to make it to an array to make it easier to locate the morse code
mystring=mystring.split(" ");

// for loop going in each element inside the array and replace its elements to normal charachter instade of morse
for(var letter in mystring){
//if statement helps to know if you can replace the code or not, and if not it doesn't replace anything.
if(alphapetToMorse.hasOwnProperty(mystring[letter]))
{
    mystring[letter]=alphapetToMorse[mystring[letter]] ;
}else{
  mystring[letter]= mystring[letter];
  }
}
// join the array and make it to string again to output is withput commas
mystring = mystring.join("");

textToMorse.textContent = mystring;

}
// end of the covertor to text function

//the button change the toggle value to true or false and call switching function
var toggle = false;
switchButton.onclick = function(){
if (toggle=== false){
toggle=true;
}else{
toggle=false;}
switching(toggle);
}

//switch function which switches between the two text area (textToMorse / morseToText)
function switching(t) {
      morseToText.textContent="";
      mainForm.reset();
      morseToText.toggleAttribute("disabled");
      textToMorse.toggleAttribute("disabled");
      if(t===false){
        mainForm.reset();
        textToMorse.focus();
        textToMorse.placeholder ="ENTER YOUR TEXT...";
        morseToText.placeholder ="";
      } else{
        morseToText.focus();
        morseToText.placeholder ="ENTER YOUR MORSE CODE...";
        textToMorse.placeholder ="";
      }

}
