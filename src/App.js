import { BrowserRouter, Route, Routes } from "react-router-dom";
import Subscribe from "./pages/Subscribe/Subscribe";
import GameOption from "./pages/GameOption/GameOption";
import QuizGame from "./pages/QuizGame/QuizGame";
import SubmitQuiz from "./pages/SubmitQuiz/SubmitQuiz";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Subscribe />} />
        <Route path="/game-option" element={<GameOption />} />
        <Route path="/quiz-game" element={<QuizGame />} />
        <Route path="/submit-quiz" element={<SubmitQuiz />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
