import React from "react";
import {useDispatch} from "react-redux";
import {login, logout} from "./Features/User";

export default function Login() {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(login({name: "mohsen", age: 22, email: "mohsen@gmial.com"}))}>Log in
            </button>
            <button onClick={() => dispatch(logout({name: "", age: 0, email: ""}))}>Log out
            </button>
        </div>
    )
}