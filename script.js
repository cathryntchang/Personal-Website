/*splash*/
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.name');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx+1)*400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx))
            })
        }, 2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 2300)
    })
})
/* end slpash*/


document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 350){
        header.style.backgroundColor = "rgb(189, 151, 110, 0.7)";
    }else{
        header.style.backgroundColor = "transparent";
    }
})