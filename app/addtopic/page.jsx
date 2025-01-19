"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function AddTopic() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!title || !description) {
            alert('Title and Description are required')
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/topics", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ title, description }),
            });
            if (res.ok) {
                router.push('/')
            } else {
                throw new error('failed')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <form onSubmit = {handleSubmit} className="flex flex-col gap-4 bg-gray-800 p-6 rounded-lg shadow-md">
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    placeholder="Topic Title"
                    className="border border-gray-600 bg-gray-900 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    type="text"
                    placeholder="Topic Description"
                    className="border border-gray-600 bg-gray-900 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 rounded-md hover:bg-green-500 transition w-fit">
                    Add Topic
                </button>
            </form>
        </>
    );
}
