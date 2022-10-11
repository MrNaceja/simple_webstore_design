/**
 * Controla a abertura e fechamento do menu de filtros mobile.
 * 
 * @param {HTMLButtonElement} oInstanceBtn 
 */
 function controlaMenuFiltro(oInstanceBtn) {
    var oMenu = document.querySelector('.toolbar .container');
    if (oMenu.classList.contains('menu_aberto')) {
        oMenu.classList.replace('menu_aberto','menu_fechado');
        oInstanceBtn.classList.remove('ativo');
    } else {
        oMenu.classList.replace('menu_fechado','menu_aberto');
        oInstanceBtn.classList.add('ativo');
    }
}