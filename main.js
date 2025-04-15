function pickColor() {
    var input = document.getElementById('color').value;

    switch (parseInt(input)) {
        case 1:
            message = " 🔴 Stop !";
            break;
        case 2:
            message = " 🟡 Slow down...";
            break;
        case 3:
            message = " 🟢 Go !!";
            break;
        default:
            message = "Invalid";
            break;
    }

    document.getElementById('kulay').innerHTML = message;
}
