"use client"
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";


export default function Removebtn({ id }) {

    const router = useRouter()
    const removeTopic = async () => {


        const confirmed = confirm('Are you Sure?');

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                router.refresh();
            }
        }
    }
    return (
        <>
            <button onClick={removeTopic} className="text-red-600">
                <HiOutlineTrash size={25} />
            </button>
        </>
    )
}