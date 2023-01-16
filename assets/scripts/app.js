const mainAddBtn = document.querySelector('header button');

const movieList = document.getElementById('movie-list');
const backdrop = document.getElementById('backdrop');
const addModal = document.getElementById('add-modal');
const deleteModal = document.getElementById('delete-modal');

const cancelAddMovieButton = addModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addModal.querySelectorAll('input');
const ulElement = document.getElementById('movie-list');


const movies = [];



const toggleMovieModal = () => {
    addModal.classList.toggle('visible');
    toogleBackdrop();
}

const toogleBackdrop = () => {
    backdrop.classList.toggle('visible');
}

const backdropClickHandler = () => {
    backdrop.classList.remove('visible');
    addModal.classList.remove('visible');
    deleteModal.classList.remove('visible');
}

const cancelAddMovieHandler = () => {
    toggleMovieModal();
    clearInput();
}

const clearInput = () => {
    for (const input of userInputs) {
        input.value = '';
    }
}

const updateUI = () => {
    if (movies.length === 0) {
        document.getElementById('entry-text').style.display = 'block';
    } else {
        document.getElementById('entry-text').style.display = 'none';
    }
}

const renderNewMoviewElement = (movie) => {
    const liElement = document.createElement('li');
    liElement.innerHTML = `
        <div class="movie-element__image">
        <img src=${movie.image} alt="${movie.title}" >
        </div>
        <div class="movie-element__info">
            <h2>${movie.title}</h2>
            <p class="movie-element__info">${movie.rating}/5 stars</p>
        </div>
    `;
    liElement.classList.add('movie-element');
    
    liElement.addEventListener('click', removeMovieHandler.bind(null, liElement));
    ulElement.append(liElement);
    clearInput();
    toggleMovieModal();
}

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (!titleValue.trim() || !imageUrlValue.trim() || !ratingValue.trim() || +ratingValue < 1 || +ratingValue > 5) {
        alert('Please enter valid input. (rating 1-5 allowed)');
        return;
    }

    

    const newMovie = {
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    }

    movies.push(newMovie);
    updateUI();
    renderNewMoviewElement(newMovie);
}

const removeMovieHandler = liElement => {
    toogleBackdrop();

    deleteModal.classList.toggle('visible');    

    const gobackBtn = deleteModal.querySelector('.btn--passive');

    let confirmDeletionBtn = deleteModal.querySelector('.btn--danger');
    confirmDeletionBtn.replaceWith(confirmDeletionBtn.cloneNode(true));
    confirmDeletionBtn = deleteModal.querySelector('.btn--danger');

    gobackBtn.onclick = cancelDeletionHandler;
    confirmDeletionBtn.addEventListener('click',confirmDeletetionHandler.bind(null,liElement));
}

const cancelDeletionHandler = () => {
    toogleBackdrop();
    deleteModal.classList.toggle('visible');    
}

const confirmDeletetionHandler = (liElement) => {    

    for (let i = 0; i < ulElement.children.length; i++) {
        if(ulElement.children[i] === liElement){
            movies.splice(i,1);
            break;
        }   
      
    }

    console.log(movies);
    liElement.remove();
    updateUI();
    toogleBackdrop();
    deleteModal.classList.toggle('visible');    
}

mainAddBtn.addEventListener('click', toggleMovieModal);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
backdrop.addEventListener('click', backdropClickHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler)
