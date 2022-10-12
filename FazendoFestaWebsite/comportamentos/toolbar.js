/**
 * Controla a abertura e fechamento do menu de filtros mobile.
 * 
 * @param {HTMLButtonElement} oInstanceBtn 
 */
 function controlaMenuFiltro(oInstanceBtn) {
    var oMenu = document.querySelector('.toolbar .container');
    if (oMenu.classList.contains('menu_aberto')) {
        oMenu.classList.replace('menu_aberto','menu_fechado');
    } else {
        oMenu.classList.replace('menu_fechado','menu_aberto');
    }
}