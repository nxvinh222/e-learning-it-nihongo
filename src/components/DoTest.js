import React,{useEffect,useState} from "react";

import DoTestForm from "components/DoTestForm";

const DoTest = () => {
  var d = new Date().getTime();
  
  const [doTestFormList, setDoTestFormList] = useState([]);
  var questionList = {test: [{
	question: "What is your name?",
	answer1: "Dat",
	answer2: "Trung",
	answer3: "Chien",
	answerkey: 1		
  }, {
  	question: "What is your team's name?",
	answer1: "1",
	answer2: "3",
	answer3: "5",
	answerkey: 3
  }], name : "datbk206"};
  
  useEffect(() => {
    setDoTestFormList(questionList.test.map((v, i) => <DoTestForm index={i} value={v} />));
  }, []);
  
  const handleSubmit = (event) => {
  	var chooseRadio = document.querySelectorAll("input[type=radio]:checked");
  	var c = [];
    var point = 0;
  	chooseRadio.forEach((item) =>{c.push(item.value)});
	for(let i = 0; i < c.length; i+=1) {
	  if(c[i] == questionList.test[i].answerkey) {
	    point += 1;
	  }
	} 
	if(c.length == questionList.test.length) {
	  var testTime = (new Date().getTime() - d) / 1000;
	  point = "Your score: " + point + "\nTest complete in: " + testTime + "seconds";
	  alert(point);
	  window.location = "/";
	} else {
	  point = "You must answer all question";
	  alert(point);
	}
	
	
  };
  
  return (
    <div>
      <h1 style={{"text-align": "center"}}>{questionList.name}</h1>
        {doTestFormList}
	    <button onClick={handleSubmit} class="btn btn-primary">Submit</button>
    </div>
  );
}

export default DoTest;
