
import {BaseSyntheticEvent, ChangeEvent, SyntheticEvent} from "react";

type CreateContentProps = {
    onSubmitCreate: (_title:string, _desc:string) => void;
}

const CreateContent = ({onSubmitCreate}:CreateContentProps)=>(
    <article>
        <h2>create</h2>
        <form action={"/create_process"} method={"post"}
            onSubmit={function (e: React.SyntheticEvent<EventTarget>){
                e.preventDefault();
                // alert("submit!!!");

                const formInput = (e.target as HTMLFormElement)[0] as HTMLInputElement
                const formTextArea = (e.target as HTMLFormElement)[1] as HTMLTextAreaElement
                console.log("title : " + formInput.value)
                console.log("desc : " + formTextArea.value)
                // debugger;
                onSubmitCreate(formInput.value, formTextArea.value)
            }.bind(this)}
        >
            <p><input type={"text"} name={"title"} placeholder={"title"}></input></p>
            <p>
                <textarea name={"desc"} placeholder={"description"}></textarea>
            </p>
            <p>
                <input type={"submit"}></input>
            </p>
        </form>
    </article>
)

export default CreateContent;