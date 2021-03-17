const burger = document.getElementById('burger-menu')
const menu = document.getElementById('main-menu')
const toggleMenu = () => {
    burger.classList.toggle('open')
    menu.classList.toggle('open')
}
burger.addEventListener('click', toggleMenu)


const navall = document.getElementById('nav-all__burger')
const almenu = document.getElementById('all-menu')
const toggleMenuall = () => {
    navall.classList.toggle('open')
    almenu.classList.toggle('open')
}
navall.addEventListener('click', toggleMenuall)





// tabs
const tabNavs = document.querySelectorAll('.tabs .tabs-nav .tabs-nav__item')
const tabContents = document.querySelectorAll('.tabs .tabs-content .tabs-content__item')
const tabblock = document.querySelector('.tabs')




tabNavs.forEach((nav, i) => {

    nav.onclick = function (event) {
        event.preventDefault()
        if (!this.classList.contains('active')) {
            document.querySelector('.tabs .tabs-nav .tabs-nav__item.active').classList.remove('active')
            this.classList.add('active')
            document.querySelector('.tabs .tabs-content .tabs-content__item.active').classList.remove('active')
            tabContents[i].classList.add('active')
        }
    }

})
// tabs





// acordion
const accHeaders = document.querySelectorAll('.accordion .accordion-item .accordion-item__header')
const accContent = document.querySelectorAll('.accordion .accordion-item .accordion-item__content')
const accrodblock = document.querySelector('.accordion')


// let acordionOn = function() {

    let datasaveH = function(){
    accContent.forEach((contents, index) => {
            contents.setAttribute('data-height', contents.clientHeight)
            contents.style.height = 0
    })
}

datasaveH()

let acrodadaptiv = function() {
    if(document.documentElement.clientWidth > 800) { 
        accrodblock.style.display = "none"
    }else if (document.documentElement.clientWidth < 800){
        accrodblock.style.display = "block"
    }

    if(document.documentElement.clientWidth < 800) { 
        tabblock.style.display = "none"
    }else if (document.documentElement.clientWidth > 800){
        tabblock.style.display = "flex"
    }
}

acrodadaptiv()

window.onresize = function() {
    acrodadaptiv()
    datasaveH()
}
// setTimeout(acrodadaptiv, 1000);


    // if(document.documentElement.clientWidth > 710) {
    //     accContent.forEach((content, index) => {
    //         content.setAttribute('data-height', content.clientHeight)
    //         console.log( content.clientHeight);
    //     })
    // }
   
//     window.onresize = function() {
// if(document.documentElement.clientWidth  710) {
//     accContent.forEach((content, index) => {
//         console.log(content.clientHeight    );
//         content.setAttribute('data-height', content.clientHeight)
//         content.style.height = 0

//     })
// }
// }

let acrodheight = function() {
    accHeaders.forEach((header, index) => {

        header.onclick = function (event) {
            event.preventDefault()

            let headerOpen = document.querySelector('.accordion .accordion-item .accordion-item__header.open')
            let currentOpen = document.querySelector('.accordion .accordion-item.open')
            if (currentOpen && currentOpen != this.parentNode) {
                currentOpen.classList.remove('open')
                headerOpen.classList.remove('open')
                currentOpen.querySelector('.accordion-item__content').style.height  = 0
            }
            this.classList.toggle('open')
            this.parentNode.classList.toggle('open')
            if (this.parentNode.classList.contains('open')) {
                accContent[index].style.height  = accContent[index].getAttribute('data-height') * 1.1 + 'px' 
            } else {
                accContent[index].style.height  = 0
            }


            // if(headerOpen && headerOpen != this) {
            //     header.classList.remove('open')
            // }

        }

    })
}
acrodheight()

window.onresize = function() {
    acrodadaptiv()
}


let bgsize = function(){
    
}
// }
// acordionOn() 




// acordion