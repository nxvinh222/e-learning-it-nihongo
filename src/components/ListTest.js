import React,{useState, useEffect} from "react";
import {Card, Col, Row,} from "react-bootstrap";
import "../styles/ListTest.css";
import useFirebaseStorage from "lib/firebasestorage";
import Test from "./Test";
import Tests from "../Data/Tests";

import SearchItem from "./SearchItem";
import Filter from "./Filter";

const ListTest = (props) => {
  
  const [searchItem,setSearchItem] = useState("");
  const kinds = [];
  const [items,setItems] = useState(null);
  
  useEffect(()=>{
    setItems(props.items);
    console.log(items);
  },[items]);
  Tests.map((test) => {
    if(!kinds.includes(test.kind)){
      kinds.push(test.kind);
    }
  })
  const setFilter = (input) => {
    if(kinds.includes(input)) {
      setSearchItem(input);
    } else setSearchItem("");
  }
  useEffect(()=>{
  },[searchItem]);
  
  return (
      <>
      <img src="/images/tittle.jpg" alt="title-image" className="image-title"/>
      <Card>
        <Card.Header>
          <h3>List Tests</h3>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={{span: 6}}><SearchItem setSearchItem={setSearchItem}></SearchItem></Col>
            <Col md={{span: 2,offset:3}} style={{marginLeft: "32%"}}>
              <Filter 
                setFilter={setFilter}
                kinds={kinds}
              ></Filter>
            </Col>
          </Row>
          <Test 
            items={Tests} 
            searchItem={searchItem} 
            handleSelect={props.handleSelect}
          />
        </Card.Body>
      </Card>
      </>
  );
}

export default ListTest;