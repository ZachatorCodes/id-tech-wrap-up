import { Typography } from "@mui/material";
import React from "react";

function NewStudent({
  name,
  topic,
  howDo,
  mainContent,
  nextLesson,
  preposition,
}) {
  return (
    <Typography padding="10px" margin="24px" variant="h5">
      {name} did {preposition} {howDo} job today! Since this was my first time
      meeting {name}, we started the session out with a little icebreaker
      activity to get to know each other a little better. It was great to meet{" "}
      {name}! After that, we hopped on over to start working on {topic}.{" "}
      {mainContent} Overall, I would say that it was {preposition} {howDo}{" "}
      session, and {name} did a great job absorbing and applying all of the
      concepts that we covered today! {nextLesson}
    </Typography>
  );
}

export default NewStudent;
