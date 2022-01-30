const text = document.querySelector('#text');
const sub = document.querySelector('#sub');

const btnNo = document.querySelector('.button-no')
const btnYs = document.querySelector('.button-ys')
const title = document.querySelector('#title');
console.log(title);
sub.addEventListener('click', () => {
    if(text.value.includes('30')){
        document.querySelector('.block1').style.display = 'none';
        document.querySelector('.block2').style.display = 'block';
    }
});
btnYs.addEventListener('click', () => {
    title.innerHTML = 'А подарок подарила?';
})
btnNo.addEventListener('click', () => {
    alert('НЕ МОЖЕТ БЫТЬ!!! СКОРЕЕ ТРЕБУЙТЕ СВОИ ПОДАРКИ!')
})
