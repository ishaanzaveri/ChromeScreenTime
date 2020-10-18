var visited = [];
chrome.tabs.onUpdated.addListener((tabID, changeDetails, tab) =>
{
  console.log(tab);
  visited.push(tab.url);
  console.log(visited);
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
})
