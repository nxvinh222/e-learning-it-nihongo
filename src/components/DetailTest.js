import React,{useState} from "react";

const DetailTest = (props) => {
    const {selected} = props;

    if(selected == null) 
    {
        console.log("that bai")
     } else console.log("thanh cong");
    return (
        <>
            {selected.title}
        </>
    );
}

export default DetailTest;