import {ContentType} from "../App";
import React, {useState} from "react";

type UpdateContentProps = {
    data: ContentType;
    onSubmitUpdate: (_id: number, _title:string, _desc:string) => void;
}

const UpdateContent = ({data, onSubmitUpdate}:UpdateContentProps) => {
    // props는 불변이기 때문에 form element 안에서 수정을 하려면 state로 교체를 해야한다.
    const [updateContent, setUpdateContent] = useState<ContentType>({
        id: data.id,
        title:data.title,
        desc:data.desc
    })

    const onChangeTitle = (_title:string) => {
        setUpdateContent({id:data.id, title:_title, desc:updateContent.desc})
    }

    const onChangeDesc = (_desc:string) => {
        setUpdateContent({id:data.id, title:updateContent.title, desc:_desc})
    }

    return (
        <article>
            <h2>Update</h2>
            <form action={"/update_process"} method={"post"}
                  onSubmit={function (e: React.SyntheticEvent<EventTarget>){
                      e.preventDefault();
                      const formInput = (e.target as HTMLFormElement)[0] as HTMLInputElement;
                      const formTextArea = (e.target as HTMLFormElement)[1] as HTMLTextAreaElement;

                      console.log("id : " + data.id)
                      console.log("title : " + formInput.value)
                      console.log("desc : " + formTextArea.value)
                      onSubmitUpdate(data.id, formInput.value, formTextArea.value)

                  }.bind(this)}
            >
                <p>
                    <input
                        type={"text"}
                        name={"title"}
                        value={updateContent.title}
                        onChange={(e: React.SyntheticEvent<EventTarget>)=>{
                            const inputValue = (e.target as HTMLInputElement).value;
                            console.log("[input:title] : "+inputValue);
                            console.log("updateContent State : " + updateContent);
                            onChangeTitle(inputValue);
                        }}>
                    </input></p>
                <p>
                <textarea
                    name={"desc"}
                    value={updateContent.desc}
                    onChange={(e: React.SyntheticEvent<EventTarget>)=>{
                        const inputValue = (e.target as HTMLInputElement).value;
                        console.log("[textArea:desc] : "+inputValue);
                        console.log("updateContent State : " + updateContent);
                        onChangeDesc(inputValue);
                    }}
                >
                </textarea>
                </p>
                <p>
                    <input
                        type={"submit"}>
                    </input>
                </p>
            </form>
        </article>
    )
}

export default UpdateContent;