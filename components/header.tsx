import { Search, HelpCircle, MessageSquare, Bell, Settings2 } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-60 flex h-16 items-center px-4 border-b bg-white z-10">
      <div className="flex flex-1 items-center space-x-4">
        <div className="relative w-96">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search your course" className="pl-8" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <HelpCircle className="h-6 w-6" />
        </div>
        <div className="relative">
          <MessageSquare className="h-6 w-6" />
          <Badge variant="destructive" className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full p-0 flex items-center justify-center">
          </Badge>
        </div>
        <div className="relative">
          <Settings2 className="h-6 w-6" />
        </div>
        <div className="relative">
          <Bell className="h-6 w-6" />
          <Badge variant="destructive" className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full p-0 flex items-center justify-center">
          </Badge>
        </div>
        <Avatar>
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>
        <div className="font-medium">Adeline H. Dancy</div>
      </div>
    </header>
  )
}

