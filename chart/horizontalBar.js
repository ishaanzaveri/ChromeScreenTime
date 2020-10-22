var ListDict;

function updateGraph () {
	chrome.storage.local.get("data", (data) => {
		if (data.data !== undefined) {
		  ListDict = data.data;
		}

	  var webNames = [];
	  var webTimes = [];
	  var finalWebNames = [];
		var finalWebTimes = [];
	  if(ListDict !== undefined){
		webNames = Object.keys(ListDict);
		webTimes = Object.values(ListDict);
		webTimes.sort(function(a, b){return b - a});
		var counter = 0;
		for (var key in ListDict) {
			if (ListDict[key] === webTimes[counter]) {
				webNames[counter] = key;
			}
			counter = counter + 1;
		}
		
		for (i = 0; i < 5; i++){
			finalWebNames[i] = webNames[i];
			finalWebTimes[i] = webTimes[i] / 3600;
		}
	  let ctx = document.getElementById('myChart').getContext('2d');
				  let chart = new Chart(ctx, {
					  type: 'horizontalBar',
					  labels: [finalWebNames, 'hours'],
					  data: {
						  labels: finalWebNames,
						  datasets: [
							  {
								  label: 'Screen Time',
								  backgroundColor: 'rgb(19, 176, 233)',
								  borderColor: 'rgb(200, 200, 200)',
								  data: finalWebTimes
							  },
						  ],
					  },
				  });
				  ListDict = {};
	  } else {
		  console.log("No data")
	  }
	  console.log(ListDict);
	});
}
updateGraph();
setInterval(updateGraph,5000);
