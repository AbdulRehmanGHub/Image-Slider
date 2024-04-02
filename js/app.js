const slides = document.querySelectorAll(".slide")
var counter = 0;
// console.log(slides)

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`        // image will appear from left, if we want to change the effect we can also write up, bottom or right.
    }
)

const goPrev = () => {
    counter--
    slideImage()
}

const goNext = () => {
    counter++
    slideImage()
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter*100}%)`      // Image effect will appear in X axis, we can change it to Y axis as well.
        }
    )
}