var realInput = document.getElementById("real");
var dolarInput = document.getElementById("dolar");
var euroInput = document.getElementById("euro");
var bitcoinInput = document.getElementById("bitcoin");

var inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];

  input.addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);

    switch (e.target.name) {
      case "real":
        dolarInput.value = (value / 5.21).toFixed(2);
        euroInput.value = (value / 6.25).toFixed(2);
        bitcoinInput.value = value / 243258.96;
        break;
      case "dolar":
        realInput.value = (value / 0.19).toFixed(2);
        euroInput.value = (value / 0.85).toFixed(2);
        bitcoinInput.value = value / 46363.3;
        break;
      case "euro":
        realInput.value = (value / 0.16).toFixed(2);
        dolarInput.value = (value / 1.18).toFixed(2);
        bitcoinInput.value = value / 39249.34;

        break;
      case "bitcoin":
        realInput.value = (value / 0.0000041).toFixed(2);
        dolarInput.value = (value / 0.000022).toFixed(2);
        euroInput.value = (value / 0.000025).toFixed(2);
        break;
    }
  });
}
