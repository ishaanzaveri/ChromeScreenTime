var visited = [];
var visitedParsed = [];
let counter = 0;
var ogList = []; 
chrome.tabs.onUpdated.addListener((tabId, changeDetails, tab) => {
  console.log("Before");
  if (tab.status === "complete"){
    visited.push(tab.url);
    var editedUrl = visited[counter].split("/");
    if (editedUrl[2] !== "newtab") {
      visitedParsed.push(editedUrl[2]);
      for (var i = 0; i < visitedParsed.length; i++) {
        ogList.push(editedUrl[2]);
        if (visitedParsed[i] !== ogList)
      }
    }
    console.log(visitedParsed);
    counter++;
  }
  console.log("After");
});


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