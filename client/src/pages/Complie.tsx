import CodeEditor from "@/components/CodeEditor"
import { HelperHeader } from "@/components/HelperHeader"
import RenderCode from "@/components/RenderCode"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

const Complie = () => {
  return (
    <div>

      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel className="h-[calc(100vh-60px)] min-w-[350px]" defaultSize={50}><HelperHeader /><CodeEditor />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel className="h-[calc(100vh-60px)] min-w-[350px]" defaultSize={50}><RenderCode /></ResizablePanel>
      </ResizablePanelGroup>

    </div>
  )
}

export default Complie