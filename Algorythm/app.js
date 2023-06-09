var myArray = [0, 1, 98, 4, 3, 76, 8, 6,'Hello',{}];
var result = myArray[0];

function maxResult(data) {
  for (i = 0; i < data.length; i++) {
    if (data[i] > data[0]) {
      data[0] = data[i];
      console.log(data[0]);
    }
  }
}
maxResult(myArray);
//O(n) ispolzujetsja cykl for

