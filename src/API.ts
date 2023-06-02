import { shuffleArray } from './Utils';
import { QuestionType } from './Types';

export const fetchQuizQuestions = async (
  amount: number,
  category: number,
  difficulty: string
) => {
  try {
    let anyCategory: string = category === 1 ? '' : '&category=' + category;
    const endpoint = `https://opentdb.com/api.php?amount=${amount}${anyCategory}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    return data.results.map((question: QuestionType) => ({
      ...question,
      answers: shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer
      ])
    }));
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategories = async () => {
  try {
    const endpoint = `https://opentdb.com/api_category.php`;
    const response = await fetch(endpoint);
    const categories = await response.json();
    return categories.trivia_categories;
  } catch (error) {
    console.log(error);
  }
};
