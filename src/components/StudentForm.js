import {
  Box,
  Container,
  FormControlLabel,
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
    <Box component="form" textAlign="center">
      <Container maxWidth="lg" sx={{ padding: 2 }} disableGutters>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          gap={2}
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
      </Container>
      <Container
        maxWidth="lg"
        disableGutters
        sx={{ paddingBottom: 2, paddingLeft: 2, paddingRight: 2 }}
      >
        <TextField
          name="mainContent"
          label="Main Content"
          multiline
          value={lessonInfo.mainContent}
          onChange={handleChange}
          sx={{ width: "100%", background: "#ffffff" }}
        ></TextField>
      </Container>
      <Container
        maxWidth="lg"
        disableGutters
        sx={{ paddingBottom: 2, paddingLeft: 2, paddingRight: 2 }}
      >
        <TextField
          value={lessonInfo.nextLesson}
          onChange={handleChange}
          name="nextLesson"
          label="For Next Lesson..."
          multiline
          sx={{ width: "100%", background: "#ffffff" }}
        ></TextField>
      </Container>
      <Container
        maxWidth="lg"
        disableGutters
        sx={{ paddingBottom: 2, paddingLeft: 2, paddingRight: 2 }}
      >
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
              sx={{ marginBottom: 1, marginTop: 1 }}
              labelPlacement="top"
            />
            <FormControlLabel
              value={false}
              control={<Radio />}
              label="Returning Student"
              sx={{ marginBottom: 1, marginTop: 1 }}
              labelPlacement="top"
            />
          </Container>
        </RadioGroup>
      </Container>
    </Box>
  );
}

export default StudentForm;
