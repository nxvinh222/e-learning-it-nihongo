import React,{useState, useEffect} from "react";
import {Card, Col, Row,} from "react-bootstrap";
import "../styles/ListTest.css";
import {Search, CardChecklist, EyeFill} from "react-bootstrap-icons";
import { useHistory } from "react-router";

const Test = (props) => {
    let history = useHistory();
    const navigateToDetail = () => {
       history.push("/detail");
    }
    return (
      <>
        <Row style={{marginTop: "30px"}}>
            {props.items.filter((itemTest) => {
            if (itemTest.title == ""){
                return itemTest
            } else if (itemTest.title.toLocaleLowerCase().includes(props.searchItem.toLocaleLowerCase())){
                return itemTest
            }
            }).map((test,index) => {
                return (
                    <Col md={4}>
                    <div className="test-item"
                    onClick={() => {
                        props.setSelectedTest(test);
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