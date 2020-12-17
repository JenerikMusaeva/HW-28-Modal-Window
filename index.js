let openModalBtn = document.querySelector('.btn-open-modal');
let modalWindow = document.querySelector('.modal-window')
let closeModalBtn = document.querySelector('.btn-close-modal');
let modalBackdrop = document.querySelector('.modal-backdrop')
let fadeOut = document.getElementsByName('animation')

openModalBtn.addEventListener('click', function(e) {
  e.preventDefault();
  modalWindow.classList.add('modal-window_open')
})

closeModalBtn.addEventListener('click', function(e) {
  e.preventDefault();
  modalWindow.classList.remove('modal-window_open')
})

modalBackdrop.addEventListener('click', function(e) {
  e.preventDefault();
  modalWindow.classList.remove('modal-window_open')
})

