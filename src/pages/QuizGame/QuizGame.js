import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./quizGame.css";
import LogoWhite from "../../components/LogoWhite";
import questions from "./questions";
import QuestionItem from "../../components/QuestionItem/QuestionItem";

function QuizGame() {
  const navigate = useNavigate();
  const [questionsWithResponses, setQuestionsWithResponses] =
    useState(questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);

  const getCurrentQuestion = () => {
    return questions.at(currentQuestionIndex);
  };

  const gotoNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    setCurrentQuestionIndex(nextQuestionIndex);

    if (nextQuestionIndex === questions.length - 1) {
      setIsLastQuestion(true);
    }
  };

  const handleLastQuestion = () => {
    navigate("/submit-quiz", {
      state: {
        questionsWithResponses,
      },
    });
  };

  const handleSelectOption = (questionPosition, optionIndex) => {
    const qwr = questionsWithResponses.map((question) => {
      if (question.position === questionPosition) {
        question.selectedOption = question.options[optionIndex];
      }
      return question;
    });
    setQuestionsWithResponses(qwr);
  };

  return (
    <div className="p-4 quiz-game">
      <div className="d-flex align-items-baseline main">
        <LogoWhite width="40px" height="40px" />
        <h1 className="ms-3 text-light company-name">eventnub</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="quiz-container">
          <QuestionItem
            question={getCurrentQuestion()}
            onSelectOption={handleSelectOption}
          />
          <div className="d-flex justify-content-end mt-5">
            {!isLastQuestion ? (
              <button className="btn next-btn" onClick={gotoNextQuestion}>
                Next Question {">>"}
              </button>
            ) : (
              <button className="btn next-btn" onClick={handleLastQuestion}>
                Review
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizGame;
