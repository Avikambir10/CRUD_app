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
    return null; // Return `null` if fetching fails
  }
};

export default async function EditTopic(context) {
  // Ensure params is awaited if needed
  const { params } = await context; // Explicitly await context if required
  const { id } = params;

  const topicData = await getTopicById(id);

  if (!topicData || !topicData.topic) {
    return <div>Error loading topic. Please try again later.</div>;
  }

  const { title, description } = topicData.topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}
