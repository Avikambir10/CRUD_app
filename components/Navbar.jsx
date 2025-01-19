import Link from "next/link";
import { CiSquarePlus } from "react-icons/ci";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-gray-800 px-6 py-4 shadow-lg border-b border-gray-700">
            <Link
                href={'/'}
                className="text-blue-400 text-lg font-semibold hover:text-blue-300 transition"
            >
                CRUD APP
            </Link>
            <Link
                href={'/addtopic'}
                className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-400 transition"
            >
                <CiSquarePlus  size={25}/>
            </Link>
        </nav>
    );
}
