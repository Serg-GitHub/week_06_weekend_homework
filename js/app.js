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