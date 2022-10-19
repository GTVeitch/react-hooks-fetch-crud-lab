import React from "react";

function QuestionItem({ question, onDeletedQuestion }) {
  const { id, prompt, answers = [], correctIndex } = question;

  const options = answers.map((answer, index) => {
    return (
    <option key={index} value={index}>
      {answer}
    </option>
    )
});

  function handleDeleteItem(e) {
    e.preventDefault()
    fetch(`http://localhost:4000/questions/${id}`, {
    method : "DELETE"
    })
    .then(response => response.json())
    .then(() => onDeletedQuestion(question))
  }

  function changeDefault(e) {
    e.preventDefault()
    fetch(`http://localhost:4000/questions/${id}`, {
      method : "PATCH",
      headers : { "content-type" : "application/json" },
      body : {"correctIndex" : e.target.value},
    })
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={changeDefault}>{options}</select>
      </label>
      <button onClick={handleDeleteItem}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
