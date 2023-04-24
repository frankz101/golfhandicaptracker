//these are the three things that will be changed by js
const scoreInput = document.getElementById("score");
const scoreList = document.getElementById("score-list");
const handicap = document.getElementById("handicap");
let scores = []; //array that holds the scores

function addScore() {
  const newScore = parseInt(scoreInput.value);

  if (!isNaN(newScore) && scores.length < 10) {
    scores.push(newScore);
    updateScoreList();
    updateHandicap();
  }
  scoreInput.value = ""; //resets the input form
}

function updateScoreList() {
  scoreList.innerHTML = ""; //resets the list
  scores.forEach((score, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Round ${index + 1}: ${score}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", () => {
      scores.splice(index, 1);
      updateScoreList();
      updateHandicap();
    });
    listItem.appendChild(deleteButton);
    scoreList.appendChild(listItem);
  });
}

function updateHandicap() {
  if (scores.length > 0) {
    const sum = scores.reduce((a, b) => a + b);
    const average = sum / scores.length;
    handicap.textContent = `${average.toFixed(2)}`;
  } else {
    handicap.textContent = "Enter at least 1 score to calculate the average.";
  }
}
