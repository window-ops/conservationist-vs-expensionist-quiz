const quizData = [
  {
    question: "I make an active effort to reduce my energy consumption at home by using energy-efficient appliances and practicing conservation habits.",
    answers: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    points: [2, 1, 0, -1, -2]
  },
  {
    question: "Despite functioning adequately, I tend to replace my electronics with newer models frequently.",
    answers: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    points: [-2, -1, 0, 1, 2]
  },
  {
    question: "When something breaks, I usually opt to repair it instead of immediately discarding and replacing it.",
    answers: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    points: [-2, -1, 0, 1, 2]
  },
  {
    question: "I am willing to pay a premium for products that are environmentally friendly and sustainably produced.",
    answers: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    points: [2, 1, 0, -1, -2]
  },
  {
    question: "Businesses have a social responsibility to adopt energy-efficient technologies and reduce their carbon footprint.",
    answers: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    points: [2, 1, 0, -1, -2]
  },
  {
    question: "Short-term profitability should be the primary focus for businesses, even if it means compromising on sustainability.",
    answers: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    points: [-2, -1, 0, 1, 2]
  },
  {
    question: "Businesses should implement recycling programs and actively work to minimize waste generation.",
    answers: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    points: [2, 1, 0, -1, -2]
  },
  {
    question: "Businesses ought to encourage and incentivize employees to adopt eco-friendly transportation options, such as carpooling or using public transit.",
    answers: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    points: [2, 1, 0, -1, -2]
  },
  {
    question: "The government should offer tax incentives to companies that demonstrate a commitment to sustainable practices and environmental protection.",
    answers: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    points: [2, 1, 0, -1, -2]
  },
  {
    question: "Economic growth and development should take precedence over environmental considerations in government policy-making.",
    answers: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    points: [-2, -1, 0, 1, 2]
  },
  {
    question: "Investing in renewable energy sources is a worthwhile endeavor for the government, even if it requires additional taxation.",
    answers: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    points: [2, 1, 0, -1, -2]
  },
  {
    question: "The free market should allocate resources without the need for government intervention or regulation.",
    answers: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    points: [-2, -1, 0, 1, 2]
  },
  {
    question: "Resource conservation should take a back seat to indefinite economic growth, as it is essential for societal progress and development.",
    answers: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    points: [-2, -1, 0, 1, 2]
  },
  {
    question: "Environmental protection is of utmost importance, even if it means slower economic advancement.",
    answers: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    points: [2, 1, 0, -1, -2]
  },
  {
    question: "We have an obligation to future generations to limit our consumption of natural resources and ensure their sustainability.",
    answers: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    points: [2, 1, 0, -1, -2]
  },
  {
    question: "Society should promote a culture of mindful consumption, encouraging individuals to reduce their environmental impact.",
    answers: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    points: [2, 1, 0, -1, -2]
  },
  {
    question: "Individuals hold a responsibility to future generations to actively conserve natural resources through their daily actions.",
    answers: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    points: [2, 1, 0, -1, -2]
  },
  {
    question: "Short-term gains are more critical for societal progress than long-term sustainability concerns.",
    answers: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    points: [-2, -1, 0, 1, 2]
  },
  {
    question: "Resource conservation is a priority, and society should be willing to make sacrifices for a sustainable future.",
    answers: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    points: [2, 1, 0, -1, -2]
  },
  {
    question: "We have a collective duty to ensure a sustainable planet for future generations, even if it requires significant changes to our current lifestyles.",
    answers: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    points: [2, 1, 0, -1, -2]
  }
];

const quizForm = document.getElementById('quiz-form');
const submitButton = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

let conservationistPoints = 0;
let expensionistPoints = 0;
let isQuizSubmitted = false;
let completedQuestions = 0;
const totalQuestions = quizData.length;

function displayQuestions() {
  quizData.forEach((data, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question-container');
    questionDiv.innerHTML = `
      <div class="question">${data.question}</div>
      <div class="answers">
        ${data.answers.map((answer, i) => `<label><input type="radio" name="q${index}" value="${data.points[i]}" onclick="updateCompletedQuestions()">${answer}</label>`).join('')}
      </div>
    `;
    quizForm.appendChild(questionDiv);
  });
}

function updateCompletedQuestions() {
  completedQuestions = document.querySelectorAll('input:checked').length;
}

function calculateResults() {
  if (completedQuestions < totalQuestions) {
    alert('Please answer all the questions before submitting the quiz.');
    return;
  }

  const formData = new FormData(quizForm);

  for (const entry of formData.entries()) {
    if (entry[1] > 0) {
      expensionistPoints += parseInt(entry[1]);
    } else if (entry[1] < 0) {
      conservationistPoints += Math.abs(parseInt(entry[1]));
    }
  }

  const totalPoints = expensionistPoints + conservationistPoints;
  const conservationistPercentage = ((conservationistPoints / totalPoints) * 100).toFixed(2);
  const expensionistPercentage = ((expensionistPoints / totalPoints) * 100).toFixed(2);
  const indexValue = expensionistPercentage - conservationistPercentage;

  resultDiv.innerHTML = `You are ${conservationistPercentage}% Conservationist and ${expensionistPercentage}% Expensionist.`;
  displayResultAxis(indexValue);

  // Disable the quiz form after submission
  quizForm.querySelectorAll('input').forEach(input => {
    input.disabled = true;
  });
  submitButton.disabled = true;
  submitButton.style.display = 'none';
  isQuizSubmitted = true;
}

function displayResultAxis(indexValue) {
  const axisWidth = 400;
  const indicatorPosition = (indexValue + 100) / 200 * axisWidth;

  const resultAxisDiv = document.createElement('div');
  resultAxisDiv.classList.add('result-container');

  const axisDiv = document.createElement('div');
  axisDiv.classList.add('axis');

  const indicatorDiv = document.createElement('div');
  indicatorDiv.classList.add('result-indicator');
  indicatorDiv.style.left = `${indicatorPosition - 10}px`;

  axisDiv.appendChild(indicatorDiv);
  resultAxisDiv.appendChild(axisDiv);

  resultDiv.parentNode.insertBefore(resultAxisDiv, resultDiv.nextSibling);
}

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  if (isQuizSubmitted) {
    alert('You have already submitted the quiz.');
    return;
  }

  calculateResults();
});

displayQuestions();