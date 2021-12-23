// Declaraciones
    const d = document
    const menuBtn = d.querySelector('nav .btn')
    const menuLst = d.querySelector('nav .menu')
    const mapBtn = d.querySelector('#mapa .btn')
    const mapFrm = d.querySelector('#mapa iframe')

// Navegacion
    menuBtn.onclick = openMenu()

    function openMenu(){
        menuLst.classList.toggle('active') ? 
            menuBtn.innerHTML = '&times;' : 
            menuBtn.innerHTML = '&equiv;'
    }
