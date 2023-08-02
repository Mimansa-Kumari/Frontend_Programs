// define function calculateWeightedAverage here to calcuate weighted average
function calculateWeightedAverage(assignmentWeight, assignmentScore, projectWeight,
    projectScore,quizWeight, quizScore,midTermWeight, midTermScore,finalExamWeight, finalExamScore)
{
    var assignmentPercentScore = (assignmentWeight/100)*assignmentScore;
    var projectPercentScore = (projectWeight/100)*projectScore;
    var quizPercentScore = (quizWeight/100)*quizScore;
    var midTermPercentScore = (midTermWeight/100)*midTermScore;
    var finalExamPercentScore = (finalExamWeight/100)*finalExamScore;    
    var overallPercentage = (assignmentPercentScore + projectPercentScore + quizPercentScore + midTermPercentScore + finalExamPercentScore);

    console.log(``);
    console.log(`Weights        % Value of Score`);
    console.log(`Assignments    ${assignmentPercentScore}`);
    console.log(`Projects       ${projectPercentScore}`);
    console.log(`Quizzes        ${quizPercentScore}`);
    console.log(`Mid Term       ${midTermPercentScore}`);
    console.log(`Final Exam     ${finalExamPercentScore}`);
    return overallPercentage;
}

// Weightages of each sections
var assignmentWeight = 10;
var projectWeight = 35;
var quizWeight = 10;
var midTermWeight = 15;
var finalExamWeight = 30;

//Score of Student in each section 
var assignmentScore = 97;
var projectScore = 82;
var quizScore = 60;
var midTermScore = 75;
var finalExamScore = 80;

//calling functions
console.log(`The weighted average score is : ${calculateWeightedAverage(assignmentWeight, assignmentScore, projectWeight,
     projectScore,quizWeight, quizScore,midTermWeight, midTermScore,finalExamWeight, finalExamScore)}`);
