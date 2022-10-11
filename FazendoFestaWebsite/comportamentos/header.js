/**
 * Controla a abertura e fechamento do menu mobile.
 * 
 * @param {HTMLButtonElement} oInstanceBtn 
 */
function controlaMenu(oInstanceBtn) {
    var oMenu = document.querySelector('header .container nav');
    if (oMenu.classList.contains('menu_aberto')) {
        oMenu.classList.replace('menu_aberto','menu_fechado');
    } else {
        oMenu.classList.replace('menu_fechado','menu_aberto');
    }
}