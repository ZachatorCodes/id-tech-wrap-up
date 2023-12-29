import { Container, Paper, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";

function App() {
  const [lessonInfo, setLessonInfo] = useState({
    name: "",
    topic: "",
    nextLesson: "",
    mainContent: "",
    newStudent: false,
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setLessonInfo({
      ...lessonInfo,
      [name]: value,
    });
  }

  return (
    <div className="App">
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ background: "#65a765" }}>
          <Typography padding="10px" margin="24px" align="center" variant="h2">
            Time For Wrap Up!
          </Typography>
        </Paper>
      </Container>
    
      <form>
        <input
          placeholder="Name"
          name="name"
          value={lessonInfo.name}
          onChange={handleChange}
        ></input>
        <input
          placeholder="Topic"
          name="topic"
          value={lessonInfo.topic}
          onChange={handleChange}
        ></input>
        <br />
        <textarea
          placeholder="Main Content"
          name="mainContent"
          value={lessonInfo.mainContent}
          onChange={handleChange}
        ></textarea>
        <textarea
          placeholder="Next Lesson"
          name="nextLesson"
          value={lessonInfo.nextLesson}
          onChange={handleChange}
        ></textarea>
      </form>
      <p>
        {lessonInfo.name} did an amazing job today! Since I haven't seen{" "}
        {lessonInfo.name} in a little while, we started the session off by
        catching up a little bit with an icebreaker activity. It's always great
        to hear how {lessonInfo.name} is doing! After that, we hopped on over to
        continue working on {lessonInfo.topic}! {lessonInfo.mainContent}{" "}
        Overall, I would say that it was an awesome session, and{" "}
        {lessonInfo.name} did a great job absorbing and applying all of the
        concepts that we covered today. For next time, we'll{" "}
        {lessonInfo.nextLesson}
      </p>
    </div>
  );
}

export default App;
