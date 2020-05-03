// Trying to color divs      [[[[[[DID NOT WORK]]]]]]

document.getElementsByClassName("div1").onmouseenter = function() {mouseEnter()};
    document.getElementsByClassName("div1").onmouseleave = function() {mouseLeave()};

    function mouseEnter(){
        document.getElementsByClassName("div1").style.backgroundColor= "red";
        console.log('enter')
    }

    function mouseLeave(){
        document.getElementsByClassName("div1").style.backgroundColor= "red";
        console.log('leave')
    }

    //another idea maybe     [[[[[[[ WORKED]]]]]]]

    document.querySelector(".div1").addEventListener('mouseenter', mouseEnter);
    document.querySelector(".div1").addEventListener('mouseleave', mouseLeave);

    function mouseEnter(ev){
        ev.currentTarget.style.backgroundColor = "red";
        console.log('enter')
        // document.getElementsByClassName("div1").style.color= "red";
    }

    function mouseLeave(ev){
        ev.currentTarget.style.backgroundColor = "red";
        console.log('leave')
        // document.getElementsByClassName("div1").style.color= "red";
    }


    //loop through all selected
    var divs = document.querySelectorAll('.div1'), i;
     for (i =0; i < divs.length; ++i){
         divs[i].style.backgroundColor = 'red';
     }