import React from "react";

function AddTestForm(props) {
  return (
    <div className="question pb-3">
      <div className="form-group">
        <label className="h5" for="exampleInputEmail1">
          Question {props.questionNumber}
        </label>
        <input
          type="text"
          class="form-control"
          id="question"
          placeholder="Question"
        />
      </div>
      <div className="form-group col-5">
        <label for="exampleInputPassword1">Answer 1</label>
        <input
          type="text"
          class="form-control"
          id="answer1"
          placeholder="Answer 1"
        />
      </div>
      <div className="form-group col-5">
        <label for="exampleInputPassword1">Answer 2</label>
        <input
          type="text"
          className="form-control"
          id="answer2"
          placeholder="Answer 2"
        />
      </div>
      <div className="form-group col-5">
        <label for="exampleInputPassword1">Answer 3</label>
        <input
          type="text"
          className="form-control"
          id="answer3"
          placeholder="Answer 3"
        />
      </div>
      <div className="form-group col-3">
        <label for="exampleFormControlSelect1">Answer key</label>
        <select className="form-control" id="answerkey">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <hr
        style={{
          color: "black",
          backgroundColor: "black",
          height: 5,
        }}
      />
    </div>
  );
}

export default AddTestForm;
