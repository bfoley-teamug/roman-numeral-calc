var first = document.getElementById('first');
var inputOne = first.querySelector('.one');

var second = document.getElementById('second');
var inputTwo = second.querySelector('.two');
  
var sum = document.querySelector('button.three'); 
var difference = document.querySelector('button.four');

////////////////////////////////////////////////
//add

sum.addEventListener ('click', () => {
            
        function convertToRoman(num) {  
        var number = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
        var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
      
        var convert = '';
      
        for (var i = 0; i < number.length; i++) {
          while (number[i] <= num) {
            convert += romanNumeral[i];
            num -= number[i];
          }
        }
        return convert;
      }                 
                
     var first = parseInt(inputOne.value);
     var second = parseInt(inputTwo.value);           
                 
      if(!inputOne.value || !inputTwo.value) {
        alert("Give me two numbers, silly!");
       } else {
         console.log(first + second);    
       };

  var answer = document.getElementById('answer');
  answer.textContent = convertToRoman(parseInt(inputOne.value)) + ' + ' + convertToRoman(parseInt(inputTwo.value)) + ' = ' + (convertToRoman(parseInt(inputOne.value) + parseInt(inputTwo.value)));     
}); 
 

///////////////////////////////////////////////
//subtract
difference.addEventListener ('click', () => {
                             
           function convertToRoman(num) {  
            var number = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
            var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
          
            var convert = '';
          
            for (var i = 0; i < number.length; i++) {
              while (number[i] <= num) {
                convert += romanNumeral[i];
                num -= number[i];
              }
            }
            return convert;
          }    
                             
     var first = parseInt(inputOne.value);
     var second = parseInt(inputTwo.value);           
                 
      if(!inputOne.value || !inputTwo.value) {
         alert("Give me two numbers, silly!"); 
       } else {
         console.log(first - second);      
       };

  var answer = document.getElementById('answer');
    //for a negative answer
    if (second > first) {
    answer.textContent = convertToRoman(parseInt(inputOne.value)) + ' - ' + convertToRoman(parseInt(inputTwo.value)) + ' = - ' + (convertToRoman(parseInt(inputTwo.value) - parseInt(inputOne.value)));
    } else {
    answer.textContent = convertToRoman(parseInt(inputOne.value)) + ' - ' + convertToRoman(parseInt(inputTwo.value)) + ' = ' + (convertToRoman(parseInt(inputOne.value) - parseInt(inputTwo.value)));
    }
 

});
