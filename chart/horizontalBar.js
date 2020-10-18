var ListDict;

function updateGraph () {
	chrome.storage.local.get("data", (data) => {
		if (data.data !== undefined) {
		  ListDict = data.data;
		}
	  
	  var webNames = [];
	  var webTimes = [];
	  if(ListDict !== undefined){
		for (var key in ListDict) {
			webNames.push(key);
			webTimes.push(ListDict[key]);
		}
	  let ctx = document.getElementById('myChart').getContext('2d');
				  let chart = new Chart(ctx, {
					  type: 'horizontalBar',
					  data: {
						  labels: webNames,
						  datasets: [
							  {
								  label: 'My First dataset',
								  backgroundColor: 'rgb(255, 99, 132)',
								  borderColor: 'rgb(255, 99, 132)',
								  data: webTimes,
							  },
						  ],
					  },
				  });
	  } else {
		  console.log("No data")
	  }
	  console.log(ListDict);
	});	  
}
updateGraph();
setInterval(updateGraph,5000);
