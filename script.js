const questions = [
    {
        question:`Given the HTML below:
        &lt;div&gt;
            &lt;div id="row-we"&gt;Universal Container&lt;/div&gt;
            &lt;div id="row-as"&gt;Applied Shipping&lt;/div&gt;
            &lt;div id="row-bt"&gt;Burlington Textiles&lt;/div&gt;
        &lt;/div&gt;

Which statement adds the priority-account css class to the Applied Shipping row?`,
        answers:[
            {text:`document.querySelector('#row-as').classList.add('priority-account');`,correct:true},
            {text:"document.querySelector('#row-as').class.add('priority-account');",correct:false},
            {text:"document.querySelector('#row-as').add('priority-account');",correct:false},
            {text:"document.querySelector('#priority-account').classList.add('#row-as');",correct:false}
        ]
    },
    {
        question:`A developer wants to create an object from a function in the browser using the code below:

function Monster() {this.name = 'hello'};
Const z = Monster();

What happens due to lack of the new keyword on line 02?`,
        answers:[
            {text:`Window.name is assigned to 'hello' and the variable z remains undefined.`,correct:true},
            {text:"Window.m is assigned the correct object.",correct:false},
            {text:"The z variable is assigned the correct object but this.name remains undefined.",correct:false},
            {text:"The z variable is assigned the correct object.",correct:false}
        ]
    },
    {
        question:`Refer to HTML below:
    &lt;div id="main"&gt;
        &lt;div id="card-00"&gt;This card is smaller.&lt;/div&gt;
        &lt;div id="card-01"&gt;The width and height of this card is determined by its contents.&lt;/div&gt;
    &lt;/div&gt;
Which expression outputs the screen width of the element with the ID card-01?`,
        answers:[
            {text:`document.getElementById(' card-01 ').style.width`,correct:false},
            {text:"document.getElementById(' card-01 ').getBoundingClientRect().width",correct:true},
            {text:"document.getElementById(' card-01 ').width",correct:false},
            {text:"document.getElementById(' card-01 ').innerHTML.lenght*e",correct:false}
        ]
    },
    {
        question:`Refer to the code below:
Async function functionUnderTest(isOK) {
    if (isOK) return 'OK';
    Throw new Error('not OK');
}
Which assertion accurately tests the above code?`,
        answers:[
            {text:`Console.assert (await functionUnderTest(true), ' OK ')`,correct:false},
            {text:"Console.assert (await functionUnderTest(true), 'OK')",correct:true},
            {text:"Console.assert (await functionUnderTest(true), ' notOK ')",correct:false},
            {text:"Console.assert (await functionUnderTest(true), ' not OK ')",correct:false}
        ]
    },
    {
        question: `What are two unique features of functions defined with a fat arrow as compared to normal function definition?
                    Choose 2 answers`,
        answers: [
            { text: "If the function has a single expression in the function body, the expression will be evaluated and implicit returned.", correct: true },
            { text: "The function generated its own this making it useful for separating the function's scope from its enclosing scope.", correct: false },
            { text: "The function uses the this from the enclosing scope.", correct: true },
            { text: "The function receives an argument that is always in scope, called parentThis, which is the enclosing lexical scope.", correct: false }
        ]
    },
    {
        question: `Refer to the code below:
                    const addBy = ?
                    const addByEight = addBy(8);
                    const sum = addByEight(50);

                    Which two functions can replace line 01 and return 58 to sum?
                    Choose 2 answers`,
        answers: [
            { text: `const addBy = function(num1) {
                        return function(num2) {
                            return num1 + num2;
                        }
                    };`, correct: true },
            { text: `const addBy = (num1) => (num2) => num1 + num2;`, correct: true },
            { text: `const addBy = (num1) => num1 + num2 ;`, correct: false },
            { text: `const addBy = function(num1) {
                        return num1 + num2;
                    };`, correct: false }
        ]
    },
    {
        question: `In which situation should a developer include a try .. catch block around their function call?`,
        answers: [
            { text: "The function has an error that should not be silenced.", correct: false },
            { text: "The function results in an out of memory issue.", correct: false },
            { text: "The function contains scheduled code.", correct: false },
            { text: "The function might raise a runtime error that needs to be handled.", correct: true }
        ]
    },
    {
        question: `Given the following code:
        let x = null;
        console.log(typeof x);
        What is the output?`,
        answers: [
            { text: '"x"', correct: false },
            { text: '"undefined"', correct: false },
            { text: '"null"', correct: false },
            { text: '"object"', correct: true }
        ]
    },
    {
        question: `Given the JavaScript below:
        01 function filterDOM (searchString) {
        02 const parsedSearchString = searchString && searchString.toLowerCase();
        03 document.querySelectorAll('.account').forEach(account => (
        04 const accountName = account.innerHTML.toLowerCase();
        05 account.style.display = accountName.includes(parsedSearchString) ? /*Insert code*/;
        06 ));
        07 }
        Which code should replace the placeholder comment on line 05 to hide accounts that do not match the search string?`,
        answers: [
            { text: "' Block ' : ' none '", correct: true },
            { text: "' visible ' : ' hidden '", correct: false },
            { text: "' hidden ' : ' visible '", correct: false },
            { text: "' name ' : ' block '", correct: false }
        ]
    },
    {
        question: `A developer has a formatName function that takes two arguments, firstName and lastName, and returns a string. They want to schedule the function to run once after five seconds.
        What is the correct syntax to schedule this function?`,
        answers: [
            { text: 'setTimeout(formatName(), 5000, "John", "BDoe");', correct: false },
            { text: 'setTimeout(\'formatName\', 5000, \'John\', "Doe");', correct: false },
            { text: 'setTimeout(() => { formatName("John", "Doe") }, 5000);', correct: true },
            { text: 'setTimeout(formatName("John", "Doe"), 5000);', correct: false }
        ]
    },
    {
        question: `Refer to the following code that imports a module named utils:
        import {foo, bar} from '/path/Utils.js';
        foo();
        bar();
        Which two implementations of Utils.js export foo and bar such that the code above runs without error?`,
        answers: [
            { text: "// FooUtils.js and BarUtils.js existImport (foo) from '/path/FooUtils.js'; Import (boo) from '/path/NarUtils.js';", correct: false },
            { text: "const foo = () => { return 'foo'; } const bar = () => { return 'bar'; } export default foo, bar;", correct: false },
            { text: "const foo = () => { return 'foo' ; } const bar = () => { return 'bar' ; } export { bar, foo }", correct: true },
            { text: "export default class { foo() { return 'foo'; } bar() { return 'bar'; }}", correct: true }
        ]
    },
    {
        question: `A developer writes the code below to return a message to a user attempting to register a new username. If the username is available, a variable named 'msg' is declared and assigned a value on line 03.
        1   function getAvailabilityMessage(item){
        2     if(getAvailability(item)){
        3         var msg = "Username available";
        4     }
        5     return msg;
        6   }
        What is the value of msg when getAvailabilityMessage("newUserName") is executed and getAvailability("newUserName") returns true?`,
        answers: [
            { text: '"msg is not defined"', correct: false },
            { text: '"Username available"', correct: true },
            { text: 'undefined', correct: false },
            { text: '"newUserName"', correct: false }
        ]
    },
    {
        question: `Refer to the code snippet below:
        Let array = [1, 2, 3, 4, 4, 5, 4, 4];
        For (let i = 0; i < array.length; i++)
        if (array[i] === 4) {
            array.splice(i, 1);
        }
        What is the value of array after the code executes?`,
        answers: [
            { text: '[1, 2, 3, 4, 5, 4]', correct: false },
            { text: '[1, 2, 3, 5]', correct: false },
            { text: '[1, 2, 3, 4, 5, 4, 4]', correct: false },
            { text: '[1, 2, 3, 4, 4, 5, 4] if this is not mistake', correct: true }
        ]
    },
    {
        question: `Refer to the following code:
        let array = [1, 2, 3, 4, 4, 5, 4, 4];
        for (let i = 0; i < array.length; i++) {
            if (array[i] === 4) {
                array.splice(i, 1);
                i--;
            }
        }
        alert(array);
        What is the value of array after code executes?`,
        answers: [
            { text: '[1, 2, 3, 4, 5, 4]', correct: false },
            { text: '[1, 2, 3, 5]', correct: true },
            { text: '[1, 2, 3, 4, 5, 4, 4]', correct: false },
            { text: '[1, 2, 3, 4, 4, 5, 4]', correct: false }
        ]
    },
    {
        question: `Given the requirement to refactor the code above to JavaScript class format, which class definition is correct?
        function Vehicle(name, prize){
            this.name = name;
            this.prize = prize;
        }
        Vehicle.prototype.prizeInfo = function (){
            return \`Cost of this \${this.name} is \${this.prize}$\`;
        }
        let ford = new Vehicle('Ford Fiesta', 20000);`,
        answers: [
            { 
                text: `
                    class Vehicle {
                        constructor(name, prize){
                            name = name;
                            prize = prize;
                        }
                        prizeInfo (){
                            return \`Cost of this \${this.name} is \${this.prize}$\`;
                        }
                    }`, 
                correct: false 
            },
            { 
                text: `
                    class Vehicle {
                        constructor(){
                            this.name = name;
                            this.prize = prize;
                        }
                        prizeInfo (){
                            return \`Cost of this \${this.name} is \${this.prize}$\`;
                        }
                    }`, 
                correct: false 
            },
            { 
                text: ` 
                    class Vehicle {
                        constructor(name, prize){
                            this.name = name;
                            this.prize = prize;
                        }
                        prizeInfo (){
                            return \`Cost of this \${this.name} is \${this.prize}$\`;
                        }
                    }`, 
                correct: true 
            },
            { 
                text: `
                    class Vehicle {
                        vehicle(name, prize){
                            this.name = name;
                            this.prize = prize;
                        }
                        prizeInfo (){
                            return \`Cost of this \${this.name} is \${this.prize}$\`;
                        }
                    }`, 
                correct: false 
            }
        ]
    },//firt 15items
    {
        question: `A developer has an ErrorHandler module that contains multiple functions.
        What kind of export should be leveraged so that multiple functions can be used?`,
        answers: [
            { text: "default", correct: false },
            { text: "named", correct: true },
            { text: "all", correct: false },
            { text: "multi", correct: false }
        ]
    },
    {
        question: `Refer to the code below:
        const myFunction = arr => {
            return arr.reduce((result, current) => {
                return result = current;
            }, 10);
        }
        What is the output of this function when called with an empty array?`,
        answers: [
            { text: "Returns 10", correct: true },
            { text: "Throws an error", correct: false },
            { text: "Returns 0", correct: false },
            { text: "Returns NaN", correct: false }
        ]
    },
    {
        question: `A developer has two ways to write a function:
        Option A:
        function Monster(){
            this.growl = ()=>{
                console.log('Grr!');
            }
        }
        Option B:
        function Monster(){}; 
        Monster.prototype.growl = ()=>{
            console.log('Grr!');
        }
        After deciding on an option, the developer creates 1000 monster objects.
        How many growl methods are created with Option A and Option B?`,
        answers: [
            { text: "1 for Option A, 1000 for Option B", correct: false },
            { text: "1000 for both", correct: false },
            { text: "1 method for both", correct: false },
            { text: "1000 for Option A, 1 for Option B", correct: true }
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}
//test
shuffleQuestions();

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
// function showQuestion(){
//     resetState();
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex +1;
//     questionElement.innerHTML = questionNo + ". "+currentQuestion.question;

//     currentQuestion.answers.forEach(answer =>{
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButtons.appendChild(button);
//         if(answer.correct){
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener("click",selectAnswer);
//     })
// }
// function showQuestion() {
//     resetState();
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//     // Shuffle answers array to randomize order
//     let shuffledAnswers = currentQuestion.answers.sort(() => Math.random() - 0.5);

//     shuffledAnswers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");

//         // const pre = document.createElement("p"); // Create <pre> element
//         // pre.textContent = answer.text;
        
//         // button.classList.add("btn");
//         // button.appendChild(pre);


//         answerButtons.appendChild(button);
//         if (answer.correct) {
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener("click", selectAnswer);
//     });
// }
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Shuffle answers array to randomize order
    let shuffledAnswers = currentQuestion.answers.sort(() => Math.random() - 0.5);

    shuffledAnswers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        // Add event listener to select an answer
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
// function selectAnswer(e){
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === "true";
//     if(isCorrect){
//         selectedBtn.classList.add("correct")
//         score++;
//     }else{
//         selectedBtn.classList.add("incorrect")
//     }
//     Array.from(answerButtons.children).forEach(button=>{
//         if(button.dataset.correct === "true"){
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     })
//     nextButton.style.display = "block";//it will show the next button if you click 1 answer button
// }
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    // Toggle selected state and mark answer as correct or incorrect
    if (selectedBtn.classList.contains('selected')) {
        selectedBtn.classList.remove('selected');
        if (isCorrect) {
            selectedBtn.classList.remove('correct');
        } else {
            selectedBtn.classList.remove('incorrect');
        }
    } else {
        selectedBtn.classList.add('selected');
        if (isCorrect) {
            selectedBtn.classList.add('correct');
        } else {
            selectedBtn.classList.add('incorrect');
        }
    }

    // Check if the user has selected all correct answers
    const correctAnswers = Array.from(answerButtons.children).filter(button => button.dataset.correct === "true");
    const selectedAnswers = Array.from(answerButtons.children).filter(button => button.classList.contains('selected'));
    const selectedCorrectAnswers = Array.from(answerButtons.children).filter(button => button.classList.contains('selected') && button.dataset.correct === "true");

    if(selectedAnswers.length == 2){
        //nextButton.style.display = "block";//comment this out to directly next the question
            // If all correct answers are selected, enable the "Next" button
        if (correctAnswers.length === selectedCorrectAnswers.length) {
            score++;
        }
        Array.from(answerButtons.children).forEach(button => {
            button.disabled = true;
        });
        setTimeout(function() {
            handledNextButton();//put this to directly next the question
        }, 1000);
    }else if(correctAnswers.length == 1){
        //nextButton.style.display = "block";//comment this out to directly next the question
        if (isCorrect) {
            score++;
        }
        Array.from(answerButtons.children).forEach(button => {
            button.disabled = true;
        });
        setTimeout(function() {
            handledNextButton();//put this to directly next the question
        }, 2000);
        
    }else {
        nextButton.style.display = "none"; // Hide the "Next" button if not all correct answers are selected
    }
}
function  showScore(){
    resetState();
    questionElement.innerHTML = `Your scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function  handledNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handledNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();