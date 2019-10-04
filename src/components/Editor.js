import React, {useState} from 'react'
import InputArea from './Textarea';
import 'github-markdown-css';


const remark = require('remark');
const reactRenderer = require('remark-react');


const containerStyle = {
    display: "flex",
    justifyContent: "space-around"
};

const boxStyle = {
    height: "100vh",
    width: "50vw"
};

const Editor = () => {
    const [text, setText] = useState('# This is a header\n\nAnd this is a paragraph\n\n```javascript=\n a=1\n```\n\n > aaa');

    const handleChange = e => {
        setText(e.target.value);
    };
    return (
        <div style={containerStyle}>
            <InputArea handleChange={handleChange} value={text} style={{...boxStyle, fontSize: "20px"}}/>
            <div style={boxStyle}>
                <div className={"markdown-body"}>
                    {remark().use(reactRenderer, {
                        sanitize: false,
                    }).processSync(text).contents}
                </div>
            </div>
        </div>
    )
};

export default Editor;
