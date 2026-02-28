import { useEffect, useState } from "react";

export default function EmployeeForm({
    employees,
    setEmployees,
    editData,
    setEditData,
    setPage,
}) {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        photo: "",
    });

    useEffect(() => {
        if (editData) setForm(editData);
    }, [editData]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const handleImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () =>
            setForm({ ...form, photo: reader.result });
        if (file) reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editData) {
            setEmployees(
                employees.map((emp) =>
                    emp.id === editData.id ? form : emp
                )
            );
            setEditData(null);
        } else {
            setEmployees([...employees, { ...form, id: Date.now() }]);
        }

        setForm({
            name: "",
            phone: "",
            email: "",
            photo: "",
        });

        setPage("view");
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Employee Input Form</h2>

            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" required />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
            <input type="file" accept="image/*" onChange={handleImage} />

            <button type="submit">
                {editData ? "Update Employee" : "Submit"}
            </button>
        </form>
    );
}
