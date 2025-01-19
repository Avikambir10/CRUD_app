import EditTopicForm from "@/components/EditTopicform";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching topic:", error);
    return null; // Return null if the fetch fails
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;

  // Loading state
  const topicData = await getTopicById(id);

  if (!topicData || !topicData.topic) {
    return (
      <div className="text-white p-6 text-center bg-black rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Error loading topic.</h2>
        <p>Please try again later.</p>
      </div>
    );
  }

  const { title, description } = topicData.topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}
