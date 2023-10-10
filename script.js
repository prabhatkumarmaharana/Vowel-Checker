function checkVowels() {
    var text = document.getElementById("inputText").value;
    var vowelcount = 0;
    
    // convert it into lowercase
    text = text.toLowerCase();

    for(var i = 0; i < text.length; i++) {
       var char = text.charAt(i);// 0
       if(isVowel(char)) {
          vowelcount++;
       }
    }
    var result = document.getElementById("result");
    result.textContent= "Total Vowels:" + vowelcount;
}
function isVowel(char) {
    var vowel= ["a","e","i","o","u"];
    return vowel.includes(char);
}