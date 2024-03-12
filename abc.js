function changeText() {
    var nameArray = [
      "BMW",
      "TOYOTA",
      "LAMBORGHINI",
      "BAENTLEY",
      "VOLKSWAGEN",
    ];
    var number = getRandomNumberBetween(0, nameArray.length - 1);
    console.log("Index: ", number);
    document.getElementById("heading").innerHTML = nameArray[number];
  }
  
  function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }