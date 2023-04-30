import { useState } from "react";
import "./quizGame.css";
import LogoWhite from "../../components/LogoWhite";
import questions from "./questions";
import QuestionItem from "../../components/QuestionItem/QuestionItem";

function QuizGame() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);

  const getCurrentQuestion = () => {
    return questions.at(currentQuestionIndex);
  };

  const gotoNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(nextQuestionIndex);
    }

    if (nextQuestionIndex === questions.length - 1) {
      setIsLastQuestion(true);
    }
  };

  const handleLastQuestion = () => {};

  return (
    <div className="p-4 quiz-game">
      <div className="d-flex align-items-baseline main">
        <LogoWhite width="40px" height="40px" />
        <h1 className="ms-3 text-light company-name">eventnub</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="quiz-container">
          <QuestionItem question={getCurrentQuestion()} />
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
