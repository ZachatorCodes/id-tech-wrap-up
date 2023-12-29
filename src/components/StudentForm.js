import {
  Box,
  Container,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React from "react";

function StudentForm({ lessonInfo, setLessonInfo }) {
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setLessonInfo({
      ...lessonInfo,
      [name]: value,
    });
  }

  return (
    <Container maxWidth="lg">
      <Paper sx={{ background: "#d7ffd7" }} elevation={3}>
        <Box component="form" textAlign="center">
          <TextField
            value={lessonInfo.name}
            onChange={handleChange}
            name="name"
            label="Name"
            sx={{ margin: 2, width: "30%", background: "#ffffff" }}
          ></TextField>
          <TextField
            value={lessonInfo.topic}
            onChange={handleChange}
            name="topic"
            label="Topic"
            sx={{ margin: 2, width: "30%", background: "#ffffff" }}
          ></TextField>
          <TextField
            value={lessonInfo.howDo}
            onChange={handleChange}
            name="howDo"
            label="How did you do today?"
            sx={{ margin: 2, width: "30%", background: "#ffffff" }}
          ></TextField>
          <br />
          <TextField
            name="mainContent"
            label="Main Content"
            multiline
            value={lessonInfo.mainContent}
            onChange={handleChange}
            rows={5}
            sx={{ marginBottom: 2, width: "95%", background: "#ffffff" }}
          ></TextField>
          <TextField
            value={lessonInfo.nextLesson}
            onChange={handleChange}
            name="nextLesson"
            label="For Next Lesson..."
            multiline
            rows={5}
            sx={{ marginBottom: 2, width: "95%", background: "#ffffff" }}
          ></TextField>
          {/* <RadioGroup
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
          </RadioGroup> */}
        </Box>
      </Paper>
    </Container>
  );
}

export default StudentForm;
