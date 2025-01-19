import Link from "next/link";
import Removebtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/topics", { cache: "no-store" });
        if (!res.ok) {
            throw new Error("Failed");
        }
        return res.json();
    } catch (error) {
        console.error("Failed to fetch topics", error);
    }
};

export default async function TopicsList() {
    const { topics } = await getTopics();

    return (
        <>
            {topics.map((t) => (
                <div
                    key={t._id} // Adding a unique key here
                    className="p-6 border border-gray-700 bg-gray-800 rounded-lg my-4 flex justify-between gap-5 items-start shadow-md"
                >
                    <div>
                        <h2 className="font-bold text-2xl text-blue-400">{t.title}</h2>
                        <div className="text-gray-300">{t.description}</div>
                    </div>

                    <div className="flex gap-3">
                        <Removebtn  id = {t._id} />
                        <Link href={`/edittopic/${t._id}`}>
                            <HiPencilAlt
                                size={25}
                                className="text-blue-400 hover:text-blue-300 transition"
                            />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}
