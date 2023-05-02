const dash = (ctx1, value) => {
    console.log(ctx1);
    return [6, 0];
};
const config = {
    type: 'line',
    data: {
        datasets: [{
            label: "Alongshore Winds",
            borderColor: '#ADD8E6',
            borderWidth: 3,
            radius: 0,
            data: data,
        }]
    },
    segment: {
        borderDash: ctx1 => dash(ctx1, [6, 6]) || [6, 0]
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
                type: 'linear',
                title: {
                    display: true,
                    text: "water depth: h (m)"
                }
            },
            y: {
                type: 'linear',
                title: {
                    display: true,
                    text: "cross-shore exchange velocity uex (m/s)"
                }
            }
        }
    }
};

const ctx1 = document.getElementById('chart1').getContext('2d');
//const ctx2 = document.getElementById('chart2').getContext('2d');

const chart1 = new Chart(ctx1, config);
//const chart2 = new Chart(ctx2, config);