import { Button } from './ui/button'
import { Code, Copy, Loader2, Save, Share2 } from 'lucide-react'
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
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from 'sonner'


export const HelperHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [shareData, setShareData] = useState(false);
  const currentlanguage = useSelector((state: RootState) => state.ComplierSlice.currentlanguage)
  const fullCode = useSelector((state: RootState) => state.ComplierSlice.fullCode)

  const { urlId } = useParams();

  useEffect(() => {
    if (urlId) {
      setShareData(true)
    }
    else {
      setShareData(false)
    }
  }, [urlId])

  const handleSaveCode = async () => {
    setLoading(true)
    try {
      const responseData = await axios.post("https://jd-compiler-server.vercel.app/compiler/save", {
        fullCode: fullCode
      })
      console.log(responseData?.data)
      navigate(`/compile/${responseData?.data?.url}`, { replace: true })
    } catch (error) {
      handleError(error)
    }
    finally {
      setLoading(false)
    }
  }
  return (
    <div className='__helper_header h-[50px] bg-black flex items-center p-2 justify-between'>
      <div className='__btn_container flex gap-2 items-center '>
        <Button variant="success" className='flex justify-center items-center gap-1' onClick={handleSaveCode} >{loading ? <>
          <Loader2 className='animate-spin' />saving...</> : (
          <>
            <Save size={14} /> Save</>)}</Button>


        {shareData && (
          <Dialog>
            <DialogTrigger className='whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 flex justify-center items-center gap-1'>
              <Share2 size={14} /> Share
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className='flex justify-center items-center gap-1'><Code /> Share Code</DialogTitle>
                <DialogDescription>
                  <div className="_Code-share flex gap-1 items-center mt-3">
                    <input type="text" className='w-full p-2 rounded bg-slate-800 text-slate-500 select-none' disabled
                      value={window.location.href} />
                    <Button variant={"outline"} onClick={() => {
                      window.navigator.clipboard.writeText(window.location.href)
                      toast("Copy Clipboard Successfully")
                    }}

                    ><Copy size={14} /></Button>
                  </div>
                  <p className='text-center mt-1'>share this URL with your friends to collaborate.</p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}


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
