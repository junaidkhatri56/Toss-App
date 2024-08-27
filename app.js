var image = document.querySelector('#image');
var result = document.querySelector('#result');
var choose = document.querySelector('#choose');

function toss(choice){
     var tossResult = Math.ceil(Math.random()*2) ;
     if(tossResult === 1 && choice === 'head'){
        choose.innerHTML = 'YOU CHOOSE HEADS';
        result.innerHTML = 'CONGRATS! YOU WON THE TOSS';
        image.src = './images/head.png';
     }else if(tossResult === 2 && choice === 'tail'){
        choose.innerHTML = 'YOU CHOOSE TAILS';
        result.innerHTML = 'CONGRATS! YOU WON THE TOSS';
        image.src = './images/tail.png';
     }else if(tossResult === 1 && choice === 'tail'){
        choose.innerHTML = 'YOU CHOOSE TAILS';
        result.innerHTML = 'OPPS! YOU LOSS THE TOSS';
        image.src = './images/head.png';
     }else if(tossResult === 2 && choice === 'head'){
        choose.innerHTML = 'YOU CHOOSE HEADS';
        result.innerHTML = 'OPPS! YOU LOSS THE TOSS';
        image.src = './images/tail.png';
    }
}