import React, { useState, useEffect } from "react";
import {
  Card,
  styled,
  Grid,
  CardContent,
  Typography,
  Button,
  ButtonGroup,
  makeStyles,
} from "@material-ui/core";
import { shuffle } from "lodash";

const StyledCardContent = styled(CardContent)({
  padding: "10px",
  margin: 0,
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
const formatAnswersArray = (correctAnswer, incorrectAnswers) =>
  shuffle(incorrectAnswers.concat([correctAnswer]));

export const MultipleChoiceCard = ({
  questions,
  setNumberOfCorrectAnswers,
  numberOfCorrectAnswers,
  setNumberOfQuestionsRemaining,
  numberOfQuestionsRemaining
}) => {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentIndex]
  );

  return (
    <section>
      <Typography component="header" variant="h5">
        {currentQuestion.question}
      </Typography>
      <Card raised>
        <StyledCardContent>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            spacing={4}
          >
            {formatAnswersArray(
              currentQuestion.correct,
              currentQuestion.incorrect
            ).map((answerChoice, index) => (
              <Grid key={index} item>
                <div className={classes.root}>
                  <ButtonGroup
                    orientation="vertical"
                    color="primary"
                    aria-label="vertical contained primary button group"
                    variant="text"
                  >
                    <Button
                      onClick={(e) => {
                        if (
                          e.currentTarget.textContent ===
                          currentQuestion.correct
                        ) {
                          setNumberOfCorrectAnswers(numberOfCorrectAnswers + 1);
                          alert("Correct! Keep it Up!");
                        } else {
                          alert(
                            `Sorry, the correct answer is ${currentQuestion.correct}`
                          );
                        }

                        setCurrentQuestion(questions[currentIndex + 1]);
                        setCurrentIndex(currentIndex + 1);
                        setNumberOfQuestionsRemaining(numberOfQuestionsRemaining - 1)
                      }}
                    >
                      {answerChoice}
                    </Button>
                  </ButtonGroup>
                </div>
              </Grid>
            ))}
            <Grid item container justify="center" variant="contained"></Grid>
          </Grid>
        </StyledCardContent>
      </Card>
    </section>
  );
};
