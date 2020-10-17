Chrome.tabs.onUpdated.addListener((tabID, changeDetails, tab) =>
{
  console.log(tab);
});
