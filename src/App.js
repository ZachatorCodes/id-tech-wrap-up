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

function App() {
  const [lessonInfo, setLessonInfo] = useState({
    name: "",
    topic: "",
    nextLesson: "For next time, we'll...",
    mainContent: "Today...",
    newStudent: true,
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
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ background: "#65a765" }}>
          <Typography padding="10px" margin="24px" align="center" variant="h2">
            Time For Wrap Up!
          </Typography>
        </Paper>
      </Container>
      <Container maxWidth="lg">
        <Paper sx={{ background: "#d7ffd7" }} elevation={3}>
          <Box component="form" textAlign="center">
            <TextField
              value={lessonInfo.name}
              onChange={handleChange}
              name="name"
              label="Name"
              sx={{ margin: 2, width: "37.5%", background: "#ffffff" }}
            ></TextField>
            <TextField
              value={lessonInfo.topic}
              onChange={handleChange}
              name="topic"
              label="Topic"
              sx={{ margin: 2, width: "37.5%", background: "#ffffff" }}
            ></TextField>
            <br />
            <TextField
              name="mainContent"
              label="Main Content"
              multiline
              value={lessonInfo.mainContent}
              onChange={handleChange}
              rows={5}
              sx={{ marginBottom: 2, width: "75%", background: "#ffffff" }}
            ></TextField>
            <TextField
              value={lessonInfo.nextLesson}
              onChange={handleChange}
              name="nextLesson"
              label="For Next Lesson..."
              multiline
              rows={5}
              sx={{ marginBottom: 2, width: "75%", background: "#ffffff" }}
            ></TextField>
            <RadioGroup
              background="#ffffff"
              row
              name="newStudent"
              value={lessonInfo.newStudent}
              onChange={handleChange}
            >
              <Container>
                <FormControlLabel
                  value={true}
                  control={<Radio />}
                  label="New Student"
                  sx={{ marginBottom: 2 }}
                  labelPlacement="top"
                />
                <FormControlLabel
                  value={false}
                  control={<Radio />}
                  label="Returning Student"
                  sx={{ marginBottom: 2 }}
                  labelPlacement="top"
                />
              </Container>
            </RadioGroup>
          </Box>
        </Paper>
      </Container>
      <p>
        {lessonInfo.name} did an amazing job today! Since I haven't seen{" "}
        {lessonInfo.name} in a little while, we started the session off by
        catching up a little bit with an icebreaker activity. It's always great
        to hear how {lessonInfo.name} is doing! After that, we hopped on over to
        continue working on {lessonInfo.topic}! {lessonInfo.mainContent}{" "}
        Overall, I would say that it was an awesome session, and{" "}
        {lessonInfo.name} did a great job absorbing and applying all of the
        concepts that we covered today. {lessonInfo.nextLesson}
      </p>
    </div>
  );
}

export default App;
