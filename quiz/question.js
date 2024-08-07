const questions = [
    {
      question: "1.The elements between the tags of an HTML table are____by default.",
      options:["Justified","Left alligned","Centrally alligned","Right alligned"],
      correctAnswer:"Left alligned"
  },
    {
      question: "2.What is the role of controller in MVC architecture?",
      options: ["It interfaces with the database","it acts as an intermediate", "It structures the data in meaningful way", "it defines how data should be presented"],
      correctAnswer: "Mars"
    },
    {
      question:"3.In Node.js, how does the cluster module function to balance the load across multiple cores in a server?",
      options:["It uses the round-robin method by default","It uses a dedicated manager process","It forks multiple node.js worker processes","It simply runs multiple node.js processes in parallel"],
  
    },
    {
      question:"4.Which of the following can read and render HTML web pages?",
      options:["server","head tak","web browser","empty"],
      correctAnswer:"web browser"
    },
    {
      question:"5.Among the following operators identify the one whhich is used to allocate memory to array variables in javascript.",
      options:["new","new malloc","alloc","malloc"],
      correctAnswer:"new"
    },
    {
      question:"6.The latest HTML standard is ",
      options:["HTML 4.0","HTML 5.0","XML","SGML"],
      correctAnswer:"HTML 5.0"
  
    },
    {
      question:"7.Why were cookies designd?",
      options:["for server-side progrsmming","for client-side programming ","both a and b","none"],
      correctAnswer:"cookies were designed for server-side programming "
  
    },
    {
      question:"8.What are variables used in Javascript programs",
      options:["varying randomly","storing numbers,dates and other values","used as header files","none of the above"],
      correctAnswer:"storing numbers,dates and other values"
    },
    {
      question:"9.simple network management protocol uses which of the following port number",
      options:["164","163","160","161"],
      correctAnswer:"161"
    },
    {
      question:"10.Identify the incorrrect HTML tag among the following:",
      options:["<input>","<select>","<list>","<textarea>"],
      correctAnswer:"<list>"   
    },
    
    
  ];
  
  let currentQuestionIndex = 0;
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
  
    const optionsList = document.getElementById("options-list");
    optionsList.innerHTML = "";
  
    currentQuestion.options.forEach((option, index) => {
      const li = document.createElement("li");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "option";
      input.value = option;
      input.id = "option" + index;
  
      const label = document.createElement("label");
      label.textContent = option;
      label.htmlFor = "option" + index;
  
      li.appendChild(input);
      li.appendChild(label);
      optionsList.appendChild(li);
    });
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
  
    if (selectedOption) {
      const userAnswer = selectedOption.value;
      const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  
      if (userAnswer === correctAnswer) {
        alert("Correct!");
      } else {
        alert("Incorrect. The correct answer is: " + correctAnswer);
      }
    } else {
      alert("Please select an option");
      return;
      
    }
  
    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      alert("Quiz completed!");
      currentQuestionIndex = 0; 
      loadQuestion();
    }
  }
  
  function prevQuestion() {
    // Move to the previous question
    currentQuestionIndex--;
    if (currentQuestionIndex < 0) {
      currentQuestionIndex = 0; 
    }
    loadQuestion();
  }
  
  function nextQuestion() {
    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
      currentQuestionIndex = questions.length - 1; 
    }
    loadQuestion();
  }
  
  loadQuestion();