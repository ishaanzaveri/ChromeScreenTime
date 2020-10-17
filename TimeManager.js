chrome.tabs.onUpdated.addListener((tabID, changeDetails, tab) =>
{
  console.log(tab);
});
var visited = [];
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
const getActiveTab = () => {
  return new Promise(resolve => {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, activeTab => {
      resolve(activeTab[0]);
    });
  });
}
const activeTab = getActiveTab();
visited.push(activeTab);
console.log(visited);
chrome.windows.onFocusChanged.addListener(window => {
  console.log(window);
})
