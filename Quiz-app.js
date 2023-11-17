const quizData = [
    {
        question: "What is the current president of Nigeria?",
        options: ["Bola Ahmed Tinubu", "Muhammed Buhari", "Olusegun Obasonjo", "Yakubu Gowon"],
        correctAnswer: "Bola Ahmed Tinubu"
    },
    {
        question: "What is the capital of Lagos State?",
        options: ["Lagos", "Abuja", "Ibadan", "Kano"],
        correctAnswer: "Lagos"
    },
    {
        question: "Who is the President of Russia?",
        options: ["Vladimir Putin", "Dmitry Medvedev", "Boris Yeltsin", "Mikhail Gorbachev"],
        correctAnswer: "Vladimir Putin"
    },
    // Add more questions as needed
];

const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionContainer.innerHTML = `
        <p>${currentQuestion.question}</p>
        <ul>
            ${currentQuestion.options.map((option, index) => `
                <li>
                    <input type="radio" name="option" value="${option}" id="option${index}">
                    <label for="option${index}">${option}</label>
                </li>
            `).join('')}
        </ul>
    `;
}


function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }
}

function showResult() {
    resultContainer.innerHTML = `Your score: ${score} out of ${quizData.length}`;
}

nextButton.addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        checkAnswer(selectedOption.value);
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResult();
            nextButton.style.display = "none";
        }
    } else {
        alert("Please select an option");
    }
});

// Initial load
loadQuestion();







// ... Your existing JavaScript code ...

const restartButton = document.getElementById("restart-button");

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "block";
    restartButton.style.display = "none";
    resultContainer.innerHTML = "";
    loadQuestion();
}

restartButton.addEventListener("click", restartQuiz);

// ... Your existing JavaScript code ...

nextButton.addEventListener("click", () => {
    // ... Your existing "Next" button logic ...

    if (currentQuestionIndex === quizData.length) {
        showResult();
        nextButton.style.display = "none";
        restartButton.style.display = "block";
    }
});

// ... Your existing JavaScript code ...

