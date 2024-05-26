document.addEventListener("DOMContentLoaded", () => {
    const quizData = [
        {
            question: "What does HTML stand for?",
            a: "Hyper Trainer Marking Language",
            b: "Hyper Text Marketing Language",
            c: "Hyper Text Markup Language",
            d: "Hyper Text Markup Leveler",
            correct: "c"
        },
        {
            question: "What does CSS stand for?",
            a: "Cascading Style Sheets",
            b: "Colorful Style Sheets",
            c: "Computer Style Sheets",
            d: "Creative Style Sheets",
            correct: "a"

        },
        {
            question: "What is the purpose of the `let` keyword in JavaScript?",
            a: "Declares a block-scoped variable",
            b: "Declares a function-scoped variable",
            c: "Declares a constant",
            d: "Declares a global variable",
            correct: "a"
        },

    ];

    const quizContainer = document.getElementById("quiz-container");
    const submitBtn = document.getElementById("submit-btn");
    const scoreContainer = document.getElementById("score-container");

    let currentQuestion = 0;
    let score = 0;

    function loadQuiz() {
        const currentQuizData = quizData[currentQuestion];
        quizContainer.innerHTML = `
            <div class="quiz-question">${currentQuizData.question}</div>
            <div class="quiz-options">
                <label><input type="radio" name="answer" value="a"> ${currentQuizData.a}</label><br>
                <label><input type="radio" name="answer" value="b"> ${currentQuizData.b}</label><br>
                <label><input type="radio" name="answer" value="c"> ${currentQuizData.c}</label><br>
                <label><input type="radio" name="answer" value="d"> ${currentQuizData.d}</label>
            </div>
        `;
    }

    function getSelected() {
        const answers = document.querySelectorAll("input[name='answer']");
        let selectedAnswer;
        answers.forEach(answer => {
            if (answer.checked) {
                selectedAnswer = answer.value;
            }
        });
        return selectedAnswer;
    }

    submitBtn.addEventListener("click", () => {
        const selectedAnswer = getSelected();
        if (selectedAnswer) {
            if (selectedAnswer === quizData[currentQuestion].correct) {
                score++;
            }
            currentQuestion++;
            if (currentQuestion < quizData.length) {
                loadQuiz();
            } else {
                quizContainer.innerHTML = `
                    <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                `;
                submitBtn.style.display = "none";
                scoreContainer.innerHTML = `Your final score is ${score}/${quizData.length}`;
            }
        }
    });

    loadQuiz();
});
