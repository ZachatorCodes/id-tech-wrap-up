import {
  Container,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import AOrAnd from "./components/AOrAnd";
import StudentForm from "./components/StudentForm";
import Header from "./components/Header";

function App() {
  const [lessonInfo, setLessonInfo] = useState({
    name: "",
    topic: "",
    howDo: "",
    nextLesson: "For next time, we'll...",
    mainContent: "Today...",
    newStudent: true,
  });

  

  return (
    <div className="App">
      <Header />
      <StudentForm lessonInfo={lessonInfo} setLessonInfo={setLessonInfo}/>
      <Container>
        <Paper>
          <Typography padding="10px" margin="24px" variant="h5">
            {lessonInfo.name} did <AOrAnd firstLetter={lessonInfo.howDo[0]} />{" "}
            {lessonInfo.howDo} job today! Since I haven't seen {lessonInfo.name}{" "}
            in a little while, we started the session off by catching up a
            little bit with an icebreaker activity. It's always great to hear
            how {lessonInfo.name} is doing! After that, we hopped on over to
            continue working on {lessonInfo.topic}! {lessonInfo.mainContent}{" "}
            Overall, I would say that it was an awesome session, and{" "}
            {lessonInfo.name} did a great job absorbing and applying all of the
            concepts that we covered today. {lessonInfo.nextLesson}
          </Typography>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
