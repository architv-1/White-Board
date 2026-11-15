"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Loader2, Plus } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/toast'
import axios from 'axios'
import { useRouter } from 'next/navigation'
function CreateNewBoardDialog() {

    const [workspaceName, setWorkspaceName] = useState("")
    const [loading, setLoading] = useState(false)
    const [dialog, setDialog] = useState(false)
    const route = useRouter()

    const handleCreateBoard = async() => {
        if (workspaceName.trim() === "" || workspaceName.length > 30) {
            toast.add({
                type: "error",
                title: "Invalid Workspace Name",
                description: "Please Enter Valid Workspace Name (1-30 character)",
            })
            return 
        }
        setLoading(true)
        const projectId = crypto.randomUUID()
        const result = await axios.post("/api/projects",{
            projectName: workspaceName,
            projectId: projectId
        })

        console.log(result?.data)
        toast.add({
            type: "success",
            title: "New Workspace Created",
        })
        setLoading(false)
        setDialog(false)
        route.push(`/workspace/${projectId}`)
    }
    return (
        <div>
            <Dialog open={dialog} onOpenChange={setDialog}>
                <DialogTrigger
                    render={
                        <Button className="w-full">
                            <Plus />Create New Board
                        </Button>
                    }
                />
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-lg font-bold">WhiteBoard Workspace Title</DialogTitle>

                    </DialogHeader>
                    <div className="flex flex-col gap-5">
                        <label className='text-gray-600'>Enter WhiteBoard Workspace Name</label>
                        <Input placeholder="WhiteBoard Name" onChange={(e) => setWorkspaceName(e.target.value)} />
                    </div>

                    <DialogFooter>
                        <DialogClose render={<Button variant="outline">Cancel</Button>} />
                        <Button disabled={workspaceName?.length===0 || loading} onClick={handleCreateBoard}>
                            {loading&& <Loader2 className="mr-2 h-4 w-4 animate-spin" /> }Create
                        </Button>
                    </DialogFooter>
                </DialogContent>

            </Dialog>
        </div>
    )
}

export default CreateNewBoardDialog