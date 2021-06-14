import React,{useEffect,useState} from "react";
import { useHistory } from "react-router";
import DoTestForm from "components/DoTestForm";


const DetailTest = (props) => {
  const history=useHistory();
  const {selected} = props;
  if(selected == null) {
    console.log("that bai");
    history.push("/home");
  }

  var d = new Date().getTime();
  const [doTestFormList, setDoTestFormList] = useState([]);
  
  useEffect(() => {
    setDoTestFormList(selected.test.map((v, i) => <DoTestForm index={i} value={v} />));
  }, []);
  
  const handleSubmit = (event) => {
    var chooseRadio = document.querySelectorAll("input[type=radio]:checked");
    var c = [];
    var point = 0;
    chooseRadio.forEach((item) =>{c.push(item.value)});
    for(let i = 0; i < c.length; i+=1) {
      if(c[i] == selected.test[i].answerkey) {
        point += 1;
      }
    } 
    if(c.length == selected.test.length) {
      var testTime = (new Date().getTime() - d) / 1000;
      point = "Your score: " + point + "\nTest complete in: " + testTime + "seconds";
      alert(point);
      window.location = "/home";
    } else {
      point = "You must answer all question";
      alert(point);
    }
  };
  
  return (
    <div>
      <h1 style={{"text-align": "center"}}>{selected.title}</h1>
        {doTestFormList}
      <button onClick={handleSubmit} class="btn btn-primary">Submit</button>
    </div>
  );
}

export default DetailTest;
