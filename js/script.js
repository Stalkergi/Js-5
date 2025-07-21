    let btn1 = document.querySelector('#btn1')
    let btn2 = document.querySelector('#btn2')
    let btn3 = document.querySelector('#btn3')
    let body = document.querySelector('.body')
    let box = document.querySelector('.box')


    btn1.addEventListener('click', function () {
        box.classList.add('img1');  
        box.classList.remove('img2');  
        box.classList.remove('img3');  
    
    })

    btn2.addEventListener('click', function () {
        box.classList.add('img2');
        box.classList.remove('img1');  
        box.classList.remove('img3');   
    })

    btn3.addEventListener('click', function () {
        box.classList.add('img3');
        box.classList.remove('img1');  
        box.classList.remove('img2');   
    })