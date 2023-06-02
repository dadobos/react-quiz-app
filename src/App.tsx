import React, { useState, useEffect } from 'react';
import { fetchQuizQuestions, fetchCategories } from './API';
import QuestionCard from './components/QuestionCard';
import { GlobalStyle, Wrapper } from './App.style';
import SelectDifficulty, { Difficulty } from './components/SelectDifficulty';
import SelectQuestions, { TotalQuestions } from './components/SelectQuestions';
import SelectCategory from './components/SelectCategory';
import { Category, QuestionState, AnswerObject } from './Types';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [difficulty, setDifficulty] = useState<string>(Difficulty.EASY);
  const [totalQuestionNumber, setTotalQuestionNumber] = useState<number>(
    TotalQuestions.TEN
  );

  const [category, setCategory] = useState<number>(1);
  const [categoryList, setCategoryList] = useState<Array<Category>>([]);

  useEffect(() => {
    fetchCategories().then((data) => setCategoryList(data));
  }, []);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      totalQuestionNumber,
      category,
      difficulty
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;

      const correct = questions[number].correct_answer === answer;

      if (correct) {
        setScore((prev) => prev + 1);
      }

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      };

      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextNumber = number + 1;
    if (nextNumber === totalQuestionNumber) {
      setGameOver(true);
    } else {
      setNumber(nextNumber);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper className="App">
        <h1>Quiz</h1>

        {gameOver || number + 1 === totalQuestionNumber ? (
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
              category={category}
              categoryList={categoryList}
              setCategory={setCategory}
            />
            <button className="start" onClick={startTrivia}>
              Start
              {number + 1 === totalQuestionNumber && ' again'}
            </button>
          </div>
        ) : null}

        {loading ?? <p>Load Questions...</p>}

        {!loading && !gameOver && (
          <QuestionCard
            difficulty={difficulty}
            score={score}
            questionNr={number + 1}
            totalQuestions={totalQuestionNumber}
            question={questions[number].question}
            answers={questions[number].answers}
            category={questions[number].category}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}

        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number + 1 !== totalQuestionNumber ? (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
