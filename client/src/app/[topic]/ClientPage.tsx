"use client"

import MaxwidthWrapper from "@/components/MaxwidthWrapper";
import { useState } from "react";

interface ClinentPageProps {
    topicName: string
    initialData: { text: string; value: number}
    
}

const ClientPage = ({topicName, initialData}: ClinentPageProps) => {
        const [wrods , setWords] = useState(initialData)
        

        return <div className="w-full flex-col items-center justify-center min-h-screen bg-gird-zinc-50 pb-20">
           <MaxwidthWrapper className="frlx flex-col items-center gap-6 pt-20">
           <h1 className="text-xl4 sm:text-5xl font-bold text-center tracking-tight text-balance">What people think about{" "}
           <span className="text-blue-600">{topicName}</span>:
           </h1>

            <p className="text-sm">(updated in real-time)</p>
           </MaxwidthWrapper>
        </div>
}
export default ClientPage