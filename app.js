const questions = [
  {
    question: "Quelle est la dérivée de f(x) = x² ?",
    choices: ["2x", "x", "x²", "2"],
    answer: 0
  },
  {
    question: "Quelle est la dérivée de f(x) = sin(x) ?",
    choices: ["cos(x)", "-cos(x)", "-sin(x)", "x*cos(x)"],
    answer: 0
  },
  // Tu peux ajouter ici d'autres questions
];

function renderQCM() {
  const container = document.getElementById("qcm-container");
  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question-block";
    div.innerHTML = `
      <p><strong>Q${index + 1}.</strong> ${q.question}</p>
      ${q.choices
        .map((choice, i) => `
          <label>
            <input type="radio" name="q${index}" value="${i}" /> ${choice}
          </label><br />`)
        .join("")}
      <p class="result" id="result-${index}"></p>
    `;
    container.appendChild(div);
  });

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Corriger";
  submitBtn.onclick = checkAnswers;
  container.appendChild(submitBtn);
}

function checkAnswers() {
  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name='q${index}']:checked`);
    const result = document.getElementById(`result-${index}`);
    if (!selected) {
      result.textContent = "Choix non sélectionné.";
      result.style.color = "gray";
      return;
    }
    if (parseInt(selected.value) === q.answer) {
      result.textContent = "Bonne réponse !";
      result.style.color = "green";
    } else {
      result.textContent = "Mauvaise réponse.";
      result.style.color = "red";
    }
  });
}

document.addEventListener("DOMContentLoaded", renderQCM);
