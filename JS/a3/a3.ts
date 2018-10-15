function printReverse (ar) {
  for (var i = ar.length - 1; i >=0; i--) {
    console.log(ar[i]);
  }
}

 function isUniform(ar) {
  var first = ar[0];
  var result = true;
  ar.forEach(function (a) {
    if (a !== first) {
      result = false;
    }
  });
  return result;
}

function sumArray(ar) {
  var result  = 0;
  for (var i = 0; i < ar.length; i++) {
    result += ar[i];
  }
  return result;
}

function max(ar) {
  var maxone = ar[0];
  var i = 0;
  while (i < ar.length) {
    if (maxone < ar[i]) {
      maxone = ar[i];
    }
    i++;
  }
   return maxone;
}
