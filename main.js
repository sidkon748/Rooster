function calculateTip(event) {
    event.preventDefault();
    const form = event.target;
    const billAmount = form.billAmount.value;
    const tipPercentage = form.tipPercentage.value;

    if (billAmount <= 0 || tipPercentage <= 0) {
        alert("Please enter valid values.");
        return;
    }

    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = Number(billAmount) + tipAmount;

    form.querySelector("#result").innerHTML = `
        Tip: $${tipAmount.toFixed(2)}<br>
        Total: $${totalAmount.toFixed(2)}
    `;
}

document.querySelector("#calculatorForm").addEventListener("submit", calculateTip);