import Link from "next/link";
import Removebtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export default function TopicsList() {
    return (
        <>
            <div className="p-6 border border-gray-700 bg-gray-800 rounded-lg my-4 flex justify-between gap-5 items-start shadow-md">
                <div>
                    <h2 className="font-bold text-2xl text-blue-400">Topic Title</h2>
                    <div className="text-gray-300">Topic Description</div>
                </div>

                <div className="flex gap-3">
                    <Removebtn />
                    <Link href={'/edittopic/123'}>
                        <HiPencilAlt
                            size={25}
                            className="text-blue-400 hover:text-blue-300 transition"
                        />
                    </Link>
                </div>
            </div>
        </>
    );
}
