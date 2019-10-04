import React, {useState} from 'react'
import InputArea from './Textarea';
// import RemarkLowlight from 'remark-react-lowlight'
// import js from 'highlight.js/lib/languages/javascript'
// import hljs from 'highlight.js';
import Highlight from 'react-highlight'

import githubSchema from 'hast-util-sanitize/lib/github.json';

const remark = require('remark');
const reactRenderer = require('remark-react');


const schema = Object.assign({}, githubSchema, {
    attributes: Object.assign({}, githubSchema.attributes, {
        code: [
            ...(githubSchema.attributes.code || []),
            'className'
        ]
    })
});

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
                <div className="markdown-body">
                    {remark().use(reactRenderer, {
                        sanitize: false,
                        // remarkReactComponents: {
                        //     code: Highlight
                        // }
                    }).processSync(text).contents}
                </div>
            </div>
        </div>
    )
};

export default Editor;
