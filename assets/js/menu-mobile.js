
function menuMobile() {

const button = document.getElementById('btn-mobile');

button.addEventListener('click', function(){

    const dadProjetosMenu =  document.getElementsByClassName('dad-projetos-menu')[0];
    const projetosMenu = document.getElementsByClassName('projetos-menu')[0];

    dadProjetosMenu.classList.toggle('dad-projetos-menu-active');
    projetosMenu.classList.toggle('projetos-menu-active');
    
})

}

menuMobile();