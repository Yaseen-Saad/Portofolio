const s_nav = document.querySelector('.s-nav');
const closer_nav = document.querySelector('.nav-closer_div_');
function openSNav(params) {
    s_nav.style.transform = 'translatex(0)'
    closer_nav.style.width = '100vw'

}
function closeSNav(params) {
    s_nav.style.transform = 'translatex(-100%)'
    closer_nav.style.width = '0'
}