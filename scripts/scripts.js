
const container = document.querySelector('.container');

for (let i = 0; i < 32; i++) {
    const content = document.createElement('div');
        content.classList.add('board');
        container.appendChild(content);

        const q = document.querySelector('.board');
}

const q = document.querySelectorAll('.board');

q.forEach(e => {
    for (let i = 0; i < 16; i++) {
    let content = document.createElement('div');
    content.classList.add('box');
    e.append(content);
    };
    e.addEventListener('mouseover', (c) => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        c.target.style.background = `#${randomColor}`;
    })

});