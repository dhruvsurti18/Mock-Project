import React from "react";

export default function Home({ employees }) {
    return (
        <div className="cards">
            {employees.map((e) => (
                <div className="card" key={e.id}>
                    <div className="profile-img-wrap">
                        <img src={e.photo} alt="profile" />
                    </div>
                    <h3>{e.name}</h3>
                    <p>{e.email}</p>
                    <p>{e.phone}</p>
                </div>
            ))}
        </div>
    );
}
