import { useState } from "react";
import StudentForm from "./StudentForm";
import Buttons from "./Buttons";
import WrapUp from "./WrapUp";
import { Container, Paper } from "@mui/material";

function Main() {
  const [showWrapUp, setShowWrapUp] = useState(false);
  const [lessonInfo, setLessonInfo] = useState({
    name: "",
    topic: "",
    howDo: "",
    nextLesson: "For next time, we'll...",
    mainContent: "Today...",
    newStudent: true,
  });

  return (
    <Container maxWidth="lg">
      <Paper sx={{ background: "#d7ffd7", marginBottom: 2 }} elevation={20}>
        <StudentForm lessonInfo={lessonInfo} setLessonInfo={setLessonInfo} />
        <Buttons showWrapUp={showWrapUp} setShowWrapUp={setShowWrapUp} />
        <WrapUp
          name={lessonInfo.name}
          howDo={lessonInfo.howDo}
          topic={lessonInfo.topic}
          nextLesson={lessonInfo.nextLesson}
          mainContent={lessonInfo.mainContent}
          newStudent={lessonInfo.newStudent}
          showWrapUp={showWrapUp}
        />
      </Paper>
    </Container>
  );
}

export default Main;
