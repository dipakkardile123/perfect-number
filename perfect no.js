for (var a = 2; a <= 10000; a++) {
    var total = 1;
    var b = 2;
    while (b < a) {
    if (a % b == 0) {
      total = total + b;
    }
    b++;
  }
  if (total == a) {
    console.log(a, "is perfect number");
  } else {
   // console.log(a, "is not perfect number");
  }
}
