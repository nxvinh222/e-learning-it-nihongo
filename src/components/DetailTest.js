import React,{useEffect,useState} from "react";

const DetailTest = (props) => {
    const [testItem, setTestItem] = useState();

    useEffect (() =>{
        // setTestItem(props.selected);
        console.log(props);
    },[]);

    return (
        <>
        </>
    );
}

export default DetailTest;