        const ctx1 = document.getElementById('chart1').getContext('2d');
		const ctx2 = document.getElementById('chart2').getContext('2d');

		const config = {
			type: 'line',
			data: {
				datasets: [{
					label: "Ax^3 + Bx^2 + Cx",
					borderColor: 'red',
					borderWidth: 1,
					radius: 0,
					data: data,
				},
				{
					label: "Ax^2 + Bx + C",
					borderColor: 'green',
					borderWidth: 1,
					radius: 0,
					data: data2,
				},
				{
					label: "Dcos(Ex)",
					borderColor: 'blue',
					borderWidth: 1,
					radius: 0,
					data: data3,
				},
				{
					label: "(Dcos(Ex))^3",
					borderColor: 'black',
					borderWidth: 1,
					radius: 0,
					data: data4,
				}]
			},
			options: {
				interaction: {
					intersect: false
				},
				plugins: {
					legend: {
						labels: {
							font: {
								size: 14
							}
						}
					}
				},
				scales: {
					x: {
						type: 'linear'
					}
				}
			}
		};

		const chart1 = new Chart(ctx1, config);
		const chart2 = new Chart(ctx2, config);

		function genValues() {
			const x = parseFloat(document.getElementById("xval").value);

			if (!Number.isNaN(x)) {
				//Pass X through functions to get Y vals
				alert("You clicked the button.")
			} else {
				alert("X value must be a valid number!");
			}
		}

		function updateChart() {
			//we can manipulate data here!
			const p1 = parseFloat(document.getElementById("param1").value);
			const p2 = parseFloat(document.getElementById("param2").value);
			const p3 = parseFloat(document.getElementById("param3").value);
			const p4 = parseFloat(document.getElementById("param4").value);
			const p5 = parseFloat(document.getElementById("param5").value);

			if (!Number.isNaN(p1) && !Number.isNaN(p2) && !Number.isNaN(p3)
				&& !Number.isNaN(p4) && !Number.isNaN(p5)) {

				data.splice(0, data.length);
				data2.splice(0, data2.length);
				data3.splice(0, data3.length);
				data4.splice(0, data4.length);

				//push on data for equations with new parameters
				for (let x = 0; x <= 100; x++) {
					//later on, we should make the equations be calculated with function calls:
					data.push([x, p1 * x * x * x + p2 * x * x + p3 * x]); //ex. "p1*x*x*x + p2*x*x + p3*x" should be f1(x)
					data2.push([x, p1 * x * x + p2 * x + p3]);
					data3.push([x, p4 * Math.cos(p5 * x)]);
					data4.push([x, Math.pow(p4 * Math.cos(p5 * x), 3)]);
				}

				myChart.update();
			} else {
				alert("All parameter fields must be filled with a valid number.");
			}
		}   
