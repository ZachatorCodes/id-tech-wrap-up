import { useState } from "react";
import StudentForm from "./components/StudentForm";
import Header from "./components/Header";
import WrapUp from "./components/WrapUp";

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
      <StudentForm lessonInfo={lessonInfo} setLessonInfo={setLessonInfo} />
      <WrapUp
        name={lessonInfo.name}
        howDo={lessonInfo.howDo}
        topic={lessonInfo.topic}
        nextLesson={lessonInfo.nextLesson}
        mainContent={lessonInfo.mainContent}
        newStudent={lessonInfo.newStudent}
      />
    </div>
  );
}

export default App;
