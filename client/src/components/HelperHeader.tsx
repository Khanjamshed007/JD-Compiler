import { Button } from './ui/button'
import { Save, Share2 } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useDispatch, useSelector } from 'react-redux'
import { CompilerInitialState, updatedLanguage } from '@/redux/slices/ComplierSlice'
import { RootState } from '@/redux/store'
import { handleError } from '@/utils/handleError'
import axios from "axios";

export const HelperHeader = () => {
  const dispatch = useDispatch()
  const currentlanguage = useSelector((state: RootState) => state.ComplierSlice.currentlanguage)
  const fullCode = useSelector((state: RootState) => state.ComplierSlice.fullCode)

  const handleSaveCode = async () => {
    try {
      const responseData = await axios.post("http://localhost:4000/compiler/save", {
        fullCode: fullCode
      })
      console.log(responseData?.data)
    } catch (error) {
      handleError(error)
    }
  }
  return (
    <div className='__helper_header h-[50px] bg-black flex items-center p-2 justify-between'>
      <div className='__btn_container flex gap-2 items-center '>
        <Button variant="success" className='flex justify-center items-center gap-1'><Save size={14} onClick={handleSaveCode} /> Save</Button>
        <Button variant="secondary" className='flex justify-center items-center gap-1'><Share2 size={14} /> Share</Button>
      </div>
      <div className="__tab_switcher flex justify-center items-center gap-1">
        <small>Current Language</small>
        <Select defaultValue={currentlanguage} onValueChange={(value) => dispatch(updatedLanguage(value as CompilerInitialState["currentlanguage"]))}>
          <SelectTrigger className="w-[120px] bg-gray-800 outline-none focus:ring-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="javascript">JavaScript</SelectItem>
          </SelectContent>
        </Select>

      </div>
    </div>
  )
}
