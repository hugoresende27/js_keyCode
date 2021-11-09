const ins = document.getElementById('inserir')

window.addEventListener ('keydown', (e) => {        /*EVENTO COM A JANELA (window.) 'keydown' cada tecla pressionada */
    //console.log(e)      /*console log de  */
    /*
    KeyboardEvent {isTrusted: true, key: 'a', code: 'KeyA', location: 0, ctrlKey: false, …}
    */
   ins.innerHTML = `
        <div class="chave">
            ${e.chave === ' ' ? 'Space' : e.chave}
            <small>event.key</small>
        </div>

        <div class="chave">
            65
            <small>event.keyCode</small>
        </div>

        <div class="chave">
            keyA
            <small>event.code</small>
        </div>

        <div class="chave">
            pressiona uma tecla
            <small>event.code</small>
   `
})