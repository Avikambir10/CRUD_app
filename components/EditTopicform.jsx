"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditTopicForm({ id, title, description }) {
    const [newTitle, setnewTitle] = useState(title);
    const [newDescription, setnewDescription] = useState(description);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newTitle, newDescription }),
            });

            if (!res.ok) {
                throw new error('error')
            }
            router.refresh()
            router.push("/")
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-gray-800 p-6 rounded-lg shadow-md">
                <input
                    onChange={(e) => setnewTitle(e.target.value)}
                    value={newTitle}
                    type="text"
                    placeholder="Topic Title"
                    className="border border-gray-600 bg-gray-900 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    onChange={(e) => setnewDescription(e.target.value)}
                    value={newDescription}
                    type="text"
                    placeholder="Topic Description"
                    className="border border-gray-600 bg-gray-900 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button className="bg-green-600 font-bold text-white py-3 px-6 rounded-md hover:bg-green-500 transition w-fit">
                    UPDATE
                </button>
            </form>
        </>
    );
}
