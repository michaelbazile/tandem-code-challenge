import React, { useState } from "react";
import data from "./Apprentice_TandemFor400_Data.json";
import { MultipleChoiceCard } from "./MultipleChoiceCard.js";
import { FinalScoreCard } from "./FinalScoreCard.js";
import { shuffle } from "lodash";

const randomQuestions = () => shuffle(data).slice(0, 10);

export const MainBoard = () => {
  const [numberOfQuestionsRemaining, setNumberOfQuestionsRemaining] = useState(10);
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);
  const questions = randomQuestions();

  return !numberOfQuestionsRemaining ? (
    <FinalScoreCard finalScore={numberOfCorrectAnswers} />
  ) : (
    <MultipleChoiceCard
      setNumberOfQuestionsRemaining={setNumberOfQuestionsRemaining}
      numberOfQuestionsRemaining={numberOfQuestionsRemaining}
      questions={questions}
      numberOfCorrectAnswers={numberOfCorrectAnswers}
      setNumberOfCorrectAnswers={setNumberOfCorrectAnswers}
    />
  );
};
