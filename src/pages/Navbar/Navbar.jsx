import { Button } from "@/components/ui/button"
import { CreateProject } from "../Project/CreateProject"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { PersonIcon } from "@radix-ui/react-icons"
import { useNavigate } from "react-router-dom"
export const Navbar = () => {
    const navigate=useNavigate()
  return (
    <div className='border-b py-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
             <p onClick={()=>navigate("/")} className='cursor-pointer pl-3'>Project Managament </p>
             <Dialog>
               <DialogTrigger>
                    <Button variant="ghost">
                        New Project
                    </Button>
               </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        Create New Project
                    </DialogHeader>
                    <CreateProject/>
                </DialogContent>
             </Dialog>
             <Button onClick={()=>navigate("/upgrade_plan")} variant="ghost">Upgrade</Button>
        </div>
        <div className="flex gap-3 items-center">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant="outline" size="icon" className="rounded-full border-2 border-gray-500">
                        <PersonIcon/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <p className="pr-3">Botir</p>
        </div>
    </div>
  )
}
