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
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      
      const supabase = createClient();
      const { data, error } = await supabase.from("Student").select("*");

      if (error) {
        console.error("Error fetching students:", error);
      } else {
        setStudents(data);
      }
    };

    fetchStudents();
  }, []);

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      year: "numeric", 
      month: "short", 
      day: "numeric" 
    };
    return date.toLocaleDateString("en-GB", options);
  };

  const formatDateTime = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    
    let formattedDate = date.toLocaleString("en-GB", options);
    formattedDate = formattedDate.replace(/(am|pm)/i, (match) => match.toUpperCase());
    return formattedDate;
  };

  return (
    <div className="overflow-x-auto">
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Student Name</TableHead>
            <TableHead>Cohort</TableHead>
            <TableHead>Courses</TableHead>
            <TableHead>Date Joined</TableHead>
            <TableHead>Last Login</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student, index) => (
            <TableRow key={index} className="  md:table-row">
              <TableCell className="text-sm md:text-lg font-normal">
                {student.studentName}
              </TableCell>
              <TableCell className="text-sm md:text-lg">{student.cohort}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-2 text-sm md:text-lg md:-mr-24">
                  {student.courses.map((course, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1 bg-slate-100 rounded-md px-2 py-1"
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
              <TableCell className="text-sm md:text-lg">{formatDate(student.dateJoined)}</TableCell>
              <TableCell className="text-sm md:text-lg">{formatDateTime(student.lastLogin)}</TableCell>
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
