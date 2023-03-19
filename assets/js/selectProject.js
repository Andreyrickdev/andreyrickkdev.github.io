
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
    
}

closedProject();