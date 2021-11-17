function senden() {
    let message = document.getElementById("text").value
    console.log(message)

    switch (message) {
        case "":
        case null:
            document.getElementById("noMessage").innerHTML = "Schmeiss ma was rein da du Lackaffe..."
            break;
        default:
            document.getElementById("message").innerHTML = message
            document.getElementById("noMessage").innerHTML = ""
    }
}