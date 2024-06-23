let b = document.querySelectorAll(".button")
let res = document.querySelector("#reset")
let o = true;
let btn = document.querySelector("#nbt")
let btn2 = document.querySelector("#nmsg")
let btn3 = document.querySelector(".msg-container")
let arr = [  [0,1,2],
             [3,4,5],
             [6,7,8],
             [0,3,6],
             [1,4,7],
             [2,5,8],
             [0,4,8],
             [2,4,6],           
 ];  
//  creation of the 2d array for storing the winning patterns .
 
let resetgame =()=>{
    o =true;
    boxenbl();
    btn3.classList.add("hide")

 }
 b.forEach( function value(button){
    button.addEventListener("click",function val(){
        if(o){
        button.innerHTML="<h1>O</h1";
        o= false;
        }
        else {
            button.innerHTML="<h1>X</h1>";
            o=true;
        }
        button.disabled = true;
        checkvalue();
    });
 });
 let boxdisbl =()=>{
    for(let l of b){
        l.disabled = true;
    }
  }
 
    let boxenbl =()=>{
     for(let m of b){
        m.disabled=false;
        m.innerHTML= " ";
     }
  }
 
   let showwinner = (winner)=>{
     btn2.innerHTML =` Congratulations, ${winner} is the winner`
     btn3.classList.remove("hide");
     boxdisbl();
   }
 let checkvalue = ()=>{
     for( let p of arr){
        let x1 = b[p[0]].innerHTML
        let x2= b[p[1]].innerHTML
        let x3 = b[p[2]].innerHTML
     
     if(x1!="" && x2!="" && x3!="" )
        {
            if(x1===x2&&x2===x3&&x1===x3){
                showwinner(x1);
                

            }
        }
    }
 }
btn.addEventListener("click",resetgame)
 res.addEventListener("click",resetgame)
 
