import { Container, Paper } from "@mui/material";
import React from "react";
import NewStudent from "./NewStudent";
import ReturningStudent from "./ReturningStudent";

function WrapUp({ name, howDo, mainContent, nextLesson, topic, newStudent }) {
  const firstLetter = howDo.toLowerCase()[0]
  const preposition =
    firstLetter === "a" ||
    firstLetter === "e" ||
    firstLetter === "i" ||
    firstLetter === "o" ||
    firstLetter === "u"
      ? "an"
      : "a";
  return (
    <Container>
      <Paper>
        {newStudent ? (
          <NewStudent
            name={name}
            topic={topic}
            howDo={howDo}
            mainContent={mainContent}
            nextLesson={nextLesson}
            preposition={preposition}
          />
        ) : (
          <ReturningStudent
            name={name}
            topic={topic}
            howDo={howDo}
            mainContent={mainContent}
            nextLesson={nextLesson}
            preposition={preposition}
          />
        )}
      </Paper>
    </Container>
  );
}

export default WrapUp;
