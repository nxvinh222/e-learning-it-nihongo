import React,{useState, useEffect} from "react";
import {Card, Col, Row,} from "react-bootstrap";
import "../styles/ListTest.css";
import {Search, CardChecklist, EyeFill} from "react-bootstrap-icons";
import useFirebaseStorage from "lib/firebasestorage";

const ListTest = (props) => {
  const [items, addItem, updateItem, clearItems] = useFirebaseStorage();
  const [searchItem,setSearchItem] = useState("");
  const [selectedTest,setSelectedTest] = useState();
  const handleClick = () => {
    props.handleSelect(selectedTest);
  }
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
          <Row style={{marginTop: "30px"}}>
              {items.filter((itemTest) => {
                if (itemTest.title == ""){
                  return itemTest
                } else if (itemTest.title.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())){
                  return itemTest
                }
              }).map((test,index) => {
                  return (
                      <Col md={4}>
                        <div className="test-item" onClick={ () => {
                          setSelectedTest(test);
                          console.log("tajo ow day");
                          console.log(selectedTest);
                          handleClick();
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
        </Card.Body>
      </Card>
      </>
  );
}

export default ListTest;