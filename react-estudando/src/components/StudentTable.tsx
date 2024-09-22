import { Student } from "@/types/Student"
import { table } from "console"
import { Span } from "next/dist/trace"

type Props = {
    students: Student[]
}

export const StudentTable = ({students}: Props) => {
    return (
        <table className="w-full border border-gray-600 rounded-md overflow-hidden">
            <thead>
                <tr className="text-left border-b border-gray-600 bg-gray-800">
                    <th className="p-3">Name</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Grade 1</th>
                    <th className="p-3">Grade 2</th>
                    <th className="p-3">Final Grade</th>
                </tr>
            </thead>

            <tbody>
                {students.map(people => (
                    <tr key={people.id} className="text-gray-800 bg-gray-400 border-b border-gray-600">
                        <td className="flex p-3 items-center">
                            <img src={people.avatar} alt={people.name} className="w-10 h-10 rounded-full mr-3"/>
                            <div>
                                <div className="font-bold">{people.name}</div>
                                <div>{people.email}</div>
                            </div>
                        </td>
                        <td className="p-3">
                            {people.active && 
                                <div className="px-2 py-1 inline-block rounded-md border border-green-800 bg-green-600 text-white text-xs">
                                    Active
                                </div>}

                            {!people.active && 
                                <div className="px-2 py-1 inline-block rounded-md border border-red-800 bg-red-600 text-white text-xs">
                                    Inactive
                                </div>}
                        </td>
                        <td className="p-3">{people.grade1.toFixed(1)}</td>
                        <td className="p-3">{people.grade2.toFixed(1)}</td>
                        <td className="p-3 font-bold">
                            {people.active ? (
                                <span className={`${((people.grade1 + people.grade2) / 2).toFixed(1) >= '7' ? "text-green-600" : "text-red-600"}`}>
                                    {((people.grade1 + people.grade2) / 2).toFixed(1)}
                                </span>
                            ) : ("--")}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}