const question = document.querySelector(".question")
const gif = document.querySelector(".gif")
const yesbtn =document.querySelector(".yes-btn")
const nobtn =document.querySelector(".No-btn")

yesbtn.addEventListener("click", ()=> {
    question.innerHTML = "Yayy thank you so much";
    gif.src="https://i.pinimg.com/originals/4a/f8/f9/4af8f99cb8bcd3f167a20ed91069760d.gif"
})

nobtn.addEventListener("mouseover", ()=> {
    const nobtnRect = nobtn.getBoundingClientRect();
    const maxX = window.innerWidth - nobtnRect.width;
    const maxY = window.innerHeight - nobtnRect.height;

    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.random() * maxY)

    nobtn.Style.left = randomX + "px";
    nobtn.Style.top = randomY + "px";
})