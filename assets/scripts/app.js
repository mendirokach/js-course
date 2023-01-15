const addBtn = document.querySelector('header button');

const movieList = document.getElementById('movie-list');
const backdrop = document.getElementById('backdrop');
const modal = document.querySelector('.modal');


const mainAdd = () => {

    backdrop.classList.toggle('visible');
    modal.classList.toggle('visible');


    document.querySelector('.btn--passive').addEventListener('click', cancel);

    document.querySelector('.btn--success').addEventListener('click', add);
}

const cancel = () => {
    backdrop.classList.toggle('visible');
    modal.classList.toggle('visible');
}

const add = () => {
    console.log('btn--success listener');

    const movieLi = getInput();

    //const title = document.getElementById('title');

    const movieItem = document.createElement('li');
    

    movieItem.innerText = title.value;
    movieItem.className = 'movie-element';

    movieList.append(movieLi);

    backdrop.classList.toggle('visible');
    modal.classList.toggle('visible');

    movieItem.addEventListener('click', remove.bind(this, movieLi));
}

addBtn.addEventListener('click', mainAdd);

const remove = (movie) => {
    console.log('movie : ' + movie.innerText + ' remove listener');
    movie.remove();
}

const getInput = () => {

    const h2El = document.createElement('h2');
    const imgEl = document.createElement('img');
    const pEl = document.createElement('p');

    h2El.innerText = document.getElementById('title').value;
    imgEl.innerText = document.getElementById('image-url').value;
    pEl.innerText = document.getElementById('rating').value;

    const liContent = {
        title: h2El.innerText ,
        image: imgEl.innerText,
        rating: pEl.innerText 
    }

    const li = document.createElement('li');
    li.innerText = liContent;
    li.classList.add('movie-element');
    return li;
}