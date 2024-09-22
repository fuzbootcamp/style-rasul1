let links = document.querySelector('.center')

function toggle() {
    links.classList.toggle('active')
}

let img = document.querySelector('.h-main img')

function f1(){
    img.style.filter = "blur(3px)"
}

function f2(){
    img.style.filter = "contrast(50%)"
}

function f3(){
    img.style.filter = "grayscale(20)"
}

function f4(){
    img.style.filter = "opacity(0.5)"
}

function f5(){
    img.style.filter = "sepia(10)"
}

function b1(){
    img.style.border = '10px solid dodgerblue';
} 

function b2(){
    img.style.border = '10px double black';
} 

function b3(){
    img.style.border = '10px dashed yellow';
} 

function b4(){
    img.style.border = '10px dotted pink';
} 