import React, {SyntheticEvent} from "react";
import {ContentType} from "../App";

type ContentListProps ={
    data : ContentType[];
    onChangePage: (id: number)=>void;
}

const ContentList  = ({data, onChangePage}:ContentListProps) => {
    var lists = [];
    var i = 0;
    while(i < data.length) {
        lists.push(
            <li key={data[i].id}>
                <a
                    href={"/content/"+data[i].id}
                    data-id = {data[i].id}
                    onClick={function(id :number, e : React.SyntheticEvent<EventTarget>){
                        e.preventDefault(); // 다른 페이지로 가지 않게 함.
                        onChangePage(id);
                    }.bind(this, data[i].id)}>
                    {data[i].title}</a>
            </li>);
        i = i + 1;
    }
    return (
        <nav>
            <ul>
                {lists}
            </ul>
        </nav>
    )
}

export default ContentList;