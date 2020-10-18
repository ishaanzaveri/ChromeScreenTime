var ListDict;

chrome.storage.local.get(["data"], (data) => {
	if (data !== undefined) {
	  ListDict = data;
	}
  });
  var webNames;
  var webTimes;
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