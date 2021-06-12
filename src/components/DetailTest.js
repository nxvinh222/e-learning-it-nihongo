import React,{useEffect} from "react";

const DetailTest = (props) => {

    // useEffect (() =>{
    //     console.log(props)
    // },[]);

    return (
        <>
            {props.selected.title}
        </>
    );
}

export default DetailTest;