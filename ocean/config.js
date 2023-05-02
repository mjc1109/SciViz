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

const ctx1 = document.getElementById('chart1').getContext('2d');
//const ctx2 = document.getElementById('chart2').getContext('2d');

const chart1 = new Chart(ctx1, config);
//const chart2 = new Chart(ctx2, config);
