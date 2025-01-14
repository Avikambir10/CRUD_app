export default function AddTopic() {
    return (
        <>
            <form className="flex flex-col gap-4 bg-gray-800 p-6 rounded-lg shadow-md">
                <input
                    type="text"
                    placeholder="Topic Title"
                    className="border border-gray-600 bg-gray-900 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="text"
                    placeholder="Topic Description"
                    className="border border-gray-600 bg-gray-900 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button className="bg-green-600 font-bold text-white py-3 px-6 rounded-md hover:bg-green-500 transition w-fit">
                    Add Topic
                </button>
            </form>
        </>
    );
}
