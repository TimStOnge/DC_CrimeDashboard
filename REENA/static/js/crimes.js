d3.json("/charts_data").then((response)=>{
  var one_dict={Ward:1,crime_count:[0,0,0,0,0,0,0,0,0,0,0,0]}
  var two_dict={Ward:2,crime_count:[0,0,0,0,0,0,0,0,0,0,0,0]}
  var three_dict={Ward:3,crime_count:[0,0,0,0,0,0,0,0,0,0,0,0]}
  var four_dict={Ward:4,crime_count:[0,0,0,0,0,0,0,0,0,0,0,0]}
  var five_dict={Ward:5,crime_count:[0,0,0,0,0,0,0,0,0,0,0,0]}
  var six_dict={Ward:6,crime_count:[0,0,0,0,0,0,0,0,0,0,0,0]}
  var seven_dict={Ward:7,crime_count:[0,0,0,0,0,0,0,0,0,0,0,0]}
  var eight_dict={Ward:8,crime_count:[0,0,0,0,0,0,0,0,0,0,0,0]}
  var nine_dict={Ward:9,crime_count:[0,0,0,0,0,0,0,0,0,0,0,0]}
  var ten_dict={Ward:10,crime_count:[0,0,0,0,0,0,0,0,0,0,0,0]}
  var eleven_dict={Ward:11,crime_count:[0,0,0,0,0,0,0,0,0,0,0,0]}
  var tweleve_dict={Ward:12,crime_count:[0,0,0,0,0,0,0,0,0,0,0,0]}
  
     response.forEach((crime)=>{
      //JANUARY
      if (crime.END_DATE.slice(6,7)==="01"){
          if (crime.WARD===1){
              one_dict.crime_count[0]+=1;
          }
          if (crime.WARD===2){
           two_dict.crime_count[0]+=1;
           }
           if (crime.WARD===3){
               three_dict.crime_count[0]+=1;
           }
           if (crime.WARD===4){
               four_dict.crime_count[0]+=1;
           }
           if (crime.WARD===5){
               five_dict.crime_count[0]+=1;
           }
           if (crime.WARD===6){
               six_dict.crime_count[0]+=1;
           }
           if (crime.WARD===7){
               seven_dict.crime_count[0]+=1;
           }
           if (crime.WARD===8){
               eight_dict.crime_count[0]+=1;
           }
          }
       //FEBRUARY
       if (crime.END_DATE.slice(6,7)==="02"){
          if (crime.WARD===1){
              one_dict.crime_count[1]+=1;
           }
          if (crime.WARD===2){
           two_dict.crime_count[1]+=1;
           }
           if (crime.WARD===3){
               three_dict.crime_count[1]+=1;
           }
           if (crime.WARD===4){
               four_dict.crime_count[1]+=1;
           }
           if (crime.WARD===5){
               five_dict.crime_count[1]+=1;
           }
           if (crime.WARD===6){
               six_dict.crime_count[1]+=1;
           }
           if (crime.WARD===7){
               seven_dict.crime_count[1]+=1;
           }
           if (crime.WARD===8){
               eight_dict.crime_count[1]+=1;
           }
          }
       //MARCH
       if (crime.END_DATE.slice(6,7)==="03"){
               if (crime.WARD===1){
                   one_dict.crime_count[2]+=1;
               }
               if (crime.WARD===2){
                two_dict.crime_count[2]+=1;
                }
                if (crime.WARD===3){
                    three_dict.crime_count[2]+=1;
                }
                if (crime.WARD===4){
                    four_dict.crime_count[2]+=1;
                }
                if (crime.WARD===5){
                    five_dict.crime_count[2]+=1;
                }
                if (crime.WARD===6){
                    six_dict.crime_count[2]+=1;
                }
                if (crime.WARD===7){
                    seven_dict.crime_count[2]+=1;
                }
                if (crime.WARD===8){
                    eight_dict.crime_count[2]+=1;
                }
              }
       //APRIL
       if (crime.END_DATE.slice(6,7)==="04"){
               if (crime.WARD===1){
                   one_dict.crime_count[3]+=1;
               }
               if (crime.WARD===2){
                two_dict.crime_count[3]+=1;
                }
                if (crime.WARD===3){
                    three_dict.crime_count[3]+=1;
                }
                if (crime.WARD===4){
                    four_dict.crime_count[3]+=1;
                }
                if (crime.WARD===5){
                    five_dict.crime_count[3]+=1;
                }
                if (crime.WARD===6){
                    six_dict.crime_count[3]+=1;
                }
                if (crime.WARD===7){
                    seven_dict.crime_count[3]+=1;
                }
                if (crime.WARD===8){
                    eight_dict.crime_count[3]+=1;
                }
              }
       //MAY
       if (crime.END_DATE.slice(6,7)==="05"){
           if (crime.WARD===1){
               one_dict.crime_count[4]+=1;
           }
            if (crime.WARD===2){
            two_dict.crime_count[4]+=1;
            }
            if (crime.WARD===3){
                three_dict.crime_count[4]+=1;
            }
            if (crime.WARD===4){
                four_dict.crime_count[4]+=1;
            }
            if (crime.WARD===5){
                five_dict.crime_count[4]+=1;
            }
            if (crime.WARD===6){
                six_dict.crime_count[4]+=1;
            }
            if (crime.WARD===7){
                seven_dict.crime_count[4]+=1;
            }
            if (crime.WARD===8){
                eight_dict.crime_count[4]+=1;
            }
          }
    //JUNE
    if (crime.END_DATE.slice(6,7)==="06"){
       if (crime.WARD===1){
           one_dict.crime_count[5]+=1;
       }
        if (crime.WARD===2){
        two_dict.crime_count[5]+=1;
        }
        if (crime.WARD===3){
            three_dict.crime_count[5]+=1;
        }
        if (crime.WARD===4){
            four_dict.crime_count[5]+=1;
        }
        if (crime.WARD===5){
            five_dict.crime_count[5]+=1;
        }
        if (crime.WARD===6){
            six_dict.crime_count[5]+=1;
        }
        if (crime.WARD===7){
            seven_dict.crime_count[5]+=1;
        }
        if (crime.WARD===8){
            eight_dict.crime_count[5]+=1;
        }
      }
   //JULY
   if (crime.END_DATE.slice(6,7)==="07"){
       if (crime.WARD===1){
       one_dict.crime_count[6]+=1;
       }
       if (crime.WARD===2){
       two_dict.crime_count[6]+=1;
       }
       if (crime.WARD===3){
        three_dict.crime_count[6]+=1;
       }
       if (crime.WARD===4){
        four_dict.crime_count[6]+=1;
       }
       if (crime.WARD===5){
        five_dict.crime_count[6]+=1;
       }
       if (crime.WARD===6){
        six_dict.crime_count[6]+=1;
       }
       if (crime.WARD===7){
        seven_dict.crime_count[6]+=1;
       }
       if (crime.WARD===8){
        eight_dict.crime_count[6]+=1;
    }
  }
   //AUGUST
   if (crime.END_DATE.slice(6,7)==="08"){
       if (crime.WARD===1){
           one_dict.crime_count[7]+=1;
       }
       if (crime.WARD===2){
       two_dict.crime_count[7]+=1;
       }
       if (crime.WARD===3){
           three_dict.crime_count[7]+=1;
       }
       if (crime.WARD===4){
           four_dict.crime_count[7]+=1;
       }
       if (crime.WARD===5){
           five_dict.crime_count[7]+=1;
       }
       if (crime.WARD===6){
           six_dict.crime_count[7]+=1;
       }
       if (crime.WARD===7){
           seven_dict.crime_count[7]+=1;
       }
       if (crime.WARD===8){
           eight_dict.crime_count[7]+=1;
    }
  }
//SEPTEMBER
if (crime.END_DATE.slice(6,7)==="09"){
   if (crime.WARD===1){
       one_dict.crime_count[8]+=1;
   }
    if (crime.WARD===2){
    two_dict.crime_count[8]+=1;
    }
    if (crime.WARD===3){
        three_dict.crime_count[8]+=1;
    }
    if (crime.WARD===4){
        four_dict.crime_count[8]+=1;
    }
    if (crime.WARD===5){
        five_dict.crime_count[8]+=1;
    }
    if (crime.WARD===6){
        six_dict.crime_count[8]+=1;
    }
    if (crime.WARD===7){
        seven_dict.crime_count[8]+=1;
    }
    if (crime.WARD===8){
        eight_dict.crime_count[8]+=1;
   }
  }

//OCTOBER
if (crime.END_DATE.slice(6,7)==="10"){
   if (crime.WARD===1){
       one_dict.crime_count[9]+=1;
   }
    if (crime.WARD===2){
    two_dict.crime_count[9]+=1;
    }
    if (crime.WARD===3){
        three_dict.crime_count[9]+=1;
    }
    if (crime.WARD===4){
        four_dict.crime_count[9]+=1;
    }
    if (crime.WARD===5){
        five_dict.crime_count[9]+=1;
    }
    if (crime.WARD===6){
        six_dict.crime_count[9]+=1;
    }
    if (crime.WARD===7){
        seven_dict.crime_count[9]+=1;
    }
    if (crime.WARD===8){
        eight_dict.crime_count[9]+=1;
   }
  }
//NOVEMBER
if (crime.END_DATE.slice(6,7)==="11"){
   if (crime.WARD===1){
       one_dict.crime_count[10]+=1;
   }
    if (crime.WARD===2){
    two_dict.crime_count[10]+=1;
    }
    if (crime.WARD===3){
        three_dict.crime_count[10]+=1;
    }
    if (crime.WARD===4){
        four_dict.crime_count[10]+=1;
    }
    if (crime.WARD===5){
        five_dict.crime_count[10]+=1;
    }
    if (crime.WARD===6){
        six_dict.crime_count[10]+=1;
    }
    if (crime.WARD===7){
        seven_dict.crime_count[10]+=1;
    }
    if (crime.WARD===8){
        eight_dict.crime_count[10]+=1;
    }
  }
//DECEMBER
if (crime.END_DATE.slice(6,7)==="12"){
   if (crime.WARD===1){
       one_dict.crime_count[11]+=1;
   }
    if (crime.WARD===2){
    two_dict.crime_count[11]+=1;
    }
    if (crime.WARD===3){
        three_dict.crime_count[11]+=1;
    }
    if (crime.WARD===4){
        four_dict.crime_count[11]+=1;
    }
    if (crime.WARD===5){
        five_dict.crime_count[11]+=1;
    }
    if (crime.WARD===6){
        six_dict.crime_count[11]+=1;
    }
    if (crime.WARD===7){
        seven_dict.crime_count[11]+=1;
    }
    if (crime.WARD===8){
        eight_dict.crime_count[11]+=1;
    }
    }
  }


var canvas = document.getElementById("barChart");
var ctx = canvas.getContext('2d');

// Global Options:
Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontSize = 16;
var data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [{
      label: "Ward 1",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "red",
      borderColor: "red", // The main line color
      borderCapStyle: 'square',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "black",
      pointBackgroundColor: "white",
      pointBorderWidth: 1,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: "yellow",
      pointHoverBorderColor: "brown",
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      // notice the gap in the data and the spanGaps: true
      data: [65, 59, 80, 81, 56, 55, 99, ,60,55,30,78],
      spanGaps: true,
    }, {
      label: "Ward 2",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "Fuchsia",
      borderColor: "Fuchsia", // The main line color
      borderCapStyle: 'square',
      borderDash: [], // try [5, 15] for instance
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "black",
      pointBackgroundColor: "white",
      pointBorderWidth: 1,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: "yellow",
      pointHoverBorderColor: "brown",
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      // notice the gap in the data and the spanGaps: true
      data: [21, 11, 3, 18, 50, 75, 44, 22,64,55,32,38],
      spanGaps: true,
    },{label: "Ward 3",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "Navy",
      borderColor: "Navy", // The main line color
      borderCapStyle: 'square',
      borderDash: [], // try [5, 15] for instance
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "black",
      pointBackgroundColor: "white",
      pointBorderWidth: 1,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: "yellow",
      pointHoverBorderColor: "brown",
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      // notice the gap in the data and the spanGaps: true
      data: [60, 50, 70, 80, 51, 35, 90,33,20,75,37,58],
      spanGaps: true,
    }, {label: "Ward 4",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "Aqua",
      borderColor: "Aqua", // The main line color
      borderCapStyle: 'square',
      borderDash: [], // try [5, 15] for instance
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "black",
      pointBackgroundColor: "white",
      pointBorderWidth: 1,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: "yellow",
      pointHoverBorderColor: "brown",
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      // notice the gap in the data and the spanGaps: true
      data: [88, 35, 82, 80, 5, 10, 48,52 ,70,45,25,48],
      spanGaps: true,
    }, {label: "Ward 5",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "Orange",
      borderColor: "Orange", // The main line color
      borderCapStyle: 'square',
      borderDash: [], // try [5, 15] for instance
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "black",
      pointBackgroundColor: "white",
      pointBorderWidth: 1,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: "yellow",
      pointHoverBorderColor: "brown",
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      // notice the gap in the data and the spanGaps: true
      data: [55, 9, 82, 33, 77, 58, 44, 22,67,57,40,68],
      spanGaps: true,
    }, {label: "Ward 6",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "Green",
      borderColor: "Green", // The main line color
      borderCapStyle: 'square',
      borderDash: [], // try [5, 15] for instance
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "black",
      pointBackgroundColor: "white",
      pointBorderWidth: 1,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: "yellow",
      pointHoverBorderColor: "brown",
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      // notice the gap in the data and the spanGaps: true
      data: [5, 15, 30, 60, 44, 23, 66, 76,30,95,70,72],
      spanGaps: true,
    }, {label: "Ward 7",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "Purple",
      borderColor: "Purple", // The main line color
      borderCapStyle: 'square',
      borderDash: [], // try [5, 15] for instance
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "black",
      pointBackgroundColor: "white",
      pointBorderWidth: 1,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: "yellow",
      pointHoverBorderColor: "brown",
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      // notice the gap in the data and the spanGaps: true
      data: [60, 51, 85, 21, 86, 75, 80,22,10,75,47,88],
      spanGaps: true,
    }, {label: "Ward 8",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "Blue",
      borderColor: "Blue", // The main line color
      borderCapStyle: 'square',
      borderDash: [], // try [5, 15] for instance
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "black",
      pointBackgroundColor: "white",
      pointBorderWidth: 1,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: "yellow",
      pointHoverBorderColor: "brown",
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      // notice the gap in the data and the spanGaps: true
      data: [25, 39, 50, 41, 66, 75, 20,50,70,35,20,68],
      spanGaps: true,
    }, 


  ]
}
});

// Notice the scaleLabel at the same level as Ticks
var options = {
  scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                },
                scaleLabel: {
                     display: true,
                     labelString: 'DC Crimes',
                     fontSize: 20 
                  }
            }]            
        }  
};

// Chart declaration
var myBarChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options
});