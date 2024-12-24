"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus } from "lucide-react";
import { createClient } from "@/utils/supabase/client"; // Ensure this is the correct path

const courses = [
  { id: "cbse-9-science", label: "CBSE 9 Science" },
  { id: "cbse-9-math", label: "CBSE 9 Math" },
  { id: "cbse-9-english", label: "CBSE 9 English" },
  { id: "cbse-9-social", label: "CBSE 9 Social Studies" },
];

export function AddStudentForm() {
  const [open, setOpen] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [cohort, setCohort] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const studentData = {
        studentName: formData.get("name"),
      cohort,
      courses: selectedCourses,
      dateJoined: formData.get("date"),
    };

    // Insert student data into Supabase
    try {
        
      const supabase = createClient();
      const { error } = await supabase.from("Student").insert([studentData]);
      if (error) throw error;
      console.log("Student added successfully:", studentData);
      setOpen(false); // Close the modal
    } catch (err) {
      console.error("Error adding student:", err);
    }
  };

  const handleCourseChange = (courseId: string) => {
    setSelectedCourses((prev) =>
      prev.includes(courseId) ? prev.filter((id) => id !== courseId) : [...prev, courseId]
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add new Student
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new Student</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" name="name" className="col-span-3" required />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="cohort" className="text-right">
              Cohort
            </Label>
            <Select onValueChange={setCohort} required>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select cohort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AY 2024-25">AY 2024-25</SelectItem>
                <SelectItem value="AY 2025-26">AY 2025-26</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label className="text-right">Courses</Label>
            <div className="col-span-3 space-y-2">
              {courses.map((course) => (
                <div key={course.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={course.id}
                    checked={selectedCourses.includes(course.id)}
                    onCheckedChange={() => handleCourseChange(course.id)}
                  />
                  <Label htmlFor={course.id}>{course.label}</Label>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date Joining
            </Label>
            <Input id="date" name="date" type="date" className="col-span-3 " required />
          </div>
          
          <Button onClick={()=>window.location.reload()} type="submit" className="ml-auto">
            Add Student
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
