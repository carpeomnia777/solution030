//write a function that takes a string and reverses it then output the string in tact including spaces.

//array.reverse map should reverse the array and produce a new reversed array
//if the spaces don't show, perhaps a for loop that looks for " " and inserts it.

function reverseWords(str) {  
    let reversed = str.split('').reverse().join('').split(' ').reverse().join(' ')
   
    
    
    return reversed;
  }
//lesson learned if you use .split or .join if you put a space inbetween the ticks, ex (' ') it will split or join where the spaces are located. without the space it will split or join on a character by character basis

