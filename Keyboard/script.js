function emulKeyboard(e, functionToAdd) {
    let code = e.code.toLowerCase();

    function keyChangeClassStatus(item, functionToAdd) {
        functionToAdd ? item.classList.add('key-active') : item.classList.remove('key-active');
    }

    let capslock = document.querySelector('#caps');
    if (functionToAdd && code == 'capslock') {
        keyChangeClassStatus(capslock, !capslock.classList.contains('key-active'));
    }

    document.querySelectorAll('.keyboard li>ul>li').forEach(item => {
        if (item.dataset.code == code && code != 'capslock') {
            keyChangeClassStatus(item, functionToAdd);
        }
    });
}


document.querySelector('input').addEventListener('keydown', e => emulKeyboard(e, true));
document.querySelector('input').addEventListener('keyup', e => emulKeyboard(e));
