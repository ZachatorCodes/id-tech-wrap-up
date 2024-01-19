import { Container, Paper } from "@mui/material";
import NewStudent from "./NewStudent";
import ReturningStudent from "./ReturningStudent";

function WrapUp({ name, howDo, mainContent, nextLesson, topic, newStudent, showWrapUp }) {
  const firstLetter = howDo.toLowerCase()[0];
  const preposition =
    firstLetter === "a" ||
    firstLetter === "e" ||
    firstLetter === "i" ||
    firstLetter === "o" ||
    firstLetter === "u"
      ? "an"
      : "a";

  if (showWrapUp) {
    return (
      <Container
        disableGutters
        sx={{ paddingLeft: 2, paddingRight: 2, paddingBottom: 2 }}
      >
        <Paper sx={{ padding: 2 }} className="paper-group" elevation={0}>
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
  } else {
    return (
      <Container
        disableGutters
        sx={{ paddingLeft: 2, paddingRight: 2, paddingBottom: 2, display: "none" }}
      >
        <Paper sx={{ padding: 2 }} className="paper-group" elevation={0}>
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
  
}

export default WrapUp;
