import React from "react";

type ControlProps = {
    onChangeMode: (mode: string) => void;
}

const Control = ({onChangeMode}: ControlProps) =>(
    <div>
        <ul>
            <li><a href="/create" onClick={(e:React.SyntheticEvent<EventTarget>)=>{
                onChangeMode("create");
                e.preventDefault();
            }}>create</a></li>
            <li><a href="/update" onClick={(e:React.SyntheticEvent<EventTarget>)=>{
                onChangeMode("update")
                e.preventDefault();
            }}>update</a></li>
            <li><input type={"button"} value={"delete"} onClick={(e)=>{
                onChangeMode("delete")
                e.preventDefault();
            }
            }></input></li>
        </ul>
    </div>
)

export default Control;