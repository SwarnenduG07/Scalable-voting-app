"use server"

import { redis } from "@/lib/redis"
import { redirect } from "next/navigation"

export const  creatTopic = async ({topicName}: {topicName: string}) => {
     const regex = /^[a-zA-Z-]+$/
     if(!topicName || topicName.length > 50) {
        return {error:"Name must be between 1 & 50 Chars"}
     }
     if(!regex.test(topicName)) {
        return {error:"Only latters and hypens allowed in name"}
     }
     await redis.sadd("existing-topics", topicName)
     
     redirect(`/${topicName}`)
}