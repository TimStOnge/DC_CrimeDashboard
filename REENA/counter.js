d3.json(charts_data).then((response)=>{
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
}