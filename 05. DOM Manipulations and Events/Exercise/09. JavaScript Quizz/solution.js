function solve() {
  const html = {
      sections: document.getElementsByTagName("section"),
      outputSection: document.getElementById("results"),
      outputElement: document.querySelector("#results > li > h1"),
  }
  const rightAnswers = [
      "onclick",
      "JSON.stringify()",
      "A programming API for HTML and XML documents",
  ]
  const answers = []
  let i = 0

  document.body.addEventListener("click", e => {
      if (e.target.className === "answer-text") {
          const sectionsArr = Array.from(html.sections)
          sectionsArr[i].style.display = "none"

          if (!rightAnswers.includes(e.target.textContent)) {
              answers.push(e.target.innerHTML)
          }

          if (sectionsArr[i + 1] !== undefined) {
              sectionsArr[i + 1].style.display = "block"
              i += 1
          } else {
              html.outputSection.style.display = "block"
              html.outputElement.innerHTML =
                  answers.length > 0
                      ? `You have ${3 - answers.length} right answers`
                      : "You are recognized as top JavaScript fan!"
          }
      }
  })
}

//  Variant 2 

function solve() {
    const RIGHT_ANSWERS = [
        'onclick',
        'JSON.stringify()',
        'A programming API for HTML and XML documents'];

    const givenAnswers = [];
    const quizElementsToHideShow = Array.from(document.querySelector('#quizzie').children).slice(1);
    const resultOutputElement = document.querySelector('#results li h1');
    const answerLiElements = document.querySelectorAll('.quiz-answer');
    for (const answerLiElement of answerLiElements) {
        answerLiElement.addEventListener('click', answer);
    }

    function answer(e) {
        const selectedAnswer = e.currentTarget.querySelector('p').textContent;
        const currentQuestionSection = e.currentTarget.parentElement.parentElement;
        const questionSectionIndex = quizElementsToHideShow.indexOf(currentQuestionSection);
        const nextElementToShow = currentQuestionSection.nextElementSibling
        givenAnswers[questionSectionIndex] = selectedAnswer;

        currentQuestionSection.style.display = 'none';
        nextElementToShow.style.display = 'block';

        if (nextElementToShow.tagName.toLowerCase() === 'ul') {
            const givenRightAnswerNumber = givenAnswers.filter((answer, index) => answer === RIGHT_ANSWERS[index]).length;
            resultOutputElement.textContent = helpers.showResult(givenRightAnswerNumber, RIGHT_ANSWERS.length);
        }
    }

    const helpers = {
        showResult(rightAnswersNumber, totalAnswersNumber) {
            const SUCCESSFUL_QUIZ_MASSAGE = 'You are recognized as top JavaScript fan!';
            const UNSUCCESSFUL_QUIZ_MASSAGE = `You have ${rightAnswersNumber} right answers`;
            return rightAnswersNumber === totalAnswersNumber ? SUCCESSFUL_QUIZ_MASSAGE : UNSUCCESSFUL_QUIZ_MASSAGE;
        }
    };
}
