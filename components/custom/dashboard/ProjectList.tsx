"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'
import CreateNewBoardDialog from './CreateNewBoardDialog'

function ProjectList() {
    const [projectList , setPrijectList] = useState([])
  return (
    <div>
        {
            projectList.length===0?(
                // Empty State
                <div className=" flex flex-col items-center p-10 border rounded-xl mt-5 gap-3">
                    <Image src="/Folder.svg" alt="Folder" height={100} width={100} />
                    <h2 className='text-xl font-bold'>No Boards Found!</h2>
                    <CreateNewBoardDialog/>
                </div>
            ):
            // Project List
            <div className="">

            </div>
        }
    </div>
  )
}

export default ProjectList