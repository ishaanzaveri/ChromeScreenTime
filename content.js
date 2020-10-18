//console.log("trial");
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, res) {
    console.log("from content " + message);
}
console.log("trial");