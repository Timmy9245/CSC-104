function calculateCompoundInterest() {
  const principal = parseFloat(document.getElementById('principal').value);
  const rate = parseFloat(document.getElementById('rate').value) / 100;
  const timesCompounded = parseInt(document.getElementById('timesCompounded').value);
  const years = parseInt(document.getElementById('years').value);

  const amount = principal * Math.pow((1 + rate / timesCompounded), timesCompounded * years);
  const interest = amount - principal;

  document.getElementById('result').innerText = `Compound Interest: $${interest.toFixed(2)}, Total Amount: $${amount.toFixed(2)}`;
}
