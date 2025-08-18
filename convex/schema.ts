import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  profile: defineTable({
    username:v.string(),
    data:v.any(),
    user_id:v.string()
  })
    .index("by_username", ["username"])
    .index("by_user_id", ["user_id"]),
});
