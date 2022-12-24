import React from "react";
import {useSelector} from "react-redux";

export default function Profile() {
    const userSelector = useSelector((state) => state.user.value);
    return (
        <div>
            <div>
                <h4>name : {userSelector.name}</h4>
                <h4>age : {userSelector.age}</h4>
                <h4>email : {userSelector.email}</h4>
            </div>
        </div>
    )
}