import React from "react";

type ReadContentProps = {
    title: string;
    desc: string;
}

const ReadContent = ({title, desc}:ReadContentProps) => (
    <div>
        <article>
            <h2>{title}</h2>
            {desc}
        </article>
    </div>
)

ReadContent.defaultProps ={
    title:"Read Content",
    desc:"this is read Content"
}

export default ReadContent;