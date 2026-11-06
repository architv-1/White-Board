"use client"
import { Button } from "@/components/ui/button"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Progress } from "@/components/ui/progress"
import { Archive, Layout, LayoutGrid, Settings, Sparkle, User } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useUser } from "@clerk/nextjs"

export function AppSidebar() {
    const path = usePathname()
    const { user } = useUser()
    return (
        <Sidebar>
            <SidebarHeader>
                <div className="flex items-center gap-2">

                    <Image src="/logo.svg" alt="Logo" width={50} height={50} />
                    <h2 className="text-xl font-bold">Tahalka</h2>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <Button>+ Create New Board</Button>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>My label</SidebarGroupLabel>
                    <SidebarMenuButton className="p-5" isActive={path === '/dashboard'}>
                        <div className="flex">
                            <LayoutGrid />
                            <span>All Files</span>
                        </div>
                    </SidebarMenuButton>
                    <SidebarMenuButton className="mt-2 p-5" isActive={path === '/shared-files'}>
                        <div className="flex">
                            <User />
                            <span>Shared</span>
                        </div>
                    </SidebarMenuButton>
                    <SidebarMenuButton className="mt-2 p-5" isActive={path === '/archived'}>
                        <div className="flex">
                            <Archive />
                            <span>Archived</span>
                        </div>
                    </SidebarMenuButton>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Others
                    </SidebarGroupLabel>
                    <SidebarMenuButton className="mt-2 p-5" isActive={path === '/ai'}>
                        <div className="flex">
                            <Sparkle />
                            <span>AI Helper</span>
                        </div>
                    </SidebarMenuButton>
                    <SidebarMenuButton className="mt-2 p-5" isActive={path === '/setting'}>
                        <div className="flex">
                            <Settings />
                            <span>Setting</span>
                        </div>
                    </SidebarMenuButton>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <Button>+ Create New Board</Button>
                <div className="p-4 my-3 ">
                    <h2 className="text-sm flex justify-between">2 files created <span>Total 3</span></h2>
                    <Progress value={66} className="h-2 mt-2" />
                </div>
                <div className="flex items-center gap-2 p-4   rounded-md">
                    <Image src={user?.imageUrl ?? ''} alt="Logo" width={50} height={50}  className="rounded-full"/>
                    <h2>{user?.firstName} {user?.lastName}</h2>
                </div>

            </SidebarFooter>
        </Sidebar>
    )
}