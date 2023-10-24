var sidebar = document.querySelector('.sidebar-container')
        var overlay = document.querySelector('.mobile-overlay')
        var closemenu = document.querySelector('.close-menu')
        var menu = document.querySelector('.menu-toggler')

        menu.addEventListener('click',()=>{
            sidebar.style.display= 'flex'
            overlay.style.display= 'flex'

            closemenu.addEventListener('click',()=>{
                sidebar.style.display= 'none'
            overlay.style.display= 'none'

            })


            overlay.addEventListener('click',()=>{
                sidebar.style.display= 'none'
                overlay.style.display= 'none'
            })
        })