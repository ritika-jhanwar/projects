let navStarts=document.querySelectorAll('.box');
        let close = document.querySelector('.close');
        let smallContainer=document.querySelector('.small-container');
        navStarts.forEach(element=>{
            element.addEventListener("click",function(){
            smallContainer.classList.add('active');
        });
        close.addEventListener("click", function() {
            smallContainer.classList.remove('active');
        });
    });