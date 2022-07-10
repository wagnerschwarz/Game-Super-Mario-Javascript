
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=> {
        mario.classList.remove('jump')
    },500)
}

//faz um loop para ficar validando as posições dos elementos na tela
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    // console.log(pipePosition)

    const cloudsPosition = clouds.offsetLeft;

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    // console.log(marioPosition)

    //se o pipe tiver a 120px de left, entao ele encostou no mario parado
    //se o mario tiver acima de 105px no bottom, entao ele passa tranquilamento por cima do tubo
    //se o pipe chegar a 0 left, entao ele ja passou pelo mario, nao precisa parar o jogo
    if( pipePosition<=120 && pipePosition > 0 && marioPosition<=105 ) {

        //remove a animação e seta a posição do pipe para onde ele bateu
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px `;

        //remove animação do mario e seta a posição dele, onde ele bateu no tubo
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px `;

        //substuitui imagem do mario para o mario do game-over
        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '45px';

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        clearInterval(loop);

    }

    
 
}, 10)

document.addEventListener('keydown', jump);