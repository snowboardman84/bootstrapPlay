//write a JavaScript function to capitalize the first letter of each word in a string
//use mocha and tdd

//var capitalizeFn = function (string) {
 /*  
    function capital_letter(str) 
    {
       wordArray = str.split(" ");
       for (var i = 0, x = wordArray.length; i < x; i++) {
          // console.log(str[i]);
           wordArray[i] = wordArray[i][0].toUpperCase() + wordArray[i].substr(1);
       }
    
   capital_letter("hello pig.");
       return wordArray.join(" ");
    } */


    function capital_letter(string) {    
        var newString = "";
        var nextLetterCap = false;
        debugger;
        for (var i = 0; i < string.length; i++ ) {
            if  (i === 0){
                newString += string[i].toUpperCase();
            } else if (nextLetterCap){
                newString += string[i].toUpperCase();
                nextLetterCap = false;
            } else if (string[i] === " "){
                newString += string[i];
                nextLetterCap = true;
            } else{
                newString += string[i];
            }
        }
        return newString; 
    };
    
    
    capital_letter("who are the first ones?");
    
    
    /*
    function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
    }
    console.log(capitalizeFirstLetter("a"))
    */