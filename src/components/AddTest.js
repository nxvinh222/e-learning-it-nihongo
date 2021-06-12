import React, { useEffect, useState } from "react";

import AddTestForm from "components/AddTestForm";
import { addFirebaseTest } from "lib/firebase";

function AddTest() {
  //   useEffect(() => {

  //   }, []);
  const [addTestFormList, setAddTestFormList] = useState([]);
  const [questionNum, setQuestionNum] = useState(-1);
  const handleSubmit = (event) => {
    event.preventDefault();
    var questionList = { test: [], name: "" };
    var question;
    var formList = document.querySelectorAll("div.question");

    formList.forEach((form) => {
      question = {
        question: form.querySelector("#question").value,
        answer1: form.querySelector("#answer1").value,
        answer2: form.querySelector("#answer2").value,
        answer3: form.querySelector("#answer3").value,
        answerkey: form.querySelector("#answerkey").value,
      };
      questionList.test.push(question);
    });


    console.log(questionNum);
    questionList.name = document.querySelectorAll("#test-name")[0].value
    console.log(questionList);
    addFirebaseTest(questionList);
  };

  const handleClick = (event) => {
    setQuestionNum(document.getElementById("numberofquestion").value);
    event.preventDefault();
  };

  useEffect(() => {
    const arr = [];
    var i;
    for (i = 1; i <= questionNum; i++) {
      arr.push(i);
    }
    console.log(questionNum);
    setAddTestFormList(arr.map((i) => <AddTestForm questionNumber={i} />));
  }, [questionNum]);

  //   const handleChange = (event) => {
  //     setQuestionNum(event.target.value);
  //   };

  return questionNum == -1 ? (
    <div className="p-3 m-3">
      <p className="h3">Select number of questions</p>
      <form onSubmit={handleClick} className="col-5">
        <input
          type="text"
          className="form-control col-7"
          placeholder="Enter number of questions"
          id="numberofquestion"
        />
        <button type="submit" class="btn btn-primary mt-2">
          Confirm
        </button>
      </form>
    </div>
  ) : (
    <div className="add-test row p-3 m-3">
      <form onSubmit={handleSubmit} className="col-8">

        <div className="test-name">
          <div className="form-group">
            <label className="h5" for="exampleInputEmail1">
              Enter test name:
            </label>
            <input
              type="text"
              class="form-control"
              id="test-name"
              placeholder="Test name"
            />
          </div>
        </div>

        {addTestFormList}
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddTest;
