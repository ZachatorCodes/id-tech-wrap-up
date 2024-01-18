import {
  Box,
  Container,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

function StudentForm({ lessonInfo, setLessonInfo }) {
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "newStudent") {
      setLessonInfo({
        ...lessonInfo,
        [name]: !lessonInfo.newStudent,
      });
    } else {
      setLessonInfo({
        ...lessonInfo,
        [name]: value,
      });
    }
  }

  return (
    <Container maxWidth="lg">
      <Paper sx={{ background: "#d7ffd7", paddingBottom: 2 }} elevation={3}>
        <Box component="form" textAlign="center">
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            gap={2}
            padding={2}
          >
            <TextField
              value={lessonInfo.name}
              onChange={handleChange}
              name="name"
              label="Name"
              sx={{
                minWidth: "30%",
                background: "#ffffff",
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: "200px",
              }}
            ></TextField>
            <TextField
              value={lessonInfo.topic}
              onChange={handleChange}
              name="topic"
              label="Topic"
              sx={{
                minWidth: "30%",
                background: "#ffffff",
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: "200px",
              }}
            ></TextField>
            <TextField
              value={lessonInfo.howDo}
              onChange={handleChange}
              name="howDo"
              label="How did you do today?"
              sx={{
                minWidth: "30%",
                background: "#ffffff",
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: "200px",
              }}
            ></TextField>
          </Box>
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
          <RadioGroup
            className="radio-group"
            row
            name="newStudent"
            value={lessonInfo.newStudent}
            onChange={handleChange}
            sx={{ paddingTop: 1.2 }}
          >
            <Container>
              <FormControlLabel
                value={true}
                control={<Radio />}
                label="New Student"
                sx={{ marginBottom: 2, marginTop: 2 }}
                labelPlacement="top"
              />
              <FormControlLabel
                value={false}
                control={<Radio />}
                label="Returning Student"
                sx={{ marginBottom: 2, marginTop: 2 }}
                labelPlacement="top"
              />
            </Container>
          </RadioGroup>
        </Box>
      </Paper>
    </Container>
  );
}

export default StudentForm;
