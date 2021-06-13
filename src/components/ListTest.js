import React,{useState, useEffect} from "react";
import {Card, Col, Row,} from "react-bootstrap";
import "../styles/ListTest.css";
import useFirebaseStorage from "lib/firebasestorage";
import Test from "./Test";
import Tests from "../Data/Tests";
import { getFirebaseItems } from "lib/firebase";

const ListTest = (props) => {
  // const [items, addItem, updateItem, clearItems] = useFirebaseStorage();
  const [items,setItems] = useState();
  const [searchItem,setSearchItem] = useState("");

  useEffect (() => {
    const _items = getFirebaseItems();
    setItems(_items);
  },[]);
  
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
            handleSelect={props.handleSelect}
          />
        </Card.Body>
      </Card>
      </>
  );
}

export default ListTest;