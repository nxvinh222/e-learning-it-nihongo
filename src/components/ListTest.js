import React,{useState} from "react";
import {Card, Col, Row,} from "react-bootstrap";
import Tests from "../Data/Tests";
import "../styles/ListTest.css";
import {Search, CardChecklist, EyeFill} from "react-bootstrap-icons";
const ListTest = () => {
    const [searchItem,setSearchItem] = useState("");
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
                  {/* <Search/> */}
                </div>
              </Col>
            </Row>
            <Row style={{marginTop: "30px"}}>
                {Tests.filter((itemTest) => {
                  if (itemTest.name == ""){
                    return itemTest
                  } else if (itemTest.name.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())){
                    return itemTest
                  }
                }).map((test,index) => {
                    return (
                        <Col md={4}>
                          <div className="test-item">
                            <h4 className="test-item-header"><CardChecklist></CardChecklist>  {test.name}</h4>
                            <div className="card-body">
                              <span><EyeFill></EyeFill>    {test.time}</span>
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