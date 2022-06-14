function forward () {

    const squareForward = document.getElementsByClassName('squareForward')[0];
    const projetosMenu = document.getElementsByClassName('projetos-menu')[0];

    squareForward.addEventListener('mouseover', function(){

        projetosMenu.scrollTo({
            top:0,
            left: 3000,
            behavior: 'smooth'
        })

    })

}

forward();