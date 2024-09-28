document.addEventListener('DOMContentLoaded', (event) => {
    const jogadores = document.querySelectorAll('.jogador');
    const initialPositions = {};

    jogadores.forEach(jogador => {
        initialPositions[jogador.id] = {
            top: jogador.style.top,
            left: jogador.style.left,
            right: jogador.style.right
        };

        jogador.addEventListener('dragstart', dragStart);
        jogador.addEventListener('dragend', dragEnd);
    });

    const campo = document.querySelector('.campo.vermelho');
    campo.addEventListener('dragover', dragOver);
    campo.addEventListener('drop', drop);

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => {
            e.target.style.visibility = 'hidden';
        }, 0);
    }

    function dragEnd(e) {
        e.target.style.visibility = 'visible';
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function drop(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);
        const rect = campo.getBoundingClientRect();

        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        draggable.style.left = `${offsetX - (draggable.offsetWidth / 2)}px`;
        draggable.style.top = `${offsetY - (draggable.offsetHeight / 2)}px`;
    }

    const resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', () => {
        jogadores.forEach(jogador => {
            const initialPosition = initialPositions[jogador.id];
            jogador.style.top = initialPosition.top;
            jogador.style.left = initialPosition.left;
            jogador.style.right = initialPosition.right;
        });
    });

    attackButton.addEventListener('click', () => {
        let is3x2Formation = false;
    
        const currentFormation = document.querySelector('.dropdown.black .dropdown-content a.active');
        if (currentFormation && currentFormation.textContent === '3x2') {
            is3x2Formation = true;
        }
    
        jogadores.forEach(jogador => {
            if (!jogador.classList.contains('white')) {
                const currentLeft = parseFloat(jogador.style.left);
    
                if (jogador.id === 'player1' && !is3x2Formation) {
                    return;
                }
    
                // move player
                jogador.style.left = `${Math.min(currentLeft + 10, 90)}%`;
            }
        });
    });
    

    // movimentações -> b para pretas e w para brancas
    // 2x2
    const b2x2 = document.querySelector('.dropdown.black .dropdown-content a:first-child');
    b2x2.addEventListener('click', () => {
        const newPositions = {
            player1: { top: '45%', left: '0%' },
            player2: { top: '30%', left: '14%' },
            player3: { top: '60%', left: '14%' },
            player4: { top: '15%', left: '36%' },
            player5: { top: '75%', left: '36%' },
        };

        Object.keys(newPositions).forEach(id => {
            const jogador = document.getElementById(id);
            const position = newPositions[id];
            jogador.style.top = position.top;
            jogador.style.left = position.left;
            jogador.style.right = 'auto';
        });

        document.querySelectorAll('.dropdown.black .dropdown-content a').forEach(el => el.classList.remove('active'));
        b2x2.classList.add('active');
});


    const w2x2 = document.querySelector('.dropdown.white .dropdown-content a:first-child');
    w2x2.addEventListener('click', () => {
        const newPositions = {
            player6: { top: '45%', right: '0%' },
            player7: { top: '30%', right: '14%' },
            player8: { top: '60%', right: '14%' },
            player9: { top: '15%', right: '36%' },
            player10: { top: '75%', right: '36%' },
        };

        Object.keys(newPositions).forEach(id => {
            const jogador = document.getElementById(id);
            const position = newPositions[id];
            jogador.style.top = position.top;
            jogador.style.right = position.right;
            jogador.style.left = 'auto';
        });
    });

    // 3x1
    const b3x1 = document.querySelector('.dropdown.black .dropdown-content a:nth-child(2)');
    b3x1.addEventListener('click', () => {
        const newPositions = {
            player1: { top: '45%', left: '0%' },
            player2: { top: '45%', left: '20%' },
            player3: { top: '15%', left: '28%' },
            player4: { top: '75%', left: '28%' },
            player5: { top: '45%', left: '43%' },
        };

        Object.keys(newPositions).forEach(id => {
            const jogador = document.getElementById(id);
            const position = newPositions[id];
            jogador.style.top = position.top;
            jogador.style.left = position.left;
            jogador.style.right = 'auto';
        });

        document.querySelectorAll('.dropdown.black .dropdown-content a').forEach(el => el.classList.remove('active'));
        b3x1.classList.add('active');
    });

    const w3x1 = document.querySelector('.dropdown.white .dropdown-content a:nth-child(2)');
    w3x1.addEventListener('click', () => {
        const newPositions = {
            player6: { top: '45%', right: '0%' },
            player7: { top: '45%', right: '20%' },
            player8: { top: '15%', right: '28%' },
            player9: { top: '75%', right: '28%' },
            player10: { top: '45%', right: '43%' },
        };

        Object.keys(newPositions).forEach(id => {
            const jogador = document.getElementById(id);
            const position = newPositions[id];
            jogador.style.top = position.top;
            jogador.style.right = position.right;
            jogador.style.left = 'auto';
        });
    });

    // 3x2
    const b3x2 = document.querySelector('.dropdown.black .dropdown-content a:nth-child(3)');
    b3x2.addEventListener('click', () => {
        const newPositions = {
            player1: { top: '30%', left: '14%' },
            player2: { top: '60%', left: '14%' },
            player3: { top: '15%', left: '36%' },
            player4: { top: '75%', left: '36%' },
            player5: { top: '45%', left: '43%' },
        };

        Object.keys(newPositions).forEach(id => {
            const jogador = document.getElementById(id);
            const position = newPositions[id];
            jogador.style.top = position.top;
            jogador.style.left = position.left;
            jogador.style.right = 'auto';
        });

        document.querySelectorAll('.dropdown.black .dropdown-content a').forEach(el => el.classList.remove('active'));
        b3x2.classList.add('active');
    });


    const w3x2 = document.querySelector('.dropdown.white .dropdown-content a:nth-child(3)');
    w3x2.addEventListener('click', () => {
        const newPositions = {
            player6: { top: '30%', right: '14%' },
            player7: { top: '60%', right: '14%' },
            player8: { top: '15%', right: '36%' },
            player9: { top: '75%', right: '36%' },
            player10: { top: '45%', right: '43%' },
        };

        Object.keys(newPositions).forEach(id => {
            const jogador = document.getElementById(id);
            const position = newPositions[id];
            jogador.style.top = position.top;
            jogador.style.right = position.right;
            jogador.style.left = 'auto';
        });
    });

    const b1x2x1 = document.querySelector('.dropdown.black .dropdown-content a:nth-child(4)');
    b1x2x1.addEventListener('click', () => {
        const newPositions = {
            player1: { top: '45%', left: '0%' },  
            player2: { top: '30%', left: '14%' },  
            player3: { top: '60%', left: '14%' },  
            player4: { top: '45%', left: '36%' }, 
            player5: { top: '45%', left: '50%' }, 
        };

        Object.keys(newPositions).forEach(id => {
            const jogador = document.getElementById(id);
            const position = newPositions[id];
            jogador.style.top = position.top;
            jogador.style.left = position.left;
            jogador.style.right = 'auto';
        });

        document.querySelectorAll('.dropdown.black .dropdown-content a').forEach(el => el.classList.remove('active'));
        b1x2x1.classList.add('active');
    });

    const w1x2x1 = document.querySelector('.dropdown.white .dropdown-content a:nth-child(4)');
    w1x2x1.addEventListener('click', () => {
        const newPositions = {
            player6: { top: '45%', right: '0%' }, // Goleiro
            player7: { top: '30%', right: '14%' }, // Defensor
            player8: { top: '60%', right: '14%' }, // Defensor
            player9: { top: '45%', right: '36%' }, // Meio-campo
            player10: { top: '45%', right: '50%' }, // Atacante
        };

        Object.keys(newPositions).forEach(id => {
            const jogador = document.getElementById(id);
            const position = newPositions[id];
            jogador.style.top = position.top;
            jogador.style.right = position.right;
            jogador.style.left = 'auto';
        });
    });

});
