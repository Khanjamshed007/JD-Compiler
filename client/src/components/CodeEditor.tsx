import ReactCodeMirror from '@uiw/react-codemirror';
import React from 'react'
import { noctisLilacInit } from '@uiw/codemirror-theme-noctis-lilac';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

export default function CodeEditor() {
    const [value, setValue] = React.useState("");
    const currentlanguage = useSelector((state: RootState) => state.ComplierSlice.currentlanguage)
    const onChange = React.useCallback((val: any) => {
        console.log('val:', val);
        setValue(val);
    }, []);
    return (
        <ReactCodeMirror value={value} height="100vh" extensions={[loadLanguage(currentlanguage)!]} onChange={onChange} theme={noctisLilacInit({
            settings: {
                caret: '#c6c6c6',
                fontFamily: 'monospace',
            }
        })} />
    )
}
