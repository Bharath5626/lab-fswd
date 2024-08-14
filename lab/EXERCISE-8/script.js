const questions = [
    "What is your favorite color?",
    "What is your favorite animal?",
    "What is your favorite food?",
    "What is your favorite movie?",
    "What is your favorite hobby?"
    ];
    function getRandomQuestions() {
    const randomQuestions = [];
    const usedIndices = [];
    while (randomQuestions.length < 5) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    if (!usedIndices.includes(randomIndex)) {
    randomQuestions.push(questions[randomIndex]);
    usedIndices.push(randomIndex);
    }
    }
    return randomQuestions;
    }
    function createQuestionElement(question) {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `
    <label>${question}</label>
    <input type="text" name="answer" required><br/><br/>`;
    return questionElement;
    }
    function displayQuestions() {
    const questionContainer = document.getElementById("questionContainer");
    const randomQuestions = getRandomQuestions();
    randomQuestions.forEach(question => {
    const questionElement = createQuestionElement(question);
    questionContainer.appendChild(questionElement);
    });
    }
    function submitSurvey(event) {
    event.preventDefault();
     const form = event.target;
    const answers = Array.from(form.elements["answer"]).map(input => input.value);
    const container = document.querySelector(".container");
    container.innerHTML = `
    <h1>Thank You for Taking the Survey!</h1>
    <p>Your responses have been recorded.</p>
    `;
    }
    document.addEventListener("DOMContentLoaded", displayQuestions);
    document.getElementById("surveyForm").addEventListener("submit", submitSurvey); 