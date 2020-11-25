function sound(instrument) {

    let music = new Audio('sounds/' + instrument + '.mp3');
    let div = document.querySelector('#' + instrument);
    div.style.backgroundColor = "red";
    music.play();

    switch(instrument) {
        case 'drum':
            setTimeout(clearBg, 1500);
            break;
        case 'guitar':
            setTimeout(clearBg, 5000);
            break;
        case 'balalaika':
            setTimeout(clearBg, 1500);
            break;
        case 'banjo':
            setTimeout(clearBg, 2000);
            break;
        case 'piano':
            setTimeout(clearBg, 2500);
            break;
        case 'accordion':
            setTimeout(clearBg, 2500);
            break;
        case 'bell':
            setTimeout(clearBg, 1700);
            break;
        default:
            alert('something went wrong!!');
            break;
    }

    function clearBg() {
        div.style.backgroundColor = "white";
    }
}

