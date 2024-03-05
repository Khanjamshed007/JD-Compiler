import ReactCodeMirror from '@uiw/react-codemirror';
import React from 'react'
import { noctisLilacInit } from '@uiw/codemirror-theme-noctis-lilac';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { updatedCodeValue } from '@/redux/slices/ComplierSlice';

export default function CodeEditor() {
    const currentlanguage = useSelector((state: RootState) => state.ComplierSlice.currentlanguage)
    const fullCode = useSelector((state: RootState) => state.ComplierSlice.fullCode)
    const dispatch = useDispatch()
    const onChange = React.useCallback((value: string) => {
        dispatch(updatedCodeValue(value))
    }, []);
    return (
        <ReactCodeMirror value={fullCode[currentlanguage]} height="calc(100vh - 60px - 50px)" extensions={[loadLanguage(currentlanguage)!]} onChange={onChange} theme={noctisLilacInit({
            settings: {
                caret: '#c6c6c6',
                fontFamily: 'monospace',
            }
        })} />
    )
}
