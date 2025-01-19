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
                    key={t._id}
                    className="p-8 border border-gray-700 bg-black rounded-lg my-5 flex justify-between items-start shadow-lg transition-transform transform hover:scale-105"
                >
                    <div>
                        <h2 className="font-semibold text-2xl text-white">{t.title}</h2>
                        <p className="text-gray-400">{t.description}</p>
                    </div>

                    <div className="flex gap-4">
                        <Removebtn id={t._id} />
                        <Link href={`/edittopic/${t._id}`}>
                            <HiPencilAlt
                                size={25}
                                className="text-blue-400 hover:text-blue-300 transition duration-300"
                            />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}
