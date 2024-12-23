import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { BookOpen, GraduationCap } from 'lucide-react'
  
  interface Student {
    name: string
    cohort: string
    courses: string[]
    dateJoined: string
    lastLogin: string
    status: "active" | "inactive"
  }
  
  const students: Student[] = [
    {
      name: "Anshuman Kashyap",
      cohort: "AY 2024-25",
      courses: ["CBSE 9 Science", "CBSE 9 Math"],
      dateJoined: "17. Nov. 2024",
      lastLogin: "17. Nov. 2024 4:16 PM",
      status: "active"
    },
    {
      name: "Bansi Dadhaniya",
      cohort: "AY 2024-25",
      courses: ["CBSE 9 Science", "CBSE 9 Math"],
      dateJoined: "17. Nov. 2024",
      lastLogin: "17. Nov. 2024 4:16 PM",
      status: "active"
    },
    {
      name: "Chandrika Valotia",
      cohort: "AY 2024-25",
      courses: ["CBSE 9 Science", "CBSE 9 Math"],
      dateJoined: "17. Nov. 2024",
      lastLogin: "17. Nov. 2024 4:16 PM",
      status: "inactive"
    },
    {
      name: "Devang Dave",
      cohort: "AY 2024-25",
      courses: ["CBSE 9 Science", "CBSE 9 Math"],
      dateJoined: "17. Nov. 2024",
      lastLogin: "17. Nov. 2024 4:16 PM",
      status: "active"
    },
    {
      name: "Forum Bhatt",
      cohort: "AY 2024-25",
      courses: ["CBSE 9 Science", "CBSE 9 Math"],
      dateJoined: "17. Nov. 2024",
      lastLogin: "17. Nov. 2024 4:16 PM",
      status: "active"
    },
    {
      name: "Hritika Dattani",
      cohort: "AY 2024-25",
      courses: ["CBSE 9 Science", "CBSE 9 Math"],
      dateJoined: "17. Nov. 2024",
      lastLogin: "17. Nov. 2024 4:16 PM",
      status: "active"
    },
    {
      name: "Khushi Joshi",
      cohort: "AY 2024-25",
      courses: ["CBSE 9 Science", "CBSE 9 Math"],
      dateJoined: "17. Nov. 2024",
      lastLogin: "17. Nov. 2024 4:16 PM",
      status: "active"
    },
    {
      name: "Mansi Patel",
      cohort: "AY 2024-25",
      courses: ["CBSE 9 Science", "CBSE 9 Math"],
      dateJoined: "17. Nov. 2024",
      lastLogin: "17. Nov. 2024 4:16 PM",
      status: "inactive"
    },
    {
      name: "Nita Shah",
      cohort: "AY 2024-25",
      courses: ["CBSE 9 Science", "CBSE 9 Math"],
      dateJoined: "17. Nov. 2024",
      lastLogin: "17. Nov. 2024 4:16 PM",
      status: "active"
    },
    {
      name: "Priyanshu Shrivastava",
      cohort: "AY 2024-25",
      courses: ["CBSE 9 Science", "CBSE 9 Math"],
      dateJoined: "17. Nov. 2024",
      lastLogin: "17. Nov. 2024 4:16 PM",
      status: "inactive"
    },
    {
      name: "Shreya Singhalia",
      cohort: "AY 2024-25",
      courses: ["CBSE 9 Science", "CBSE 9 Math"],
      dateJoined: "17. Nov. 2024",
      lastLogin: "17. Nov. 2024 4:16 PM",
      status: "active"
    },
    {
      name: "Vatsal Trivedi",
      cohort: "AY 2024-25",
      courses: ["CBSE 9 Science", "CBSE 9 Math"],
      dateJoined: "17. Nov. 2024",
      lastLogin: "17. Nov. 2024 4:16 PM",
      status: "inactive"
    },
    {
      name: "Ved Gupta",
      cohort: "AY 2024-25",
      courses: ["CBSE 9 Science", "CBSE 9 Math"],
      dateJoined: "17. Nov. 2024",
      lastLogin: "17. Nov. 2024 4:16 PM",
      status: "active"
    }
  ]
  
  export function StudentsTable() {
    return (
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student Name</TableHead>
              <TableHead>Cohort</TableHead>
              <TableHead>Courses</TableHead>
              <TableHead>Date Joined</TableHead>
              <TableHead>Last login</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={index}>
                <TableCell className="font-normal">{student.name}</TableCell>
                <TableCell>{student.cohort}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    {student.courses.map((course, i) => (
                      <div key={i} className="flex items-center gap-1 bg-slate-100 rounded-md">
                        {course.includes("Science") ? (
                          <BookOpen className="h-4 w-4" />
                        ) : (
                          <GraduationCap className="h-4 w-4" />
                        )}
                        {course}
                      </div>
                    ))}
                  </div>
                </TableCell>
                <TableCell>{student.dateJoined}</TableCell>
                <TableCell>{student.lastLogin}</TableCell>
                <TableCell>
                  <div
                    className={`h-2 w-2 rounded-full ml-4 ${
                      student.status === "active" ? "bg-green-500" : "bg-red-500"
                    }`}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
  
  