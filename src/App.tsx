import React, {useState} from 'react';
import './App.css';
import Subject from "./components/Subject";
import Control from "./components/Control";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import ContentList from "./components/ContentList";

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

    const onChangePage = (id: number) => {
        setMode('read');
        setSelectedContentId(id);
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