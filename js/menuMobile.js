function openMenuMobile(){
    document.querySelector('.header_nav').classList.add('open');
    document.querySelector('.overlay_menu_mobile').classList.add('open');
}

function closeMenuMobile(){
    document.querySelector('.header_nav').classList.remove('open');
    document.querySelector('.overlay_menu_mobile').classList.remove('open');
}