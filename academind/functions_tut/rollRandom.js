function rollThree() {
  var n = Math.random();
  n = Math.floor(n * 3) + 1;
  return n;
}

for (i = 0; i < 10; i++) {
  console.log(`#${i}: `, rollThree());
}
