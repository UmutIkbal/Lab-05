import { useState } from 'react'
import './styles/lab-styles.css';
import StudentList from './components/StudentList.jsx';
import StudentForm from './components/StudentForm.jsx';
import StudentControls from './components/StudentControls.jsx';
import './App.css'

function App() {
    const initialStudents = [
        { id: 1, name: 'Ali', grade: 85 },
        { id: 2, name: 'Siti', grade: 72 },
        { id: 3, name: 'Rahim', grade: 55 },
    ];


    const [students, setStudents] = useState(initialStudents);
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("desc");

    function deleteStudent(id) {
        setStudents((prev) => prev.filter((s) => s.id !== id));
    }

    const toggleSortOrder = () => {
        setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"));
    };

    const visibleStudents = students
        .filter((s) => {
            if (filter === "pass") return s.grade >= 60;
            if (filter === "fail") return s.grade < 60;
            return true;
        })
        .filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => (sortOrder === "desc" ? b.grade - a.grade : a.grade - b.grade));

    function addStudent(newStudent) {
        // Bu Kısım edge case kısmı hocam 
        const exists = students.some(
            (s) => s.name.toLowerCase() === newStudent.name.toLowerCase()
        );

        if (exists) {
            return false;
        }

        setStudents((prev) => [...prev, newStudent]);
        return true;
    }

    return (
        <div className="app">
            <h1 className="header">Student Dashboard</h1>
            { }
            <StudentForm onAdd={addStudent} />
            <StudentList students={students} onDelete={deleteStudent} />
            <StudentControls
                filter={filter}
                onFilterChange={setFilter}
                search={search}
                onSearchChange={setSearch}
                sortOrder={sortOrder}
                onSortToggle={toggleSortOrder}
            />

            {visibleStudents.length > 0 ? (
                <StudentList students={visibleStudents} onDelete={deleteStudent} />
            ) : (
                <p className="no-data">
                    {search
                        ? `"${search}" ile eşleşen öğrenci yok`
                        : "Henüz öğrenci yok — yukarıdaki formu kullanın."}
                </p>
            )}
        </div>
    );
}

export default App;