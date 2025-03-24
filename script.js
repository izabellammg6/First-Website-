function checkAnswers() {
    let score = 0;
    let result = "";

    let quiz = document.forms.quiz.elements;


    function getValue(name) {
        return quiz[name] ? quiz[name].value : null;
    }

    let answer1 = getValue("want");
    let answer2 = getValue("reason");
    let answer3 = getValue("tried-quit");
    let answer4 = getValue("think-about-quit");
    let answer5 = getValue("plan-quit");
    let answer6 = getValue("biggest-challenge");
    let answer7 = getValue("support");
    let answer8 = getValue("uncomfortable");


    if (!answer1 || !answer2 || !answer3 || !answer4 || !answer5 || !answer6 || !answer7 || !answer8) {
        alert("Please answer all questions before submitting.");
        return;
    }

    
    if (answer1 === "1-3") score += 1;
    else if (answer1 === "4-6") score += 2;
    else if (answer1 === "7-8") score += 3;
    else score += 4;

    if (answer2 === "health") score += 1;
    else if (answer2 === "family-friends") score += 2;
    else if (answer2 === "expensive") score += 3;
    else score += 4;

    if (answer3 === "never") score += 1;
    else if (answer3 === "once") score += 2;
    else if (answer3 === "multiple") score += 3;
    else score += 4;

    if (answer4 === "anxious") score += 1;
    else if (answer4 === "neutral") score += 2;
    else if (answer4 === "hopeful") score += 3;
    else score += 4;

    if (answer5 === "no-plan") score += 1;
    else if (answer5 === "no-action") score += 2;
    else if (answer5 === "plan-not-started") score += 3;
    else score += 4;

    if (answer6 === "withdrawal") score += 1;
    else if (answer6 === "stress-emotions") score += 2;
    else if (answer6 === "social-situation") score += 3;
    else score += 4;

    if (answer7 === "prefer-alone") score += 1;
    else if (answer7 === "not-tried") score += 2;
    else if (answer7 === "methods") score += 3;
    else score += 4;

    if (answer8 === "fine-with") score += 1;
    else if (answer8 === "sometimes") score += 2;
    else if (answer8 === "fell-judged") score += 3;
    else score += 4;

    
    if (score < 6) {
        result = "You may not be ready to quit yet, but learning more about the benefits of quitting could help.";
    } else if (score < 10) {
        result = "You’re thinking about quitting, but you might need more motivation and a solid plan.";
    } else if (score < 13) {
        result = "You’re determined to quit and just need the right strategy and support.";
    } else {
        result = "You’re fully committed and ready to take action—go for it!";
    }

    document.getElementById("result").innerText = `Your result: ${result}`;

}
