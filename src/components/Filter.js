import React from "react";
import { Dropdown } from "react-bootstrap";

const Filter = (props) => {
    const upper = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="primary">
                Filter by kind
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                <Dropdown.Item 
                     onClick={()=>{
                        props.setFilter("");
                    }}
                    active
                >All</Dropdown.Item>
                {props.kinds.map((kind, index)=>{

                    return(
                        <Dropdown.Item onClick={()=>{
                            props.setFilter(kind);
                        }}
                            key={index}
                        >
                            {upper(kind)}
                        </Dropdown.Item>
                        
                    );
                })}
                
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
}

export default Filter;