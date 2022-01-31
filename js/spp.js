const text = document.querySelector('.quote-text');
const author = document.querySelector('.quote-author');
const btn = document.querySelector('#btn');
const load = document.querySelector('.load');

function getQuote() {
    fetch('https://type.fit/api/quotes')
        .then(result => result.json())
        .then(data => {
            let index = Math.round(Math.random() * 1643);
            text.textContent = data[index].text;
            author.textContent = data[index].author;
        })
    setTimeout(() => {
        btn.classList.add('active');
    }, 2000);
}


btn.addEventListener('click', (e) => {
    if (!e.target.matches('button.active')) return;
    getQuote();
    btn.classList.remove('active');
});

setTimeout(() => {
    load.classList.add('opacity');
}, 2000);
setTimeout(() => {
    load.classList.add('none');
}, 2500);

window.addEventListener('load', getQuote);