game();

function game() {
    const userInput = prompt("Grid Numbers?");
    if (userInput === null) return;
    if (userInput > 64 || userInput < 1)
        {
        alert('Invalid Input! Try between 0 - 64');
        game();
    } else {
        generateBox(userInput);
    }
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function generateBox(userInput) {
    const container = document.querySelector('.container');

    for (let i = 0; i < userInput; i++) {
        const content = document.createElement('div');
            content.classList.add('board');
            container.appendChild(content);
    }
    
    const board = document.querySelectorAll('.board');
    
    board.forEach(e => {
        for (let i = 0; i < userInput; i++) {
        let content = document.createElement('div');
        content.classList.add('box');
        e.append(content);
        };

        e.addEventListener('mousedown',colorIt)
        e.addEventListener('mouseover', colorIt)
    
    });
}

function colorIt(c) {
    if (c.type === 'mouseover' & !mouseDown) return;  
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    c.target.style.background = `#${randomColor}`;
}