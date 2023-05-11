
game();

function game() {
    const userInput = prompt("Grid Numbers?");
    console.log(userInput);
    if (userInput === null) return;
    if (userInput > 64 || userInput < 1)
        {
        alert('Invalid Input! Try between 0 - 64');
        game();
    } else {
        generateBox(userInput);
    }
}

function generateBox(userInput) {
    const container = document.querySelector('.container');

    for (let i = 0; i < userInput; i++) {
        const content = document.createElement('div');
            content.classList.add('board');
            container.appendChild(content);
    
            const q = document.querySelector('.board');
    }
    
    const q = document.querySelectorAll('.board');
    
    q.forEach(e => {
        for (let i = 0; i < userInput; i++) {
        let content = document.createElement('div');
        content.classList.add('box');
        e.append(content);
        };
        e.addEventListener('mouseover', (c) => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            c.target.style.background = `#${randomColor}`;
        })
    
    });
}