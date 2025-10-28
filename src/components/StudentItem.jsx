function StudentItem({ student, onDelete }) {
    const passed = student.grade >= 60;
    const statusClass = passed ? 'student-pass' : 'student-fail';

    return (
        <li className={`student-item ${statusClass}`}>
            <span className="student-name">{student.name}</span>
            <span className="student-grade">{student.grade}</span>
            <span className="student-status">{passed ? 'Pass' : 'Fail'}</span>
            <button
                className="delete-btn"
                onClick={() => onDelete(student.id)}
            >
                Delete
            </button>
        </li>
    );
}

export default StudentItem;
