"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddTopic() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert("Title and Description are required");
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
                router.push("/");
            } else {
                throw new Error("Failed to add topic");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 bg-black p-8 rounded-lg shadow-lg border border-gray-700"
        >
            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                placeholder="Topic Title"
                className="border border-gray-600 bg-gray-900 text-white px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />

            <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                type="text"
                placeholder="Topic Description"
                className="border border-gray-600 bg-gray-900 text-white px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />

            <button
                type="submit"
                className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-500 transition duration-300"
            >
                Add Topic
            </button>
        </form>
    );
}
