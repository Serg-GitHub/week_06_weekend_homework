document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);
  
    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
  })
  
  const handleNewItemFormSubmit = function (event) {
    event.preventDefault();
  
    const gameListItem = createGameListItem(event.target);
    const gameList = document.querySelector('#game-list');
    gameList.appendChild(gameListItem);
  
    event.target.reset();
  }
  
  const createGameListItem = function (form) {
    const gameListItem = document.createElement('li');
    gameListItem.classList.add('game-list-item');
  
    const game = document.createElement('h2');
    game.textContent = form.game.value;
    gameListItem.appendChild(game);
  
    const publisher = document.createElement('h3');
    publisher.textContent = form.publisher.value;
    gameListItem.appendChild(publisher);
  
    const genre = document.createElement('p');
    genre.textContent = form.genre.value;
    gameListItem.appendChild(genre);
  
    return gameListItem;
  }
  
  const handleDeleteAllClick = function () {
    const gameList = document.querySelector('#game-list');
    gameList.innerHTML = '';
  }