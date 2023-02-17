
import {fetchCategories} from '../js/fetchSemantic'
const buttonCategoriesRef = document.querySelector('.categories-button')
const buttonCategoriesOtherRef = document.querySelector('.categories-button-other')
const ulCategoriesRef = document.querySelector('.categories-list')
const ulCategoriesOtherRef = document.querySelector('.categories-list-others')
const screenWidth = window.screen.width
const options = {
    // enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    dateFormat: "DD-MM-YYYY",
      // onClose
  };
  let counterSection = 0;


function onFilterCategories(arrayNews) {
  const arraySection = []
  const arrayCategories = arrayNews.map(categorie => {
    if (arraySection.includes(categorie.section)) {
      console.log(arraySection);
      return
    } else {
      arraySection.push(categorie.section)
      if (screenWidth < 768) {
      onMarkupCategories(onFormatingString(categorie.section))
        
      } else if (screenWidth >= 768 && screenWidth < 1280) {

        onMarkupOtherCategories(onFormatingString(categorie.section))

      } else {
        onMarkupSixCategories(onFormatingString(categorie.section))
      }
    }
  })
}
function onMarkupSixCategories(section) {
  counterSection += 1
  if (counterSection < 7) {
    ulCategoriesRef.insertAdjacentHTML('beforeend',`<li class="categories-item"><a class="categories-link">${section}</a></li>`)
    return
  } else {
    ulCategoriesOtherRef.insertAdjacentHTML('beforeend',`<li class="categories-item-other"><a class="categories-link">${section}</a></li>`)
  }

}
function onMarkupOtherCategories(section) {
  counterSection += 1
  if (counterSection < 5) {
    ulCategoriesRef.insertAdjacentHTML('beforeend',`<li class="categories-item"><a class="categories-link">${section}</a></li>`)
    return
  } else {
    ulCategoriesOtherRef.insertAdjacentHTML('beforeend',`<li class="categories-item-other"><a class="categories-link">${section}</a></li>`)
  }
}
function onMarkupCategories(section) {
  ulCategoriesRef.insertAdjacentHTML('beforeend',`<li class="categories-item"><a class="categories-link">${section}</a></li>`)
}

function categoriesIsOpen() {
  ulCategoriesRef.classList.toggle('is-open')
}
function searchCategories() {
  fetchCategories().then(onFilterCategories).catch(console.log('error'))
}
searchCategories()
buttonCategoriesRef.addEventListener('click', categoriesIsOpen)
buttonCategoriesOtherRef.addEventListener('click', () => {
  ulCategoriesOtherRef.classList.toggle('is-open')

})


function onFormatingString(string) {
  const formatingString = string[0].toUpperCase() + string.slice(1, string.length)
  return formatingString;
}





// function onFormatingString(string) {
//   if (string.length > 11) {
//     const lengthString = string.slice(0, 11) + "..."
//     return lengthString
//   } else{
//     const formatingString = string[0].toUpperCase() + string.slice(1, string.length)
//     return formatingString;
//   }
// }