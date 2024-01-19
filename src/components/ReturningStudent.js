import { Typography } from "@mui/material";

function ReturningStudent({
  name,
  topic,
  howDo,
  mainContent,
  nextLesson,
  preposition,
}) {
  return (
    <Typography variant="p" id="wrap-up" sx={{fontSize: 18}}>
      {name} did {preposition} {howDo} job today! Since I haven't seen {name} in
      a little bit, we started the session with an icebreaker activity to catch
      up. It's always great to hear how {name} is doing! After that, we hopped
      on over to continue working on {topic}. {mainContent} Overall, I would say
      that it was {preposition} {howDo} session, and {name} did a great job
      absorbing and applying all of the concepts that we covered today!{" "}
      {nextLesson}
    </Typography>
  );
}

export default ReturningStudent;
