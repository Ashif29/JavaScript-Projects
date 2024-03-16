const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')


var currentActive = 1;

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length){
        currentActive = circles.length
    }
    update();
})

prev.addEventListener('click', () => {
    currentActive--;

    if(currentActive < 1){
        currentActive = 1;
    }
    update();
})


function update(){
    circles.forEach((circle, index) => {
        if(index < currentActive){
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
    })
    var activeLength = ((100.0) / (circles.length - 1)) * (currentActive - 1);
    console.log(activeLength);

    progress.style.width = activeLength + '%';

    if(currentActive === circles.length){
        next.disabled = true;
    }
    else if(currentActive === 1){
        prev.disabled = true;
    }
    else{
        next.disabled = false;
        prev.disabled = false;
    }
}

