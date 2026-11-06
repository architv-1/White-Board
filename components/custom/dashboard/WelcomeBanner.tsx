"use client"
import { Button } from "@/components/ui/button"
import { useUser } from '@clerk/nextjs'
import { Sparkle } from "lucide-react"
import React from 'react'
import CreateNewBoardDialog from "./CreateNewBoardDialog"

function WelcomeBanner() {
    const { user } = useUser()
    return (
        <div>
            <div className="p-10 border rounded-xl">
                <h2 className='text-2xl font-bold'>Welcome Back, {user?.fullName}</h2>
                <p> Let's Start creating</p>

                <div className="mt-5 flex items-center gap-2">
                    <CreateNewBoardDialog/>
                    <Button size="lg" variant="outline"><Sparkle/>AI Helper</Button>
                </div>
            </div>
        </div>
    )
}

export default WelcomeBanner