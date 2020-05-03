const container = document.querySelector('#container');
    //create divs
    for(i=0; i < 1024; i++){
        var grid = document.createElement('div');
        grid.classList.add('div1');
        container.appendChild(grid);
    }
 
    //color divs
     var divs = document.querySelectorAll('.div1');
     divs.forEach(div => {
         div.addEventListener('mouseenter', function(ev){
            ev.currentTarget.style.backgroundColor = 'black';
         })
         
     });

//create reset button
const btn = document.createElement('button');
btn.innerHTML = "Reset";
btn.classList.add('btn')
document.body.appendChild(btn);


//reset divs
var restart = document.querySelector('button');
divs.forEach(div => { 
restart.addEventListener('click', function(){
    div.style.backgroundColor ='white';
})
}) 

//black color button
const btn1 = document.createElement('button');
btn1.innerHTML = "Black";
btn1.classList.add('btn1')
document.body.appendChild(btn1)

var black = document.querySelector('.btn1');

 btn1.addEventListener('click', function(){ 
    divs.forEach(div => {
    div.addEventListener('mouseenter', function(ev){
    ev.currentTarget.style.backgroundColor = 'black';
    })
})
})
//random color button
const btn2 = document.createElement('button');
btn2.innerHTML = "Random";
btn2.classList.add('btn2')
document.body.appendChild(btn2)

var random = document.querySelector('.btn2');

 btn2.addEventListener('click', function(){ 
    divs.forEach(div => {
    div.addEventListener('mouseenter', function(ev){
    ev.currentTarget.style.backgroundColor = rand();
    })
})
})

//random color
   function rand(){
        var r = (Math.round(Math.random()*256));
        var g = (Math.round(Math.random()*256));
        var b = (Math.round(Math.random()*256));
        return 'rgb('+ r + ','+ g + ',' + b +')';
   }
        for(i=0; i > 1000; i++){
            console.log(rand());
        }

    

    


// console.log(rand)