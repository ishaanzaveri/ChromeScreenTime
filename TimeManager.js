var ListDict = {};
var currentTime;
var currentTabId;
var currentUrl;
var gTab;
var onUpdateUrl;
chrome.storage.local.get("data", (data) => {
  if (data.data !== undefined) {
    ListDict = data.data;
  }
});

function parseUrl(url) {
  if (url === "") {
    console.log("probably just an empty string");
    return "";
  }
  console.log("Parse url: "+ url);
  if (url.startsWith("chrome")) {
    return "";
  }
  return (new URL(url)).hostname;
}
chrome.tabs.onUpdated.addListener((tabId, changeDetails, tab) => {
  if (tabId !== currentTabId) {
    return;
  }
  if (onUpdateUrl === undefined) {
    onUpdateUrl = parseUrl(tab.url);
  } else if (parseUrl(tab.url) !== onUpdateUrl) {
    onUpdateUrl = parseUrl(tab.url);
    if (currentTime === undefined) {
      startTime(tab.url);
    } else {
      endTime(tab.url);
    }
  }
});

chrome.tabs.onActivated.addListener(({tabId, windowId}) => {
  currentTabId = tabId;
  chrome.tabs.get(tabId, function(tab) {
    gTab = tab;
    console.log(gTab);
    if (currentTime === undefined) {
      startTime(gTab.url);
    } else {
      endTime(gTab.url);
    }
  });

});

function startTime (url) {
  currentTime = Date.now();
  currentUrl = parseUrl(url);
}

function endTime (url) {
  var timeDifference = Date.now() - currentTime;
  if (currentUrl !== "") {
    if (ListDict[currentUrl] === undefined) {
      ListDict[currentUrl] = timeDifference/1000; //initialization
    } else {
      ListDict[currentUrl] += timeDifference/1000; // adding
    }
  chrome.storage.local.set({data:ListDict}, () => {});
  chrome.tabs.sendMessage(currentTabId,"Hello");
  console.log(ListDict);
}
  startTime(url);
}
