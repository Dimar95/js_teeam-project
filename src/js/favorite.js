function onPhotoClick(e) {
    arrayofFavorites = load(LOCALSTORAGE_KEY) || [];
    if (e.target.nodeName !== 'BUTTON') {
      return;
    }
    const favoriteID = e.target.dataset.id;
    // if (!e.target.classList.contains('likeBTN')) {
    //   return;
    // }
    e.target.classList.toggle('checked');
    // console.log(e.target.classList.contains('likeBTN'));
    // console.log(e.target.dataset.fav === 'not_added');
    if (e.target.closest('div').dataset.fav === 'not_added') {
      // if (arrayofFavorites.includes(favoriteID)) {
      //   return;
      // }
      console.log(e.target.closest('div').dataset.fav);
      // console.log(e.target.dataset.id);
      // console.log(e.target.parentElement.closest('p'));
      // console.log(e.currentTarget);
      // console.log(load('fav').length);
      arrayofFavorites.push(favoriteID);
      e.target.closest('div').dataset.fav = 'added';
      console.log(e.target.closest('div').dataset.fav);
      // console.log(arrayofFavorites);
      // favouritesMarkup(arrayofFavorites);
      favouritesMarkup(arrayofFavorites);
      console.log(arrayofFavorites);
    }
    if (e.target.dataset.add === 'remove') {
      console.log(favoriteID);
      const a = [...arrayofFavorites].filter(value => value !== favoriteID);
      console.log(a);
      arrayofFavorites = a;
      // console.log(a);
      console.log(arrayofFavorites);
      e.target.closest('div').dataset.fav = 'not_added';
      favouritesMarkup(a);
    } else {
      return;
    }
    // getPicturesForFavorites();
    console.log(arrayofFavorites);
  }
  // console.log(arrayofFavorites);
  // favouritesMarkup(arrayofFavorites);
  function favouritesMarkup(id) {
    save(LOCALSTORAGE_KEY, id);
  }