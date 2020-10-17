chrome.tabs.onUpdated.addListener((tabId, changeDetails, tab) => {
  console.log(tab);
});