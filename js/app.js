document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
  })

  const handleNewItemFormSubmit = function (event) {
    event.preventDefault();
  
    const genreListItem = createReadingListItem(event.target);
    const genreList = document.querySelector('#genre-list');
    genreList.appendChild(genreListItem);
  
    event.target.reset();
  }  

  const createGenreListItem = function (form) {
    const genreListItem = document.createElement('li');
    genreListItem.classList.add('genre-list-item');

    const gameTitle = document.createElement('h2');
  gameTitle.textContent = form.gameTitle.value;
  genreListItem.appendChild(title);

  const publisher = document.createElement('h3');
  publisher.textContent = form.publisher.value;
  genreListItem.appendChild(publisher);