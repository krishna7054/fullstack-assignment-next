import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { StudentsTable } from "@/components/students-table"
import { Plus } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="ml-60">
        <Header />
        <main className="p-6 my-20 rounded-md bg-white mx-3 ">
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-4">
              <Select defaultValue="2024-25">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024-25">AY 2024-25</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="cbse9">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cbse9">CBSE 9</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button>
              <Plus className="animate-pulse"/>Add new Student</Button>
          </div>
          <StudentsTable />
        </main>
      </div>
    </div>
  )
}

