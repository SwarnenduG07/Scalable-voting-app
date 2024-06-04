import { cn } from "@/lib/utils";
import { ReactNode } from "react";



const maxwidthWrapper = ({className , children}: {className?: string, children: ReactNode}) => {
           return <div className={cn("h-full mx-auto w-full-screen-xl px-2.5 md:px:20" , className)}>
                {children}
           </div>
    }

export default maxwidthWrapper;