import React from "react";

const DoTestForm = (props) => {
	return (
	  <div>
		<form>
	        <label>Question {props.index + 1}: {props.value.question}</label><br />
	        <input type="radio" id={props.index +"1"} name={props.index} value="1" />
		    <label for={props.index +"1"}>{props.value.answer1}</label><br />
		    <input type="radio" id={props.index +"2"} name={props.index} value="2" />
		    <label for={props.index +"2"}>{props.value.answer2}</label><br />
		    <input type="radio" id={props.index +"3"} name={props.index} value="3" />
		    <label for={props.index +"3"}>{props.value.answer3}</label><br />
    	</form>
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

export default DoTestForm;
