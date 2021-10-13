import '../../components/comfort/comfort'

import './_room.scss'

import Chart from 'chart.js/dist/chart';

let ctx = document.getElementById('myChart').getContext('2d');

const gradientYellow = ctx.createLinearGradient(0, 0, 0, 400);
gradientYellow.addColorStop(0, 'rgba(255, 227, 156, 1)');
gradientYellow.addColorStop(1, 'rgba(255, 186, 156, 1)');

const gradientPurple = ctx.createLinearGradient(0, 0, 0, 400);
gradientPurple.addColorStop(0, 'rgba(188, 156, 255, 1)');
gradientPurple.addColorStop(1, 'rgba(139, 164, 249, 1)');

const gradientGreen = ctx.createLinearGradient(0, 0, 0, 400);
gradientGreen.addColorStop(0, 'rgba(111, 207, 151, 1)');
gradientGreen.addColorStop(1, 'rgba(102, 210, 234, 1)');

const data = {
    labels: [
        'Удовлетворительно',
        'Хорошо',
        'Великолепно'
    ],
    datasets: [{
        label: 'Впечатления от номера',
        data: [25, 25, 50],
        backgroundColor: [
            gradientPurple,
            gradientGreen,
            gradientYellow
        ],
        hoverOffset: 0,
        hoverBorderColor: '#fff',
        cutout: 54,
    }]
};

let myChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
        plugins: {
            tooltip: {
                enabled: false
            },
            hover: {
            },
            legend: {
                display: false
            },
        },

    }
});

