const ins = document.getElementById('inserir')

window.addEventListener ('keydown', (event) => {        /*EVENTO COM A JANELA (window.) 'keydown' cada tecla pressionada */
    //console.log(e)      /*console log de  */
    /*
    KeyboardEvent {isTrusted: true, key: 'a', code: 'KeyA', location: 0, ctrlKey: false, …}
    */
   ins.innerHTML = `
        <div class="chave">
            ${event.key === ' ' ? 'Space' : event.key}
            <small>event.key</small>
        </div>

        <div class="chave">
            ${event.keyCode}
            <small>event.keyCode</small>
        </div>

        <div class="chave">
            ${event.code}
            <small>event.code</small>
        </div>
   `
})