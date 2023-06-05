import './index.html';
import './index.scss';


const modal = document.querySelector('.modal');
const menu = document.getElementById('open-nav');
const close = document.getElementById('close-nav');
const links = document.getElementsByClassName('link');

const showModal = () => {
    modal.classList.add('show');
    modal.classList.remove('hide');
    menu.classList.add('btn-hidden');
    close.classList.remove('btn-hidden');
    document.body.style.overflow = 'hidden';
}

const closeModal = () => {
    modal.classList.remove('show');
    modal.classList.add('hide');
    menu.classList.remove('btn-hidden');
    close.classList.add('btn-hidden');
    document.body.style.overflow = '';
}


menu.addEventListener('click', (e) => {
    e.preventDefault();
    showModal();
    e.stopPropagation()
})

close.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal();
    e.stopPropagation();
})
console.log(links);

for (let link of links) {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal();
        e.stopPropagation();
    });
}


