const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');
const navLinks = document.querySelectorAll('.nav__link') 


const removeNav = () => {
    navMobile.classList.remove('is--active')
    navLinks.forEach(item => {
        item.addEventListener('click', () => {
            navMobile.classList.remove('nav-mobile--active')
        }) 
    }) 
}


// for (navLink of navLinks) {
//         function handleNav2() {
        
//                 navLinks.classList.remove('is-active');
//                 navMobile.classList.remove('nav-mobile--active');
//             }
//         }
        
        function handleNav() {
            navBtn.classList.toggle('is-active');
            navMobile.classList.toggle('nav-mobile--active');
        }
        
        const handleCurrentYear = () => {
            const year = (new Date).getFullYear();
            footerYear.innerText = year;
        }
        handleCurrentYear();
        
navBtn.addEventListener('click', handleNav);