const qutions= [{qution:"who is super star in india",
answers:[
    {text:"Rajnikanth",correct:true},
    {text:"kamalHasan",correct:false},
    {text:"vijay",correct:false},
    {text:"ajith",correct:false},
]},
{qution:"who is CM of Tamilnadu",
answers:[
    {text:"m.k stalin",correct:true},
    {text:"annamalai",correct:false},
    {text:"seeman",correct:false},
    {text:"pannerselvam",correct:false},
]},
{qution:"how many district in Tamilnadu",
answers:[
    {text:"34",correct:false},
    {text:"33",correct:true},
    {text:"18",correct:false},
    {text:"35",correct:false},
]},
{qution:"which Is capital of Tamilnadu",
answers:[
    {text:"madurai",correct:false},
    {text:"theni",correct:false},
    {text:"vilupuram",correct:false},
    {text:"chennai",correct:true},
]},
{qution:"vijay is ?",
answers:[
    {text:"Actor",correct:false},
    {text:"dancer",correct:false},
    {text:"singer",correct:false},
    {text:"Both",correct:true},
]},
];

const qutioneElement=document.getElementById("qution");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-button");
let currentqutionindex=0;
let score=0;
function startquiz(){
    currentqutionindex=0;
    score=0;
    nextButton.innerHTML="next";
    showqution();
}
    function showqution(){
        resetstate()
        let currentqution=qutions[currentqutionindex];
        let qutionNo=currentqutionindex + 1;
        qutioneElement.innerHTML=qutionNo +"." + currentqution.qution;
    
   currentqution.answers.forEach(answer =>{
    const button=document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct){
        button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",selectAnswer);

   });
}
 function resetstate(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
 }
 function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("inCorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct=== "true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showscore(){
    resetstate();
        qutioneElement.innerHTML=`you scored ${score} out of ${qutions.length}!`
        nextButton.innerHTML="play again";
        nextButton.style.display="block";
    }
function handleNextButton(){
    currentqutionindex++;
    if(currentqutionindex<qutions.length){
        showqution();
    }else{
        showscore();
    }
 }

 nextButton.addEventListener("click",()=>{
    if(currentqutionindex < qutions.length){
        handleNextButton();
    }else{
        startquiz();
    }
 });

startquiz()
