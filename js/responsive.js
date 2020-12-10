//window resize
//reference by Coder,s Gyan https://www.youtube.com/watch?v=IMm5d-LTxgM
/* window.addEventListener('resize', function () {
    activateAddedInfo();
})


function activateAddedInfo() {
    if (window.innerWidth < 860) {
        document.body.classList.add('mobileView')
    } else {
        document.body.classList.remove('mobileView')
    }
} 

window.onload = activateAddedInfo
*/

let navBar = document.querySelector('.navBar')
let mobileView = document.querySelector('.nav-list')

let navLines = document.querySelectorAll('.navLines')

let isOpen = false

navBar.addEventListener('click', function () {
    mobileView.classList.toggle('show-nav-list')
    if (!isOpen) {
        navLines[0].style.transform = 'rotate(45deg)'
        navLines[1].style.opacity = '0'
        navLines[2].style.transform = 'rotate(-45deg)'
        isOpen = true

    } else {
        navLines[0].style.transform = 'rotate(0deg)'
        navLines[1].style.opacity = '1'
        navLines[2].style.transform = 'rotate(0deg)'
        isOpen = false
    }
})