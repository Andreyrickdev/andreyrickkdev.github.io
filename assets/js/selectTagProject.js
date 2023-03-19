const menu = document.getElementsByClassName('projetos-menu')[0];
const menuLista = menu.getElementsByTagName('li');
const listProjects = document.getElementsByClassName('lista-projetos')[0];
const projects = listProjects.getElementsByTagName('li');

const projectsHCJ = document.getElementsByClassName('h-c-j');
const projectsRN = document.getElementsByClassName('rn');
const projectsMDB = document.getElementsByClassName('mdb');
const projectsFB = document.getElementsByClassName('fb');

for(let i = 0; i < menuLista.length; i++) {
    menuLista[i].addEventListener('click', function () {
        
        const dadProjetosMenu = document.getElementsByClassName('dad-projetos-menu')[0];
        const projetosMenu = document.getElementsByClassName('projetos-menu')[0];
        dadProjetosMenu.classList.remove('dad-projetos-menu-active');
        projetosMenu.classList.remove('projetos-menu-active');

        if(i === 0) {      //If you click on 'ALL', will execute this codes.
            for (let i of projects) {   //Show all projects.
                i.style.display = 'inline-block';
            }
        }

        if (i === 1) {      //If you click on 'HTML/CSS/JS', will execute this codes.
            for (let i of projects) {   //Hidde all projects
                i.style.display = 'none';
            }  

            for (let i of projectsHCJ) {    //Show only 'HTML/CSS/JS' projects
                i.style.display = 'inline-block';
            }
        }
    })
}

/*
menuLista[0].addEventListener('click', function(){

    const dadProjetosMenu = document.getElementsByClassName('dad-projetos-menu')[0];
    const projetosMenu = document.getElementsByClassName('projetos-menu')[0];

    dadProjetosMenu.classList.remove('dad-projetos-menu-active');
    projetosMenu.classList.remove('projetos-menu-active');

    for (let i of projects){
        i.style.display = "inline-block";
    }

});

menuLista[1].addEventListener('click', function (){

    const dadProjetosMenu = document.getElementsByClassName('dad-projetos-menu')[0];
    const projetosMenu = document.getElementsByClassName('projetos-menu')[0];

    dadProjetosMenu.classList.remove('dad-projetos-menu-active');
    projetosMenu.classList.remove('projetos-menu-active');

    for (let i of projects){
        i.style.display = "none";
    }

    for (let i of projectsHCJ){
        i.style.display = "inline-block";
    }
    
});

menuLista[2].addEventListener('click', function (){

    const dadProjetosMenu = document.getElementsByClassName('dad-projetos-menu')[0];
    const projetosMenu = document.getElementsByClassName('projetos-menu')[0];

    dadProjetosMenu.classList.remove('dad-projetos-menu-active');
    projetosMenu.classList.remove('projetos-menu-active');

    for (let i of projects){
        i.style.display = "none";
    }

    for (let i of projectsRN){
        i.style.display = "inline-block";
    }

});

menuLista[3].addEventListener('click', function (){

    const dadProjetosMenu = document.getElementsByClassName('dad-projetos-menu')[0];
    const projetosMenu = document.getElementsByClassName('projetos-menu')[0];

    dadProjetosMenu.classList.remove('dad-projetos-menu-active');
    projetosMenu.classList.remove('projetos-menu-active');

    for (let i of projects){
        i.style.display = "none";
    }

    for (let i of projectsFB){
        i.style.display = "inline-block";
    }
    
});

menuLista[4].addEventListener('click', function (){

    const dadProjetosMenu = document.getElementsByClassName('dad-projetos-menu')[0];
    const projetosMenu = document.getElementsByClassName('projetos-menu')[0];

    dadProjetosMenu.classList.remove('dad-projetos-menu-active');
    projetosMenu.classList.remove('projetos-menu-active');

    for (let i of projects){
        i.style.display = "none";
    }

    for (let i of projectsMDB){
        i.style.display = "inline-block";
    }
});


*/