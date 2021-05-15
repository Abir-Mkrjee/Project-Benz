const logo=document.querySelectorAll('#logo-txt path');
console.log(logo);
var x,j=0;
for(var i=0; i<12; i++)
{
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
let elem = document.querySelectorAll("path");


setTimeout(myfunction,6300);
function myfunction(){
    trigger = 1;
    if(trigger==1){
        elem.forEach(function(tom){
            for(i=0; i<14; i++){
            tom.style.fill = 'white';
            tom.style.transition = 'fill 6s';
            }
        });
        }
}


function change(){ 
    
        let dynamic = document.querySelector("body");
        let button = document.querySelector("button");
        x = Math.floor((Math.random() * 10) + 1);
        
        var dyn=`"../images/background${x}.jpg"`;
        
        dynamic.style.backgroundImage = 'url('+dyn+')';
        dynamic.style.opacity = '5';
        button.style.width = '200px';

        console.log(dyn);
    }


document.getElementById("button").addEventListener("click", change);

function breathe(){
    let brea = document.querySelector(".box");
    if(j==0){
    brea.style.border = '6px solid rgb(211, 43, 43)';
    j=1;
    }
    else if(j==1){
        brea.style.border = '6px solid rgb(20, 240, 229)';
        j=2;
    }
    else if(j==2){
        brea.style.border = '6px solid rgb(36, 160, 23)';
        j=0;
    }

}

// function breatheLogo(){
//     let logo = document.querySelector(".logo img");
//     if(j==0{}){
//         brea.style.width = 

//     }

// }


setInterval(breathe,2000);
setInterval(breatheLogo,2000);
