import React, {useState} from 'react';
import './App.css';
import Subject from "./components/Subject";
import Control from "./components/Control";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import ContentList from "./components/ContentList";
import UpdateContent from "./components/UpdateContent";

export type ContentType = {
    id: number;
    title: string;
    desc: string;
}



const App : React.FC = () =>{
    const [mode, setMode] = useState<string>("welcome");
    const [contentType, setContentType] = useState<ContentType>({
        id: 1,
        title:"Read Content",
        desc:"this is read Content"
    })
    const [contents, setContents] = useState<ContentType[]>([contentType])
    const [selectedContentId, setSelectedContentId] = useState<number>(1)
    const addContent = (content:ContentType) => {
        setContents([
            ...contents,
            content
                    ])
    }

    const onChangeMode = (_mode:string) => {
        setMode(_mode)
    }

    const onSubmitCreate = (_title:string, _desc:string) => {
        // add content to state.contents
        console.log("[App.js] : title : "+_title)
        console.log("[App.js] : desc : "+_desc)
        addContent({id:contents.length + 1, title: _title, desc: _desc})
    }

    const onSubmitUpdate = (_id: number, _title:string, _desc:string) => {
        // update content to state.contents
        console.log("[App.js] : id : "+_id)
        console.log("[App.js] : title : "+_title)
        console.log("[App.js] : desc : "+_desc)
        var _contents = Array.from(contents)
        // var i = 0;
        // while(i < _contents.length) {
        //     if(_contents[i].id === _id) {
        //         _contents[i] = {id:_id, title:_title, desc:_desc};
        //         break;
        //     }
        //     i = i+1;
        // }
        _contents.splice(_id-1, 1, {id:_id, title:_title, desc:_desc})
        setContents(_contents)
        console.log("[App.js] update : " + contents)
    }

    const onChangePage = (id: number) => {
        setMode('read');
        setSelectedContentId(id);
    }

    const onSubmitDelete = (_id: number) => {
        var _contents = Array.from(contents)
        _contents.splice(_id,1)
        console.log("[App.js] delete : " + contents)
        setContents(_contents)
    }



    let _article

    if(mode === 'welcome'){
        _article = <ReadContent title={contentType.title} desc={contentType.desc} />
    } else if (mode==='read'){
        var i = 0;
        while(i<contents.length) {
            var data = contents[i];
            if(data.id===selectedContentId) {
                _article = <ReadContent title={data.title} desc={data.desc} />
                break;
            }
            i = i+1
        }
    } else if (mode === 'create') {
        _article = <CreateContent onSubmitCreate={onSubmitCreate}/>
    } else if (mode === 'update') {
        _article = <UpdateContent data={contents[selectedContentId-1]} onSubmitUpdate={onSubmitUpdate}/>
    } else if (mode === 'delete') {
        onSubmitDelete(selectedContentId-1)
        setMode('read')
    }


    return(
      <div className="App">
        <Subject title={"WEB"} sub={"World Wide Web!!"}/>
        <ContentList data={contents} onChangePage={onChangePage} ></ContentList>
          <Control
            onChangeMode={onChangeMode}
        />
          {_article}
      </div>
  )
}

export default App;
