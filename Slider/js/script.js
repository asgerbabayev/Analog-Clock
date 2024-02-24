const sliders =  document.querySelectorAll('.slider');

const totalSlider = sliders.length;

const next = document.getElementById("next");
const prev = document.getElementById("prev");
function updateSlider(index) {
    sliders.forEach(x=>{
        x.classList.remove('active');
    });
    sliders[index].classList.add('active');
}
next.addEventListener("click", function(){
    let currentIndex = document.querySelector('.slider.active').getAttribute("data-id") -1;
    currentIndex = (parseInt(currentIndex) + 1) % sliders.length;
    updateSlider(currentIndex);
});

prev.addEventListener("click", function(){
    let currentIndex = document.querySelector('.slider.active').getAttribute("data-id") - 1;
    currentIndex = (currentIndex - 1 + sliders.length) % sliders.length;
    updateSlider(currentIndex);
});
