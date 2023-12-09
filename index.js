console.log("hello")
let description = document.querySelector(".description")
let button = document.querySelector(".button")
let body = document.querySelector(".body")
let imageContainer = document.querySelector(".imageContainer")
let imageList = ["./kitty.jpeg", "./kitty2.jpeg", "./kitty3.jpeg", "./kitty4.jpeg", "./kitty5.jpeg", "./kitty6.jpeg", "./kitty7.jpeg", "./kitty8.jpeg", "./kitty9.jpeg", "./kitty10.jpeg",]
let descriptionlist = ["грустный кот", "веселый кот", "любознательный кот", "милый кот", "задумчивый кот", "унылый кот", "белый кот", "кричащий кот", "голодный кот", "уставший кот"]
console.log(imageContainer)
console.log(button)
function getRandomIndex (arr) {
    let randomIndex = Math.floor(Math.random() * arr.length)
    return(randomIndex)
}
button.addEventListener('click', function () {
    let randomIndex = getRandomIndex(imageList)
    let randomElement = imageList[randomIndex]
    let descriptionElement = descriptionlist[randomIndex]
    console.log(body.style.backgroundColor)
    // body.style.backgroundColor = "black";
    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = "white";
        console.log ("uslovie1");
    } else if (body.style.backgroundColor === '') {
        body.style.backgroundColor = "black";
        console.log ("uslovie2");
    } else{
        body.style.backgroundColor = "black";
        console.log ("uslovie3");
    }
    imageContainer.style.backgroundImage = `url(${randomElement})`
    description.innerText = descriptionElement
});
