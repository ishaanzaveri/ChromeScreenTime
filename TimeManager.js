var visited = [];
var visitedParsed = [];
chrome.tabs.onUpdated.addListener((tabId, changeDetails, tab) => {
  console.log(tab);
  visited.push(tab.url);
  console.log(visited);

  for (var i = 0; i < visited.length; i++) {
    var editedUrl = visited[i].split("/");
    visitedParsed.push(editedUrl[2]);
  }
  console.log(visitedParsed);
});

chrome.tabs.onActivated.addListener(() => {
// query the active tab
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, activeTab => {
    // details of the tab
    console.log(activeTab);
  });
});

chrome.windows.onFocusChanged.addListener(window => {
  console.log(window);
});
