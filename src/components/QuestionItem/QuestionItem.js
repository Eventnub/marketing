import "./questionItem.css";

function QuestionItem({ question: currentQuestion }) {
  const { position, question, options } = currentQuestion;

  const getIndexLetter = (index) => {
    switch (index) {
      case 0:
        return "A";
      case 1:
        return "B";
      case 2:
        return "C";
      case 3:
        return "D";
      default:
        return "";
    }
  };

  return (
    <div className="quiz">
      <div className="d-flex flex-row align-items-baseline quiz-question">
        <span className="position">{position}.</span>
        <h4 className="flex-grow-1">"{question}"</h4>
      </div>
      <div className="row">
        {options.map((option, index) => (
          <div
            key={option}
            className="col-12 col-md-6 d-flex justify-content-center align-items-center"
          >
            <button className="btn btn-option">{`${getIndexLetter(
              index
            )}. ${option}`}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionItem;
