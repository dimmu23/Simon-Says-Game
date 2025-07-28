 let gameseq = [];
 let userseq = [];


 let btns = ['yellow', 'red' , 'purple', 'green'];
 let started =false;
 let level =0;

 let h2= document.querySelector("h2");

 document.addEventListener("keypress", function()
 {
   if(started==false)
   {
    console.log("game started");
    started=true;
     levelUp();
   }
  
 })

  function gameFlash(btn)
  {
     btn.classList.remove("flash");
    btn.classList.add("flash");
    setTimeout(function(){
     btn.classList.remove("flash");
    },250);
}


 function userFlash(btn)
  {
     btn.classList.remove("userflash");
    btn.classList.add("userflash");

    setTimeout(function(){
     btn.classList.remove("userflash");
    },250);
}



 function levelUp()
 {
   userseq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randidx = Math.floor(Math.random()*4);
    let randColor = btns[randidx];
    let randBtn  = document.querySelector(`.${randColor}`);
    // console.log(randidx);
    // console.log(randColor);
    // console.log(randBtn);

    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);
 }

   
  function checkAns(idx)
  {
    if(userseq[idx] === gameseq[idx]){
      if(userseq.length == gameseq.length){
         setTimeout(levelUp,1000);
      }
    }
    else{
      h2.innerHTML = `Game Over! Your score was <b>${level}</b>  <br> Press any key to start`;
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "beige";
      },150);
      reset();
    }
  }

 function btnPress() {
    let btn =this;
    userFlash(btn);

    usercolor = btn.getAttribute("id");///important
    userseq.push(usercolor);
    checkAns(userseq.length-1);
 }


 let allBtns = document.querySelectorAll('.btn');
 for(btn of allBtns)
 {
  btn.addEventListener("click", btnPress);
 }

 function reset()
 {
  started =false;
  gameseq=[];
  userseq=[];
  level=0;
 }