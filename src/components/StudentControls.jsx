import React from "react";

const StudentControls = ({
    filter,
    onFilterChange,
    search,
    onSearchChange,
    sortOrder,
    onSortToggle
}) => {
    return (
        <div className="controls">
            { }
            <div className="filters">
                {["all", "pass", "fail"].map((f) => (
                    <button
                        key={f}
                        className={`filter-btn ${filter === f ? "active" : ""}`}
                        onClick={() => onFilterChange(f)}
                    >
                        {f.charAt(0).toUpperCase() + f.slice(1)}
                    </button>
                ))}
            </div>


            <input
                className="input search"
                placeholder="Search by name"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
            />


            <button className="btn sort-btn" onClick={onSortToggle}>
                Sort: {sortOrder === "desc" ? "High → Low" : "Low → High"}
            </button>
        </div>
    );
};

export default StudentControls;
