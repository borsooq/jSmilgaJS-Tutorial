function showScore(name, score) {
  console.log(`hello ${name}, your score is ${score}`);
}

const firstId = setInterval(showScore, 500, "kamil", 5);
const secondId = setInterval(showScore, 4000, "susy", 45);

clearInterval(firstId);
