document.getElementById('converterForm').onsubmit = function(event) {
    event.preventDefault();

    var celsius = parseFloat(document.getElementById('celsius').value);
    var fahrenheit = (celsius * 9/5) + 32;

    document.getElementById('result').innerText = celsius + " Celsius is equal to " + fahrenheit.toFixed(2) + " Fahrenheit.";
};
