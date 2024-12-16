function calculateTip(event) {
    event.preventDefault();
    const billAmount = event.target.form.billAmount.value;
    const tipPercentage = event.target.form.tipPercentage.value;

    if (!billAmount || billAmount <= 0 || !tipPercentage || tipPercentage <= 0) {
        alert("Please enter valid values.");
        return;
    }

    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = parseFloat(billAmount) + tipAmount;

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        Tip: $${tipAmount.toFixed(2)}<br>
        Total Amount: $${totalAmount.toFixed(2)}
    `;
}