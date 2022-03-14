$(document).ready(function() {

    var testButton = document.createElement("BUTTON");
    testButton.textContent = "Aloita";
    testButton.onclick = function testB() {
    if (testButton.style.display != 'none') {
        testButton.style.display = 'none';
    } else {
        testButton.style.display = 'block';
    }
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "chat_code.js"; 
    script.id = "chatScript";
    document.getElementsByTagName("head")[0].appendChild(script);
    return false;
};
    $("main").append(testButton);
});