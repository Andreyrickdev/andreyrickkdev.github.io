function forward () {

    const squareForward = document.getElementsByClassName('squareBack')[0];
    const projetosMenu = document.getElementsByClassName('projetos-menu')[0];

    squareForward.addEventListener('mouseover', function(){

        projetosMenu.scrollTo({
            top:0,
            left: 0,
            behavior: 'smooth'
        })

    })

}

forward();