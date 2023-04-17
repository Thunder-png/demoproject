const investmentInput = document.getElementById('investment');
const durationInput = document.getElementById('duration');
const interestRate = document.getElementById('interestRate');
const interestGain = document.getElementById('interestGain');
const investmentValue = document.getElementById('investmentValue');
const durationValue = document.getElementById('durationValue');

const investmentOptions = [25000, 50000, 75000, 100000];
const interestRates = [3.6, 4.1, 4.8, 5.2];

function updateValues() {
    const investmentIndex = investmentInput.value;
    const investment = investmentOptions[investmentIndex];
    investmentValue.innerText = investment + " Eur";

    const duration = durationInput.value;
    durationValue.innerText = duration + " ay";

    const rate = interestRates[investmentIndex];
    interestRate.value = rate + " %";

    const gain = (investment * rate / 100) * (duration / 12);
    interestGain.value = gain.toFixed(2) + " Eur";
}
investmentInput.addEventListener('input', updateValues);
durationInput.addEventListener('input', updateValues);

// İlk yüklemede değerleri güncelle
updateValues();


