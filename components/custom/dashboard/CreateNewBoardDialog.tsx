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
import { Plus } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/toast'
function CreateNewBoardDialog() {

    const [workspaceName, setWorkspaceName] = useState("")

    const handleCreateBoard = () => {
        if (workspaceName.trim() === "" || workspaceName.length > 30) {
            toast.add({
                type: "error",
                title: "Invalid Workspace Name",
                description: "Please Enter Valid Workspace Name (1-30 character)",
            })
        }
    }
    return (
        <div>
            <Dialog>
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
                        <Button disabled={workspaceName?.length===0} onClick={handleCreateBoard}>Create</Button>
                    </DialogFooter>
                </DialogContent>

            </Dialog>
        </div>
    )
}

export default CreateNewBoardDialog