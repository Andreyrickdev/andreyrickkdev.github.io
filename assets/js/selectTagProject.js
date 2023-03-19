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
