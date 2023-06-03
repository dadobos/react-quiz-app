import React, { useState, useEffect } from 'react';
import { fetchQuizQuestions, fetchCategories } from './API';
import QuestionCard from './components/QuestionCard';
import { GlobalStyle, Wrapper } from './App.style';
import SelectDifficulty, { Difficulty } from './components/SelectDifficulty';
import SelectQuestions, { TotalQuestions } from './components/SelectQuestions';
import SelectCategory from './components/SelectCategory';
import DetailsCard from './components/DetailsCard';
import { Category, QuestionState, AnswerObject } from './Types';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState<boolean>(true);
  const [difficulty, setDifficulty] = useState<string>(Difficulty.EASY);
  const [totalQuestionNumber, setTotalQuestionNumber] = useState<number>(
    TotalQuestions.TEN
  );

  const [categoryID, setCategoryID] = useState<number>(1);
  const [categoryList, setCategoryList] = useState<Array<Category>>([]);

  useEffect(() => {
    fetchCategories().then((categories) => setCategoryList(categories));
  }, []);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      totalQuestionNumber,
      categoryID,
      difficulty
    );

    setScore(0);
    setUserAnswers([]);
    setQuestionNumber(0);
    setQuestions(newQuestions);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;

      const correct = questions[questionNumber].correct_answer === answer;
      if (correct) {
        setScore((prev) => prev + 1);
      }

      const answerObject = {
        question: questions[questionNumber].question,
        answer,
        correct,
        correctAnswer: questions[questionNumber].correct_answer
      };

      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    if (questionNumber + 1 >= totalQuestionNumber) {
      setGameOver(true);
    } else {
      setQuestionNumber(questionNumber + 1);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper className="App">
        <h1>Quiz</h1>

        {gameOver || questionNumber === totalQuestionNumber ? (
          <div>
            <SelectDifficulty
              difficulty={difficulty}
              setDifficulty={setDifficulty}
            />
            <SelectQuestions
              totalQuestionNumber={totalQuestionNumber}
              setTotalQuestionNumber={setTotalQuestionNumber}
            />
            <SelectCategory
              categoryID={categoryID}
              categoryList={categoryList}
              setCategoryID={setCategoryID}
            />
            <button className="start" onClick={startTrivia}>
              Start
              {questionNumber + 1 === totalQuestionNumber && ' again'}
            </button>
          </div>
        ) : null}

        {loading ?? <p>Loading Questions...</p>}
        {
          <DetailsCard
          gameOver={gameOver}
            difficulty={difficulty}
            category={
              questions ? questions[questionNumber]?.category : undefined
            }
            score={score}
            questionNumber={questionNumber}
            totalQuestions={totalQuestionNumber}
          />
        }

        {!loading && !gameOver && (
          <QuestionCard
            question={questions[questionNumber].question}
            answers={questions[questionNumber].answers}
            userAnswers={userAnswers ? userAnswers[questionNumber] : undefined}
            callback={checkAnswer}
          />
        )}

        {!gameOver &&
        !loading &&
        userAnswers.length === questionNumber + 1 &&
        questionNumber !== totalQuestionNumber ? (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
