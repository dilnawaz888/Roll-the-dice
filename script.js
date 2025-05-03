function rollDice() {
  const diceType = parseInt(document.getElementById("diceType").value);
  const diceCount = parseInt(document.getElementById("diceCount").value);
  const resultsDiv = document.getElementById("results");
  const totalDiv = document.getElementById("total");

  let results = [];
  let total = 0;

  for (let i = 0; i < diceCount; i++) {
    const roll = Math.floor(Math.random() * diceType) + 1;
    results.push(roll);
    total += roll;
  }

  resultsDiv.textContent = results.join(", ");
  totalDiv.textContent = `Total: ${total}`;
}

function clearDice() {
  document.getElementById("results").textContent = "";
  document.getElementById("total").textContent = "";
}
