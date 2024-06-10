const exchangeRate = 460; // Example exchange rate, you can update it to the current rate

        function convertToNaira() {
            const usdAmount = parseFloat(document.getElementById('usdAmount').value);
            if (isNaN(usdAmount) || usdAmount <= 0) {
                document.getElementById('result').innerText = 'Please enter a valid amount in USD.';
                return;
            }

            const nairaAmount = usdAmount * exchangeRate;
            document.getElementById('result').innerText = `Amount in Naira: ₦${nairaAmount.toFixed(2)}`;
        }
