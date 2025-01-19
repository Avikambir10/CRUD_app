import Link from "next/link";
import { CiSquarePlus } from "react-icons/ci";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-black px-6 py-4 border-b border-gray-800">
            <Link
                href={'/'}
                className="text-white text-lg font-medium tracking-wide hover:text-gray-400 transition duration-300"
            >
                CRUD APP
            </Link>
            <Link
                href={'/addtopic'}
                className="flex items-center space-x-2 bg-gray-900 text-white px-5 py-2 rounded-full font-medium hover:bg-gray-700 transition duration-300"
            >
                <CiSquarePlus size={20} />
                
            </Link>
        </nav>
    );
}
