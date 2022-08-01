
const projetos = document.getElementsByClassName('imgProject');
const dadBox = document.getElementsByClassName('boxForP');
const boxForP = document.getElementsByClassName('boxForP-hide');
const linkProjetos = document.getElementsByClassName('link-pros-projetos');

function openProject () {


    projetos[0].addEventListener("click", function(){

        console.log(this);
        
        dadBox[0].classList.toggle('boxForP-auto');
        boxForP[0].classList.toggle('boxForP-display');
    });

    projetos[1].addEventListener("click", function(){

        dadBox[1].classList.toggle('boxForP-auto');
        boxForP[1].classList.toggle('boxForP-display');
    });

    projetos[2].addEventListener("click", function(){

        dadBox[2].classList.toggle('boxForP-auto');
        boxForP[2].classList.toggle('boxForP-display');
    });

    projetos[3].addEventListener("click", function(){

        dadBox[3].classList.toggle('boxForP-auto');
        boxForP[3].classList.toggle('boxForP-display');
    });

    projetos[4].addEventListener("click", function(){

        dadBox[4].classList.toggle('boxForP-auto');
        boxForP[4].classList.toggle('boxForP-display');
    });

    projetos[5].addEventListener("click", function(){

        dadBox[5].classList.toggle('boxForP-auto');
        boxForP[5].classList.toggle('boxForP-display');
    });

    projetos[6].addEventListener("click", function(){

        dadBox[6].classList.toggle('boxForP-auto');
        boxForP[6].classList.toggle('boxForP-display');
    });
}

openProject();

function closedProject () {

    const fechar = document.getElementsByClassName('closed');

    fechar[0].addEventListener('click', function () {

        const boxForP = document.getElementsByClassName('boxForP')[0];

        boxForP.classList.remove('boxForP-auto');
    });

    fechar[1].addEventListener('click', function () {

        const boxForP = document.getElementsByClassName('boxForP')[1];

        boxForP.classList.remove('boxForP-auto');
    });

    fechar[2].addEventListener('click', function () {

        const boxForP = document.getElementsByClassName('boxForP')[2];

        boxForP.classList.remove('boxForP-auto');
    });

    fechar[3].addEventListener('click', function () {

        const boxForP = document.getElementsByClassName('boxForP')[3];

        boxForP.classList.remove('boxForP-auto');
    });

    fechar[4].addEventListener('click', function () {

        const boxForP = document.getElementsByClassName('boxForP')[4];

        boxForP.classList.remove('boxForP-auto');
    });

    fechar[5].addEventListener('click', function () {

        
    });
}

closedProject();