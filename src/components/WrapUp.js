import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import AOrAnd from "./AOrAnd";

function WrapUp({
  name,
  firstLetter,
  howDo,
  mainContent,
  nextLesson,
  topic,
  newStudent,
}) {
  return (
    <Container>
      <Paper>
        <Typography padding="10px" margin="24px" variant="h5">
          {name} did <AOrAnd firstLetter={firstLetter} /> {howDo} job today!{" "}
          Since I haven't seen {name} in a little while, we started the session
          off by catching up a little bit with an icebreaker activity. It's
          always great to hear how {name} is doing! After that, we hopped on
          over to continue working on {topic}! {mainContent} Overall, I would
          say that it was an awesome session, and {name} did a great job
          absorbing and applying all of the concepts that we covered today.{" "}
          {nextLesson}
        </Typography>
      </Paper>
    </Container>
  );
}

export default WrapUp;
