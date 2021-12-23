// Declaraciones
    const d = document
    const menuBtn = d.querySelector('nav .btn')
    const menuLst = d.querySelector('nav .menu')

// Navegacion
    menuBtn.onclick = () => menuLst.classList.toggle('active') ? menuBtn.innerHTML = '&times;' : menuBtn.innerHTML = '&equiv;'

// Mapa de Contacto
    mapBtn.addEventListener('click', openMap )

    function openMap(){
        if( mapFrm.classList.toggle('active') ){
            mapBtn.classList.replace('icon-max', 'icon-min')
        } else {
            mapBtn.classList.replace('icon-min', 'icon-max')
        }
    }
