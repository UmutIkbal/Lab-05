import React from 'react'
import { useState } from 'react';

function StudentForm({ onAdd }) {
    const [name, setName] = useState('');
    const [grade, setGrade] = useState('');
    const [error, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();


        if (!name.trim()) {
            setError('Name cannot be empty.');
            return;
        }

        const gradeNum = Number(grade);
        if (isNaN(gradeNum) || gradeNum < 0 || gradeNum > 100) {
            setError('Grade must be a number between 0 and 100.');
            return;
        }


        const newStudent = {
            id: Date.now(),
            name: name.trim(),
            grade: gradeNum,
        };


        const added = onAdd(newStudent);

        if (!added) {
            setError('A student with this name already exists.');
            return;
        }


        setName('');
        setGrade('');
        setError('');
    }

    return (
        <form className="student-form" onSubmit={handleSubmit}>
            <input
                className="input"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className="input"
                type="number"
                placeholder="Grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
            />
            <button className="btn" type="submit">
                Add Student
            </button>

            {error && <div className="form-error">{error}</div>}
        </form>
    );
}

export default StudentForm;