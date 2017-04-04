const CHART = document.getElementById("LineChart");
console.log(CHART);
let lineChart = new Chart(CHART,{
    type:'line',
    data:{
    labels: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "НД"],
    datasets: [
        {
            label: "Количество денег, поступившее в указаний период времени",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [10, 20, 40, 42, 43, 40, 50],
            spanGaps: false,
        }
    ]
    }
});
//основной граивк


var ctx = document.getElementById("Chart1");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "НД"],
        datasets: [{
            label: 'Количество платижей',
            data: [1, 2, 4, 5, 3, 3,3],
            backgroundColor: [
                'rgba(255, 255, 255, 0.2)',
                
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var ctx = document.getElementById("Chart2");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "НД"],
        datasets: [{
            label: 'Возврати',
            data: [1, 2, 3, 5, 4, 3,3],
            backgroundColor: [
            'rgba(255, 255, 255, 0.2)',
            ],
            borderColor: [
                "rgb(198, 192, 57)",
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var ctx = document.getElementById("Chart3");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "НД"],
        datasets: [{
            label: 'Ручние платежи',
            data: [1, 2, 3, 2, 2, 1,1],
            backgroundColor: [
               'rgba(255, 255, 255, 0.2)',
            ],
            borderColor: [
              "rgb(57, 95, 198)",
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
//секция с 3 графиками

