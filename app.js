// app.js

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
  {
    question: "Quelle est la dérivée de f(x) = cos(x) ?",
    choices: ["-sin(x)", "sin(x)", "-cos(x)", "cos(x)"],
    answer: 0
  },
  {
    question: "Quelle est la dérivée de f(x) = ln(x) ?",
    choices: ["1/x", "x", "ln(x)", "x*ln(x)"],
    answer: 0
  },
  {
    question: "Quelle est la dérivée de f(x) = e^x ?",
    choices: ["e^x", "x*e^x", "ln(x)", "1/x"],
    answer: 0
  },
  {
    question: "Quelle est la dérivée de f(x) = x³ ?",
    choices: ["3x²", "2x", "x²", "3x"],
    answer: 0
  },
  {
    question: "Quelle est la dérivée de f(x) = 1/x ?",
    choices: ["-1/x²", "1/x²", "-x", "x^-2"],
    answer: 0
  },
  {
    question: "Quelle est la dérivée de f(x) = tan(x) ?",
    choices: ["1/cos²(x)", "sec(x)", "-sin(x)/cos²(x)", "cos(x)/sin(x)"],
    answer: 0
  },
  {
    question: "Quelle est la dérivée de f(x) = x^5 ?",
    choices: ["5x^4", "x^4", "4x^5", "5x"],
    answer: 0
  },
  {
    question: "Quelle est la dérivée de f(x) = sqrt(x) ?",
    choices: ["1/(2sqrt(x))", "2sqrt(x)", "sqrt(x)/2", "1/sqrt(x)"],
    answer: 0
  },
  {
    question: "Quelle est la dérivée de f(x) = ln(2x) ?",
    choices: ["1/x", "2/x", "ln(2)/x", "2ln(x)"],
    answer: 1
  },
  {
    question: "Quelle est la dérivée de f(x) = e^(2x) ?",
    choices: ["2e^(2x)", "e^x", "e^(2x)", "x*e^x"],
    answer: 0
  },
  {
    question: "Quelle est la dérivée de f(x) = ln(x^2) ?",
    choices: ["2/x", "ln(x)/2", "x", "2ln(x)"],
    answer: 0
  },
  {
    question: "Quelle est la dérivée de f(x) = x*sin(x) ?",
    choices: ["sin(x) + x*cos(x)", "x*sin(x)", "cos(x) + x", "sin(x) - x*cos(x)"],
    answer: 0
  },
  {
    question: "Quelle est la dérivée de f(x) = x/e^x ?",
    choices: ["(1 - x)/e^x", "(1 + x)/e^x", "-x/e^x", "x*e^x"],
    answer: 0
  },
  {
    question: "Quelle est la dérivée de f(x) = ln(x + 1) ?",
    choices: ["1/(x + 1)", "ln(x)/x", "x/(x+1)", "1/x"],
    answer: 0
  },
  {
    question: "Quelle est la dérivée de f(x) = cos(x²) ?",
    choices: ["-2x*sin(x²)", "-cos(x²)", "-x*sin(x²)", "-2x*cos(x²)"],
    answer: 0
  },
  {
    question: "Quelle est la dérivée de f(x) = x/ln(x) ?",
    choices: ["(ln(x) - 1)/ln²(x)", "ln(x)/x²", "1/ln(x)", "1/xln(x)"],
    answer: 0
  },
  {
    question: "Quelle est la dérivée de f(x) = x² * e^x ?",
    choices: ["(2x + x²)e^x", "x²*e^x", "x² + e^x", "2xe^x"],
    answer: 0
  },
  {
    question: "Quelle est la dérivée de f(x) = (x+1)/(x-1) ?",
    choices: ["2/(x - 1)^2", "1/(x - 1)^2", "(x - 1)^2", "(x + 1)/(x - 1)^2"],
    answer: 0
  }
];

function renderQCM() {
  const container = document.getElementById("qcm-container");
  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question-block";
    div.innerHTML = `
      <p><strong>Q${index + 1}.</strong> ${q.question}</p>
      ${q.choices
        .map(
          (choice, i) => `
            <label>
              <input type="radio" name="q${index}" value="${i}" /> ${choice}
            </label><br />`
        )
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
