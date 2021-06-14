import React,{useState, useEffect} from "react";
import {Card, Col, Row,} from "react-bootstrap";
import "../styles/ListTest.css";
import useFirebaseStorage from "lib/firebasestorage";
import Test from "./Test";

const PersonalStats = (props) => {
  const [user, setUser] = useState();
  const [items, addItem, updateItem, clearItems] = useFirebaseStorage();
  const [searchItem,setSearchItem] = useState("");
  const [selectedTest,setSelectedTest] = useState();
  
  useEffect (() => {
    console.log(selectedTest);
    props.handleSelect(selectedTest);
  },[selectedTest]);
  return (
      <>
      <Card>
        <Card.Header>
          <h3>User Stats</h3>
        </Card.Header>
        <Card.Body>
          <h4>User name: {props.user.name} </h4>
          <Row>
            <Col md={6}>
              <div className="search-area">
                <input type="text" placeholder="Search ...."
                  onChange={(event) => {
                    setSearchItem(event.target.value)
                  }}
                  style={{width: "100%",height: "40px"}}
                />
              </div>
            </Col>
          </Row>
          <Test items={items} searchItem={searchItem} setSelectedTest={setSelectedTest}/>
        </Card.Body>
      </Card>
      </>
  );
}

export default PersonalStats;
