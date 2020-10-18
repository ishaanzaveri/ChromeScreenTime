var visited = [];
var visitedParsed = [];
let counter = 0;
chrome.tabs.onUpdated.addListener((tabId, changeDetails, tab) => {
  //console.log(tab);
  // visited = [];
  console.log("Before");
  //console.log(tab.status);
  if (tab.status === "complete"){
    visited.push(tab.url);
    var editedUrl = visited[counter].split("/");
    visitedParsed.push(editedUrl[2]);
    console.log(visitedParsed);
    counter++;
  }
  console.log("After");
  

  // console.log(visitedParsed);
  // counter++;
  // console.log("counter : " + counter);
  //console.log(visited);

  // for (var i = 0; i < visited.length; i++) {
  //   var editedUrl = visited[i].split("/");
  //   visitedParsed.push(editedUrl[2]);
  // }
  // console.log(visitedParsed);
});

// chrome.tabs.onActivated.addListener(() => {
// // query the active tab
//   chrome.tabs.query({
//     active: true,
//     currentWindow: true
//   }, activeTab => {
//     // details of the tab
//     console.log(activeTab);
//   });
// });

chrome.windows.onFocusChanged.addListener(window => {
  console.log(window);
  // if(window == 1) {
  //   var editedUrl = visited[0].split("/");
  //   visitedParsed.push(editedUrl[2]);
  //   console.log("run")
  // }
  //for (var i = 0; i < visited.length; i++) {
  
    //console.log("inside for loop: ");
  //}
  //visited = [];
});

// for (var i = 0; i < visited.length; i++) {
//   var editedUrl = visited[i].split("/");
//   visitedParsed.push(editedUrl[2]);
// }
// console.log(visitedParsed);