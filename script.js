const btnA = document.querySelectorAll('div.a');
const btnB = document.querySelectorAll('div.b');
const audio = document.querySelectorAll('audio');

var keyA1 = new Audio('./mus1.wav');
var keyA2 = new Audio('./mus2.wav');
var keyA3 = new Audio('./mus3.wav');
var keyA4 = new Audio('./mus4.wav');
var keyA5 = new Audio('./mus5.wav');
var keyA6 = new Audio('./mus6.wav');

var keyB1 = new Audio('./mus7.wav');
var keyB2 = new Audio('./mus8.wav');
var keyB3 = new Audio('./mus9.wav');
var keyB4 = new Audio('./mus10.wav');
var keyB5 = new Audio('./mus11.wav');
var keyB6 = new Audio('./mus12.wav');

btnA.forEach((keyA,index)=>{
keyA.addEventListener('click',()=>{
    audio.volume = 0.1;

if(index==0){
const clear = setTimeout(()=>{
console.log("A");
audio.volume = 0.1;
keyA1.play();
},0)

setTimeout(()=>{
clearTimeout(clear);  
keyA1.pause();
},500)
}

else if(index==1){

const clear = setTimeout(()=>{
console.log("A");
audio.volume = 0.1;
keyA2.play();
},0)

setTimeout(()=>{
clearTimeout(clear);  
keyA2.play();
},500);

}


else if(index==2){

const clear = setTimeout(()=>{
console.log("A");
audio.volume = 0.1;
keyA3.play();
},0)

setTimeout(()=>{
clearTimeout(clear);  
keyA3.play();
},500)

}


else if(index==3){
const clear = setTimeout(()=>{
console.log("A");
audio.volume = 0.1;
keyA4.play();
},0)

setTimeout(()=>{
clearTimeout(clear);  
keyA4.play();
},500)

}


else if(index==4){

const clear = setTimeout(()=>{
console.log("A");
audio.volume = 0.1;
keyA5.play();
},0)

setTimeout(()=>{
clearTimeout(clear);  
keyA5.play();
},500)

}

else if(index==5){
const clear = setTimeout(()=>{
console.log("A");
audio.volume = 0.1;
keyA6.play();
},0)

setTimeout(()=>{
clearTimeout(clear);  
keyA6.play();
},10)

event.stopPropagation();
}   
});
});



btnB.forEach((keyB,i)=>{
keyB.addEventListener('click',()=>{
if(i==0){
const clear = setTimeout(()=>{
console.log("B");
audio.volume = 0.1;
keyB1.play();
},0)

setTimeout(()=>{
clearTimeout(clear);  
keyB1.pause();
},500)


event.stopPropagation();
}

else if(i==1){

const clear = setTimeout(()=>{
console.log("B");
audio.volume = 0.1;
keyB2.play();
},0)

setTimeout(()=>{
clearTimeout(clear);  
keyB2.play("B");
},500);

event.stopPropagation();
}


else if(i==2){

const clear = setTimeout(()=>{
console.log("B");
audio.volume = 0.1;
keyB3.play();
},0)

setTimeout(()=>{
clearTimeout(clear);  
keyB3.play();
},500)

event.stopPropagation();
}


else if(i==3){
const clear = setTimeout(()=>{
console.log("B");
audio.volume = 0.1;
keyB4.play();
},0)

setTimeout(()=>{
clearTimeout(clear);  
keyB4.play();
},500)

event.stopPropagation();
}


else if(i==4){

const clear = setTimeout(()=>{
console.log("B");
audio.volume = 0.1;
keyB5.play();
},0)
                         
setTimeout(()=>{         
clearTimeout(clear);  
keyB5.play();
},500)

event.stopPropagation();
}

else if(i==5){
const clear = setTimeout(()=>{
console.log("B");
audio.volume = 0.1;
keyB6.play();
},0)

setTimeout(()=>{
clearTimeout(clear);  
keyB6.play();
},500)

event.stopPropagation();

}
})
});


