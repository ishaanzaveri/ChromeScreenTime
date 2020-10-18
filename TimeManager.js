var visited = [];
//var visitedParsed = [];
let counter = 0;
var ogList = [];
var ListDict;
var currentTime;
var currentTabId;
var currentUrl;
var gTab;
var onUpdateUrl;

chrome.tabs.onUpdated.addListener((tabId, changeDetails, tab) => {
  // if (tab.status === "complete"){
  //   gTab = tab;
  //   visited.push(tab.url);
  //   var editedUrl = visited[counter].split("/");
  //   if (editedUrl[2] !== "newtab") {
  //     //visitedParsed.push(editedUrl[2]);
  //     if (!ogList.includes(editedUrl[2])) {
  //       ogList.push(editedUrl[2]);
  //       ListDict[editedUrl[2]] = 0;
  //     }
  //   }
  //   console.log(ogList);
  //   for(var key in ListDict) {
  //     console.log(key + " : " + ListDict[key] + "First part");
  //   }
  //   counter++;
  // }
  if (onUpdateUrl === undefined || onUpdateUrl === "newtab") {
    onUpdateUrl = tab.url.split('/')[2]; // later
  } else if (tab.url.split('/')[2] !== onUpdateUrl) {
    if (ListDict === undefined) {
      startTime(tab.url);
    } else {
      endTime(tab.url);
    }
  } 
});

chrome.tabs.onActivated.addListener((tabId, windowId) => {
  //var tabUrl = chrome.tabs.getTabId();
  chrome.tabs.getSelected(null, (tab) => {
    gTab = tab;
  });
  console.log(gTab);
  if (ListDict === undefined) {
    startTime(gTab.url);
  } else {
    endTime(gTab.url);
  }
});

// chrome.windows.onFocusChanged.addListener(window => {
//   counter = 0;
//   if(gTab != undefined &&  ( window === -1 || window === 1 ) && gTab.status === "complete") {
//     var editedUrl = gTab.url.split("/");

//   // Date.now() - unix time
//   if (window === 1 ){
//     console.log(Date.now());
//     currentTime = Date.now();
//   }
//   if (window === -1) {
//     ListDict[editedUrl[2]] = (Date.now() - currenttime);
//     if (ListDict[editedUrl[2]] === NaN) {
//       console.log(editedUrl[2] + " is NaN " + currenttime)
//     }
//   }
//   console.log("for " + editedUrl[2] + " is " + ListDict[editedUrl[2]])
//   gTab = undefined;
// }
// });

function startTime (url) {
  currentTime = Date.now();
  currentUrl = url.split('/')[2];
}

function endTime (url) {
  var timeDifference = Date.now() - currentTime;
  if(ListDict[currentUrl] == undefined) {
    ListDict[currentUrl] = timeDifference/1000; //initialization
  } else {
    ListDict[currentUrl] += timeDifference/1000; // adding
  }
  console.log(ListDict);
  startTime(url);
}