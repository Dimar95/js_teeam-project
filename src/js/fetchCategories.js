
const categoriesLink = document.querySelector('.categories-box');
onSerchByCategori()
function onSerchByCategori() {
    categoriesLink.addEventListener('click', (e) =>{
        if (e.target.className !== "categories-link") {
        return
        }
        console.log(e.target.textContent);
})
        

}

