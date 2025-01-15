import mongoose, { Schema } from 'mongoose';

const topicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  { timestamps: true }
);

// Avoid overwriting the model if it already exists
const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
