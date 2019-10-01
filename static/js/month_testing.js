var one_dict = { Ward: 1, crime_count: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
var two_dict = { Ward: 2, crime_count: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
var three_dict = { Ward: 3, crime_count: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
var four_dict = { Ward: 4, crime_count: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
var five_dict = { Ward: 5, crime_count: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
var six_dict = { Ward: 6, crime_count: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
var seven_dict = { Ward: 7, crime_count: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
var eight_dict = { Ward: 8, crime_count: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }


for (i = 0; i < 100; i++) { 
    one_dict.crime_count[i] += 1;
    two_dict.crime_count[i] += 2;
    three_dict.crime_count[i] += 3;
  }

  console.log(one_dict.crime_count)
  console.log(two_dict.crime_count)
  console.log(three_dict.crime_count)