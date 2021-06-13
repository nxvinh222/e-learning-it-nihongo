import React,{useState, useEffect} from "react";
import {Col, Row} from "react-bootstrap";
import "../styles/ListTest.css";
import {CardChecklist, EyeFill} from "react-bootstrap-icons";
import { useHistory } from "react-router";

const Test = (props) => {
    let history = useHistory();
    const navigateToDetail = () => {
       history.push("/home/detail");
    }
    const [selected,setSelected] = useState();
    useEffect (() => {
        props.setSelectedTest(selected);
        return () => {
        };
    },[selected]);
    return (
      <>
        <Row style={{marginTop: "30px"}}>
            {props.items.filter((itemTest) => {
            if (typeof itemTest.title === 'undefined' || itemTest.title == ""){
                return itemTest
            } else if (itemTest.title.toLocaleLowerCase().includes(props.searchItem.toLocaleLowerCase())){
                return itemTest
            }
            }).map((test,index) => {
                return (
                    <Col md={4}>
                    <div className="test-item"
                    onClick={() => {
                        setSelected(test);
                        navigateToDetail();
                    }}
                    >
                        <h4 className="test-item-header"><CardChecklist></CardChecklist>  {test.title}</h4>
                        <div className="card-body">
                        <span><EyeFill></EyeFill>    {test.times}</span>
                        </div>
                    </div>
                    </Col>
                );
            })}
        </Row>
      </>
    );
}

export default Test;
