var visited = [];
var visitedParsed = [];
let counter = 0;
var ogList = []; 
var ListDict = {};
var currenttime;
var gTab;
chrome.tabs.onUpdated.addListener((tabId, changeDetails, tab) => {
  gTab = tab;
  if (tab.status === "complete"){
    visited.push(tab.url);
    var editedUrl = visited[counter].split("/");
    if (editedUrl[2] !== "newtab") {
      visitedParsed.push(editedUrl[2]);
      if (!ogList.includes(editedUrl[2])) {
        ogList.push(editedUrl[2]);
        ListDict[editedUrl[2]] = 0;
      }
    }
    console.log(ogList);
    for(var key in ListDict) {
      console.log(key + " : " + ListDict[key] + "First part");
    }
    counter++;
  }
});


chrome.windows.onFocusChanged.addListener(window => {
  counter = 0; 
  if(gTab != undefined &&  ( window === -1 || window === 1 )) {
    var editedUrl = gTab.url.split("/");
  
  // Date.now() - unix time
  if (window === 1 ){
    console.log(Date.now());
    currenttime = Date.now();
  }
  if (window === -1) {
    ListDict[editedUrl[2]] = (Date.now() - currenttime); 
    if (ListDict[editedUrl[2]] === NaN) {
      console.log(editedUrl[2] + " is NaN " + currenttime)
    }
  }
  console.log("for " + editedUrl[2] + " is " + ListDict[editedUrl[2]])
  gTab = undefined;
}
});

 