
const projetos = document.getElementsByClassName('imgProject');
const dadBox = document.getElementsByClassName('boxForP');
const boxForP = document.getElementsByClassName('boxForP-hide');
const linkProjetos = document.getElementsByClassName('link-pros-projetos');

function openProject () {

    const fechar = document.getElementsByClassName('closed');

    for(let i = 0; i < projetos.length; i++) {  //if active then desactive, if desactive then active
        projetos[i].addEventListener('click', function () {
            dadBox[i].classList.toggle('boxForP-auto');
            boxForP[i].classList.toggle('boxForP-display');
            fechar[i].classList.toggle('x-hide');
        })
    }

}

openProject();

function closedProject () {

    const fechar = document.getElementsByClassName('closed');

    for(let i = 0; i < fechar.length; i++) {
        fechar[i].addEventListener('click', function () {

            const boxForP = document.getElementsByClassName('boxForP')[i];
            boxForP.classList.remove('boxForP-auto')
            fechar[i].classList.add('x-hide');
        })
    }
    
    /*fechar[0].addEventListener('click', function () {

        const boxForP = document.getElementsByClassName('boxForP')[0];

        boxForP.classList.remove('boxForP-auto');
        fechar[0].classList.add('x-hide');
    });

    fechar[1].addEventListener('click', function () {

        const boxForP = document.getElementsByClassName('boxForP')[1];

        boxForP.classList.remove('boxForP-auto');
        fechar[1].classList.add('x-hide');
    });

    fechar[2].addEventListener('click', function () {

        const boxForP = document.getElementsByClassName('boxForP')[2];

        boxForP.classList.remove('boxForP-auto');
        fechar[2].classList.add('x-hide');
    });

    fechar[3].addEventListener('click', function () {

        const boxForP = document.getElementsByClassName('boxForP')[3];

        boxForP.classList.remove('boxForP-auto');
        fechar[3].classList.add('x-hide');
    });

    fechar[4].addEventListener('click', function () {

        const boxForP = document.getElementsByClassName('boxForP')[4];

        boxForP.classList.remove('boxForP-auto');
        fechar[4].classList.add('x-hide');
    });

    fechar[5].addEventListener('click', function () {
     
        const boxForP = document.getElementsByClassName('boxForP')[5];

        boxForP.classList.remove('boxForP-auto');
        fechar[5].classList.add('x-hide');
    });

    fechar[6].addEventListener('click', function () {

        const boxForP = document.getElementsByClassName('boxForP')[6];

        boxForP.classList.remove('boxForP-auto');
        fechar[6].classList.add('x-hide');
    });*/
}

closedProject();