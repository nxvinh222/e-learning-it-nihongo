import React from "react";
import {Col, Row,} from "react-bootstrap";
import "../styles/ListTest.css";

const SearchItem =  (props) => {
    return (
        <>
            <Row>
                <Col md={6}>
                <div className="search-area">
                    <input type="text" placeholder="Search ...."
                    onChange={(event) => {
                        props.setSearchItem(event.target.value)
                    }}
                    style={{width: "100%",height: "40px"}}
                    />
                </div>
                </Col>
            </Row>
        </>
    );
}

export default SearchItem;