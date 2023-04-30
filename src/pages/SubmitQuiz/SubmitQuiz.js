import { useLocation, useNavigate } from "react-router-dom";
import "./submitQuiz.css";
import LogoWhite from "../../components/LogoWhite";
import { useEffect, useState } from "react";

function Subscribe() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [questionsWithResponses, setQuestionsWithResponses] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    window.location.href = "/game-option";
  };

  useEffect(() => {
    if (!state || !state.questionsWithResponses) {
      navigate("/game-option");
    } else {
      setQuestionsWithResponses(state.questionsWithResponses);
    }

    // eslint-disable-next-line
  }, []);

  return (
    <div className="p-4 submit-quiz">
      <div className="d-flex align-items-baseline main">
        <LogoWhite width="40px" height="40px" />
        <h1 className="ms-3 text-light company-name">eventnub</h1>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div className="review-question">
            <h1>Review Answers</h1>
            {questionsWithResponses &&
              questionsWithResponses.map(
                ({ position, question, selectedOption }) => (
                  <div key={position} className="mb-4">
                    <h2>
                      Q{position}. {question}
                    </h2>
                    <p>{selectedOption}</p>
                  </div>
                )
              )}
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="container px-4">
            <h1 className="instruction1">Submit your test!</h1>
            <h2 className="instruction2">Enter Your Details</h2>
            <form onSubmit={handleSubscribe}>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label d-none">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="firstName"
                  placeholder="First Name"
                  aria-describedby="nameHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label d-none">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="lastName"
                  placeholder="Last Name"
                  aria-describedby="nameHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label d-none">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-custom">
                  Submit quiz
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
