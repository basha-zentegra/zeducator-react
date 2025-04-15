import React from "react";

const LessonList = ({ lessons }) => {
  return (
    <div>
      <h2>Lesson List</h2>
      {lessons.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {lessons.map((lesson, index) => (
            <li key={index}>
              <h3>{lesson.Topic}</h3>
              <p>{lesson.ID}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LessonList;
