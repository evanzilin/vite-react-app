import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import { Plus } from "lucide-react"

export default function Page() {
  return (
    <main>
        
        <SidebarProvider>
        <SiteHeader />
        <div className="flex">
        <AppSidebar variant="inset" />
            <SidebarInset>
                <div className="flex px-6 align-middle justify-center border-b border-[#F5F5F5] mb-14.75">
                        <div className="w-full max-w-270">
                            <div className="h-16  flex items-center justify-between">
                                <div className="flex items-center gap-2.75">
                                <h1 className="text-lg font-semibold leading-6 text-dark">Lorem ipsum</h1>
                                <span className="lg:block hidden text-sm font-medium text-[#b5b5b5]">(12)</span>
                                <span className="lg:block hidden text-sm font-medium text-dark">
                                    Lorem ipsum dolar sit amet
                                </span>
                                </div>
                                <button className="h-9.5 px-3.5 bg-dark rounded-lg flex items-center gap-2 text-white text-sm hover:opacity-90 transition-opacity">
                                <Plus className="w-5 h-5" strokeWidth={1.5} />
                                <span className="md:block hidden">Lorem ipsum</span>
                                </button>
                            </div>
                            <span className="lg:hidden block text-sm font-medium text-[#b5b5b5]">(12)</span>
                            <span className="lg:hidden block text-sm font-medium text-dark my-3">
                                Lorem ipsum dolar sit amet
                            </span>
                        </div>
                </div>
                <div className="flex-1 px-6 align-middle flex justify-center">
                    <div className="w-full max-w-270">
                        {/* Content Area */}  
                        <textarea
                            disabled
                            className="cursor-pointer resize-none border-0 w-full p-4 rounded-lg bg-box-gray x-lg:w-[1080px] md:h-53.25"
                            rows={10}
                        />
                        {/* Alternatively, using the Textarea component */}
                        {/* <Textarea placeholder="Enter text here..." rows={10} /> */} 
                    </div> 
                </div>
            </SidebarInset>
        </div>
        </SidebarProvider>
    </main>
  )
}
