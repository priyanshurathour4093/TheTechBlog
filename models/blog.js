const { Schema, model } = require("mongoose");

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    coverImageURL: {
      type: String,
    },
    tags: {
      type: [String], // Example: ["React", "Node.js", "MongoDB"]
      default: [],
    },
    category: {
      type: String, // Example: "Web Development", "AI", "Cloud"
      required: false,
    },
    links: {
      github: { type: String },
      demo: { type: String },
    },
    views: {
      type: Number,
      default: 0,
    },
    profileImageURL: {
      type: String,
      default: "/images/anime-def.jpg",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const Blog = model("blog", blogSchema);

module.exports = Blog;
