import { Bell, Search, TicketCheck } from "lucide-react"

export function SiteHeader() {
  return (
    // <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
    // <header className="h-14 bg-dark flex items-center justify-between">
    //   <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
    //     <SidebarTrigger className="-ml-1" />
    //     <Separator
    //       orientation="vertical"
    //       className="mx-2 data-[orientation=vertical]:h-4"
    //     />
    //    <div className="flex-1 max-w-135">
    //     <div className="relative">
    //       <div className="absolute left-3 top-1/2 -translate-y-1/2">
    //         <Search
    //           className="w-4.5 h-4.5 text-gray-text"
    //           strokeWidth={1.5}
    //         />
    //       </div>
    //       <input
    //         type="text"
    //         placeholder="Search"
    //         className="w-full h-9 pl-10 pr-20 bg-dark-secondary border border-dark-tertiary rounded-xl text-sm text-gray-text placeholder:text-gray-text focus:outline-none focus:ring-1 focus:ring-dark-tertiary"
    //       />
    //       <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
    //         <div className="w-5.5 h-5.5 bg-dark-tertiary rounded-lg flex items-center justify-center">
    //           <span className="text-gray-text text-sm font-medium">⌘</span>
    //         </div>
    //         <div className="w-5.5 h-5.5 bg-dark-tertiary rounded-lg flex items-center justify-center">
    //           <span className="text-gray-text text-xs font-medium">K</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Right Side Actions */}
    //   <div className="flex items-center space-x-4 ml-3">
    //     <button className="flex justify-center items-center bg-purple-500 text-sm font-medium text-black px-[17px] py-[6px] rounded-lg hover:bg-purple-600">
    //       <span className="md:block hidden">Account plans</span>
    //       <TicketCheck className="md:hidden block ml-1 w-4 h-4 text-black" />
    //       </button>
    //     <Bell className="w-4 h-4 text-white" />
    //     <button className="text-white text-sm hover:text-gray-300">Support</button>
    //     <div className="w-9 h-9 rounded-full text-sm bg-gray-300 flex items-center justify-center text-black">
    //       KC
    //     </div>
    //   </div>
    //   </div>
    // </header>
    <header className="relative flex items-center justify-between bg-dark h-14">
      <div className="items-center gap-4 md:flex mr-3 hidden">
        <div className="md:ml-30.75 h-5.5 px-2.5 bg-[#303030] rounded-full flex items-center justify-center">
          <span className="text-muted-foreground text-xs  font-medium">beta</span>
        </div>
      </div>
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
      style={{
        background:
          "linear-gradient(90deg, transparent, bg-primary 50%, transparent)",
      }}
    />
    <div className="relative flex max-w-xl items-center h-9 w-135">
      <Search className="absolute left-3 h-4.5 w-4.5 text-muted-foreground" />
      <input
        placeholder="Search"
        className="pl-10 font-aspekta text-[14px] font-medium leading-5 h-9 w-full rounded-full bg-background/5 pr-16 text-sm text-muted-foreground placeholder:text-muted-foreground/60 focus:outline-none"
      />
      {/* Keyboard shortcut badge */}
      <div className="absolute right-3 flex items-center gap-1">
        <div className="text-center rounded-sm bg-background/10 h-5.5 w-5.5 text-muted-foreground">
          <span className="rounded-xl font-aspekta text-[12px] font-medium leading-4">
            ⌘
          </span>
        </div>
        <div className="text-center rounded-sm bg-background/10 h-5.5 w-5.5 text-muted-foreground">
          <span className="rounded-xl font-aspekta text-[12px] font-medium leading-4">
            K
          </span>
        </div>
      </div>
    </div>
    <div className="flex items-center space-x-4 mx-3">
      <button className="flex justify-center items-center bg-primary text-dark px-3.25 py-1.5 rounded-sm">
        <span className="md:block hidden font-semibold leading-5 text-[14px]">Account plans</span>
        <TicketCheck className="md:hidden block ml-1 w-4 h-4 text-dark" />
        </button>
      <Bell className="w-5 h-5 text-white" />
      <button className="text-white text-sm hover:text-gray-300">Support</button>
      <div className="w-9 h-9 rounded-full text-[12px] leading-4 bg-[#d9d9d9] flex items-center justify-center text-dark">
        KC
      </div>
    </div>
      {/* ...rest of header content */}
    </header>
  )
}
