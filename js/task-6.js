function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector(`.button-create`);
const buttonDestroy = document.querySelector(`.button-destroy`);
const inputNum = document.querySelector(`.input-num`);
const boxes = document.querySelector(`.boxes`)

buttonCreate.addEventListener(`click`, function(){

  const inputValue = parseInt(inputNum.value, 10);

  if (inputValue < 1 || inputValue > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }



  let size = 30;
      for (let i = 0; i < inputValue; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxes.appendChild(box);

        size += 10;
      }
      inputNum.value = '';

});

buttonDestroy.addEventListener('click', function() {
  boxes.innerHTML = '';
  inputNum.reset();
});