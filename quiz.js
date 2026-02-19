const questions = [
    {
        question: "What organelle is unique to plant cells for photosynthesis?",
        options: ["Mitochondria", "Chloroplast", "Lysosome", "Nucleus"],
        answer: 1
    },
    {
        question: "Which cell type has a cell wall?",
        options: ["Animal", "Plant", "Both", "Neither"],
        answer: 1
    },
    {
        question: "What is the function of the nucleus?",
        options: ["Energy production", "Protein synthesis", "Controls cell activities", "Digestion"],
        answer: 2
    },
    {
        question: "Animal cells have larger vacuoles than plant cells. True or False?",
        options: ["True", "False"],
        answer: 1
    },
    {
        question: "Who coined the term 'cell'?",
        options: ["Robert Hooke", "Anton van Leeuwenhoek", "Theodor Schwann", "Rudolf Virchow"],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question').innerHTML = `<p>${q.question}</p>`;
    let optionsHtml = '';
    q.options.forEach((opt, index) => {
        optionsHtml += `<label><input type="radio" name="option" value="${index}"> ${opt}</label><br>`;
    });
    document.getElementById('options').innerHTML = optionsHtml;
    document.getElementById('result').innerHTML = '';
    document.getElementById('next').style.display = 'none';
    document.getElementById('submit').style.display = 'block';
}

document.getElementById('submit').addEventListener('click', () => {
    const selected = document.querySelector('input[name="option"]:checked');
    if (selected) {
        const answer = parseInt(selected.value);
        if (answer === questions[currentQuestion].answer) {
            score++;
            document.getElementById('result').innerHTML = '<p style="color:green;">Correct!</p>';
        } else {
            document.getElementById('result').innerHTML = '<p style="color:red;">Incorrect. Correct answer: ' + questions[currentQuestion].options[questions[currentQuestion].answer] + '</p>';
        }
        document.getElementById('submit').style.display = 'none';
        document.getElementById('next').style.display = 'block';
    }
});

document.getElementById('next').addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('quiz').innerHTML = `<h2>Quiz Complete! Score: ${score}/${questions.length}</h2>`;
    }
});

loadQuestion();
