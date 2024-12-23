import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

interface Student {
  studentName: string;
  cohort: string;
  courses: string[];
  dateJoined: string;
  lastLogin: string;
  status: "Active" | "inactive";
}

export function StudentsTable() {
  // Initialize the state with the correct type
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      // @ts-ignore
      const supabase = createClient(); // Create the Supabase client
      const { data, error } = await supabase.from("Student").select("*");
      
      if (error) {
        console.error("Error fetching students:", error);
      } else {
        // Set the fetched data to the state
        setStudents(data);
      }
    };

    fetchStudents();
  }, []);

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
              <TableCell className="font-normal">{student.studentName}</TableCell>
              <TableCell>{student.cohort}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  {student.courses.map((course, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1 bg-slate-100 rounded-md"
                    >
                      {i % 2 === 0 ? (
                        <img src="st1.png" alt="st1" className="h-5 w-5" />
                      ) : (
                        <img className="h-5 w-5" src="st2.jpg" alt="st2" />
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
                    student.status === "Active" ? "bg-green-500" : "bg-red-500"
                  }`}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
