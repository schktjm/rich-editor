import React, {useState} from 'react'
import InputArea from './Textarea';
import Preview from './Preview';

const containerStyle = {
    display: "flex",
    justifyContent: "space-around"
};

const boxStyle = {
    height: "100vh",
    width: "50vw",
    padding: "20px"
};

const Editor = () => {
    const [text, setText] = useState('# This is a header\n\nAnd this is a paragraph\n\n```javascript=\n a=1\n```\n\n > aaa');

    const handleChange = e => {
        setText(e.target.value);
    };
    return (
        <div style={containerStyle}>
            <InputArea handleChange={handleChange} value={text} style={{...boxStyle, fontSize: "20px"}}/>
            <Preview text={text} style={boxStyle}/>
        </div>
    )
};

export default Editor;
