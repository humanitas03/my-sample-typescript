import React, {Component} from "react";

type SubjectProps = {
    title: String;
    sub: String;
}

const Subject = ({title, sub}: SubjectProps) =>(
    <header>
        <h1>{title}</h1>
        {sub}
    </header>
)

Subject.defaultProps = {
    title:'!!',
    sub:'11'
}

export default Subject;