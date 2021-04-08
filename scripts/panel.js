const burger = document.querySelector(".burger");
const topbar = document.querySelector(".topbar");

burger.addEventListener('click', () => {
    topbar.classList.toggle("active");
})

// https://demos.creative-tim.com/vue-black-dashboard/documentation/components/plugin-chartjs.html

var ctx = document.getElementById('myChart').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'sans-serif';

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['0h', '1h', '2h', '3h', '4h', '5h', '6h', '7h','8h', '9h', '10h', '11h', '12h', '13h', '14h', '15','16h', '17h', '18h', '19h', '20h', '21h', '22h', '23h',],
        datasets: [{
            label: 'Température',
            borderColor: 'rgba(84, 69, 255, 1)',
            borderWidth: 3,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: '#ff8a76',
            // pointBorderColor: 'green',
            pointHoverBackgroundColor: '#d048b6',
            pointBorderWidth: 1,
            pointHoverRadius: 2,
            pointHoverBorderWidth: 15,
            pointRadius: 5,
            // backgroundColor: 'rgba(224, 133, 13, 0.5)',
            data: [30, 32, 31, 30, 29, 28, 30, 30 ,27, 31, 30, 30, 25, 27, 28, 30,30, 29, 30, 30,30, 30, 30,30],
        }],
        
        responsive: true,
        maintainAspectRatio: false
    },

    // Configuration options go here
    options: {

        legend: {
            display: false,
            labels: {
                fontColor: 'rgba(29,140,248,1)',
                fontSize: 20,
            }
         },
        tooltips: {
            backgroundColor: '#f5f5f5',
            titleFontColor: '#333',
            bodyFontColor: '#666',
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
          },
        responsive: true,

        scales: {    
            
        xAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Temps en heure',
                padding: 20,
                fontColor: "rgba(29,140,248,1)",
                fontSize: 18,
            },
            gridLines: {
                drawBorder: false,
                color: 'rgba(29,140,248,0.2)',
              },
            ticks: {
                padding: 15,
                fontColor: "#ff8a76"
            }
        }],
        yAxes: [{
            scaleLabel: {
				display: true,
                labelString: 'Température en °C',
                padding: 20,
                fontColor: "rgba(29,140,248,1)",
                fontSize: 18,
            },
            gridLines: {
                drawBorder: false,
                color: 'rgba(29,140,248,0.2)',
              },
            ticks: {
                // beginAtZero:true     
                padding: 15,         
                suggestedMin: 20,
                suggestedMax: 40,
                fontColor: "#ff8a76"
            }
			
    }]},
    // plugins: {
    //     zoom: {
    //         // Container for pan options
    //         pan: {
    //             // Boolean to enable panning
    //             enabled: true,

    //             // Panning directions. Remove the appropriate direction to disable 
    //             // Eg. 'y' would only allow panning in the y direction
    //             mode: 'xy',

    //         },

    //         // Container for zoom options
    //         zoom: {
    //             // Boolean to enable zooming
    //             enabled: true,

    //             // Zooming directions. Remove the appropriate direction to disable 
    //             // Eg. 'y' would only allow zooming in the y direction
    //             mode: 'xy',
    //         }
    //     }
    // }
}
});

const button = document.querySelectorAll("button");
const infoP = document.querySelector(".infoP");

for (let i = 1; i < button.length; i++) {

    // On prend i = 1 pour ne pas avoir a gérer le boutton "Déconnexion" dans la "topbar"

    button[i].addEventListener('click', () => {
        infoP.innerHTML = button[i].innerHTML;
        switch (i) {
            case 1:
            sucStart();
            break;
            case 2:
            sucPause();
            break;
            case 3:
            sucStop();
            break;
            case 4:
            sucInfo();
            break;
        }
    })
}

const notyf = new Notyf();

const sucStart = () => {
    notyf.success({
        message: 'Le programme s\'est bien lancé',
        duration: 3000,
        ripple: true,
        icon: false,
        dismissible: true,
      })
}

const sucPause = () => {
    notyf.success({
        message: 'Le programme s\'est bien mis en pause',
        duration: 3000,
        ripple: true,
        icon: false,
        dismissible: true,
      })
}

const sucStop = () => {
    notyf.success({
        message: 'Le programme s\'est bien arrêté',
        duration: 3000,
        ripple: true,
        icon: false,
        dismissible: true,
      })
}

const sucInfo = () => {
    notyf.success({
        message: 'Le programme va envoyer les informations demandé',
        duration: 3000,
        ripple: true,
        icon: false,
        dismissible: true,
      })
}
