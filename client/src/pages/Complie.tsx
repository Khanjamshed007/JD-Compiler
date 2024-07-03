import CodeEditor from "@/components/CodeEditor";
import { HelperHeader } from "@/components/HelperHeader";
import RenderCode from "@/components/RenderCode";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { updateFullCode } from "@/redux/slices/ComplierSlice";
import { handleError } from "@/utils/handleError";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import './style.css'

const Complie = () => {
  const { urlId } = useParams();
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const loadCode = async () => {
    try {
      const response = await axios.post("https://jd-compiler-server.vercel.app/compiler/load", {
        urlId: urlId
      });
      dispatch(updateFullCode(response?.data?.fullCode));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error?.response?.status === 500) {
          toast("Invalid URL, Default Code Loaded");
        }
      }
      handleError(error);
    }
  };

  useEffect(() => {
    if (urlId) {
      loadCode();
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [urlId]);

  return (
    <div className="h-[calc(100vh-60px)] w-full">
      <ResizablePanelGroup direction={isMobile ? "vertical" : "horizontal"}>
        <ResizablePanel className="min-w-[350px]" defaultSize={50}>
          <HelperHeader />
          <CodeEditor />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel className="min-w-[350px]" defaultSize={50}>
          <RenderCode />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Complie;
