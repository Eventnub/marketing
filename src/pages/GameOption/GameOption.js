import "./gameOption.css";
import Logo from "../../components/Logo";
import womanWithHeadset from "../../assets/womanWithHeadset.png";

function GameOption() {
  return (
    <div className="container py-4 game-option">
      <div className="d-flex align-items-baseline main">
        <Logo width="40px" height="40px" />
        <h1 className="ms-2 company-name">eventnub</h1>
      </div>
      <h1>How well do you know Afrobeats? </h1>
      <p className="pick-any">
        Pick any game below, show us how much you know Afrobeats Artistes and
        stand a chance to get a free ticket.
      </p>
      <div className="card">
        <img
          src={womanWithHeadset}
          className="card-img-top"
          alt="Woman with headset"
        />
        <p className="how-well">How well do you know your favorite artist?</p>
        <div className="card-body">
          <p className="card-text">
            Answer questions about a popular artist and stand a chance for a
            free ticket
          </p>
          <a href="/quiz-game" className="btn btn-custom float-right">
            Start Quiz
          </a>
        </div>
      </div>
    </div>
  );
}

export default GameOption;
