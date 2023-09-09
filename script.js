'use strict'

/*
// way to make change i text by calling its class
document.querySelector('.word').textContent='Correct number';

document.querySelector('.score').textContent=10;
document.querySelector('.highscore').textContent=15;


// way to make changes in input text 
document.querySelector('.putNumber').value=5;
// 5 in console also
console.log(document.querySelector('.putNumber').value=5);
*/

/*
// on entering number and clicking check ..entered number value will be noticed

document.querySelector('.check').addEventListener('click',function(){
    document.querySelector('putNum').value
})
*/


// to generate number randomly => *20 to get number between 1 to 20 => trunc is used to take integer value and here last value will be 19 in integer( 19.999) so +1 so that 20 is also included
document.querySelector('.guess').textContent='?';
let num=Math.trunc(Math.random()*20)+1;

// below statement needed when ? want to un hide and see the random number
//document.querySelector('.guess').textContent=num;
let score=20;
let highscore=0;

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.putNum').value);
console.log(guess,typeof guess);
document.querySelector('.word').textContent='Start Guessing🫣🫣';
document.querySelector('.word').style.color='purple';

// if no number is entered

if(!guess){
    document.querySelector('.word').textContent='Oops!!😮‍💨 No number entered';
    
}
if(score>0){
 if(guess>num){
    document.querySelector('.word').textContent='Oops its Too Big🤔!!';
    score--;
    document.querySelector('.score').textContent=score;
}
else if(guess<num){
    document.querySelector('.word').textContent='Oops its Too Small🤔!!';
    score--;
    document.querySelector('.score').textContent=score;
    
}
}
else{
   document.querySelector('.word').textContent='YOU LOST👎';
   document.querySelector('.word').style.color='black';
   alert('LOST THE GAME👎');
   document.querySelector('body').style.backgroundColor='maroon';
   let ans=prompt('🙌Waanna TRY AGAIN🙌');
   if(ans=='yes'){
    document.querySelector('.word').textContent='Click on play again';
    alert('click on play again');

    
   }
   
}
 if(guess==num){
    document.querySelector('.word').textContent='Great!!🥇 You are Correct👍';
    document.querySelector('.word').style.color='black';
    document.querySelector('body').style.backgroundColor='purple';
    

    if(score>highscore){
        highscore=score;
    }
    document.querySelector('.highscore').textContent=highscore;
}

});

// when play again is clicked
 document.querySelector('.again').addEventListener('click',function(){


    num=Math.trunc(Math.random()*20)+1;
//document.querySelector('.guess').textContent=num;
 score=20;
 document.querySelector('.word').textContent='Start Guessing🫣🫣..';
 document.querySelector('.word').style.color='purple';
 document.querySelector('body').style.backgroundColor='black';
 document.querySelector('.score').textContent=score;
 document.querySelector('.putNum').value='';
 document.querySelector('.guess').textContent='?';
 //document.querySelector('.putNum').style.width='10rem';


 });



 
    