import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import {fetchCategories} from '../js/fetchSemantic'
const inputRef = document.getElementById('datetime-picker')
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
    nextArrow: ">",
      // onClose
  };
  let openList = false;
  let counterSection = 0;

  const flatpickrTimer = new flatpickr(inputRef, options);

function onFilterCategories(arrayNews) {
  const arraySection = []
  const arrayCategories = arrayNews.map(categorie => {
    if (arraySection.includes(categorie.section)) {
      console.log(arraySection);
      return
    } else {
      arraySection.push(categorie.section)
      if (screenWidth < 768) {
      onMarkupCategories(categorie.section)
        
      } else {
        onMarkupOtherCategories(categorie.section)
        
      }
    }
  })
}
function onMarkupOtherCategories(section) {
  counterSection += 1
  if (counterSection < 5) {
    ulCategoriesRef.insertAdjacentHTML('beforeend',`<a><li class="categories-item">${section}</li></a>`)
    return
  } else {
    ulCategoriesOtherRef.insertAdjacentHTML('beforeend',`<a><li class="categories-item-other">${section}</li></a>`)
  }
}
function onMarkupCategories(section) {
  ulCategoriesRef.insertAdjacentHTML('beforeend',`<a><li class="categories-item">${section}</li></a>`)
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



// if (openList) {
//   openList = false;
//   ulCategoriesRef.innerHTML = ''
//   return
// } else {
//   openList = true;
// }