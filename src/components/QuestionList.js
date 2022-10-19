import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList( { questions = [] , setQuestions } ) {

  function handleDelete (removed) {
    const updatedItems = questions.filter ((question) => question.id !== removed.id)
    setQuestions(updatedItems)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => {
          return <QuestionItem key={question.id} question={question} onDeletedQuestion={handleDelete}/>})}
      </ul>
    </section>
  );
}

export default QuestionList;
