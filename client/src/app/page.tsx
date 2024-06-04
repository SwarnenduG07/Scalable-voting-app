import { Star } from 'lucide-react';

import MaxwidthWrapper from "@/components/MaxwidthWrapper";
import { Icons } from "@/components/Icons";
import TopicCreator from "@/components/TopicCreator";
import { redis } from '@/lib/redis';

export default async function Home() {

    const servedRequest = await redis.get("served-requests")


  return (
   <section className="min-h-screen bg-grid-zinc-50">
   <MaxwidthWrapper className="relative pb-24 pt-10 sm:pb-32 lg:pt-24 xl:pt-32 lg:pb-52">
     <div className="hidden lg:block absolute inset-0 top-8">
      { /*circle */}
     </div>

     <div className="px-6 lg:px-0 lg:pt-4">
      <div className="relative mx-autoo text-center flex flex-col items-center">
        <h1 className="relative leading-sung w-fit tracking-tight text-balance mt-16 font-bold text-gray-900 text-5xl md:text-6xl">
          what do you{" "}
          <span className="whitespace-nowrap">
            th
            <span className="relative text-blue-500">
              i
              <span className="absolute inset-x-0 -top-1.5 -translate-x-3">
              <Icons.brain className="h-7 w-7 md:h-8 md:w-8"/>
          </span>
          </span>
          nk
          </span>{" "}
          about...
         </h1>

        <TopicCreator/>
          <div className="mt-12 flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="flex flex-col gap-1 justify-between items-center sm:items-start">
                      <div className="flex gap-0.5">
                     <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                     <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                     <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                     <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                     <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                    </div>  
                    <p>
                      <span className='font-semibold'>
                        {Math.ceil(Number(servedRequest) / 10) * 10}
                      </span>
                      Served Request
                    </p>
                 </div>
             </div>
          </div>
      </div>
   </MaxwidthWrapper>
 </section>
       
  )
}

