function countToTen() {
  for (let i = 1; i <= 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 3000); // delay grows each loop (1s, 2s, ... 10s)
  }
}

countToTen();
