openMenu.addEventListener('click', () => {
    menu.style.display = 'flex'; /* altera display para flex */

    menu.style.right = (menu.offsetWidth * -1) + 'px'
    openMenu.style.display = 'none'; /*oculta o menu só após receber o click */

    setTimeout(() => {
        menu.style.opacity = '1';
        menu.style.right = '0'; /* após 10 ms vai para posição zero */
    }, 10);
});

/* a propriedade style será removida após 200ms, usando setTimeout
 que recebe uma função para executar, e o tempo de espera*/
closeMenu.addEventListener('click', () => {
    menu.style.opacity = '0';
    menu.style.right = (menu.offsetWidth * -1) + 'px';
    setTimeout(() => {
        menu.removeAttribute('style');
        openMenu.removeAttribute('style');  /*exibir qdo menu fechado*/
    }, 200);
});
