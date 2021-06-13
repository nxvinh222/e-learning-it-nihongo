import React,{useState, useEffect} from "react";
import {Card, Col, Row,} from "react-bootstrap";
import "../styles/ListTest.css";
import useFirebaseStorage from "lib/firebasestorage";
import Test from "./Test";
import Tests from "../Data/Tests";

const ListTest = (props) => {
  // const [listTest, setListTest] = useState();
  const [items, addItem, updateItem, clearItems] = useFirebaseStorage();
  const [searchItem,setSearchItem] = useState("");
  const [selectedTest,setSelectedTest] = useState();
  useEffect (() => {
    // console.log(selectedTest);
    props.handleSelect(selectedTest);
    return () => {
    };
  },[selectedTest]);
  return (
      <>
      <img src="/images/tittle.jpg" alt="title-image" className="image-title"/>
      <Card>
        <Card.Header>
          <h3>List Tests</h3>
        </Card.Header>
        <Card.Body>
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
          <Test 
            items={Tests} 
            searchItem={searchItem} 
            setSelectedTest={setSelectedTest}
          />
        </Card.Body>
      </Card>
      </>
  );
}

export default ListTest;