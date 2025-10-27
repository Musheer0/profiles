// convex/profile.ts
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// helper regex for username validation
const USERNAME_REGEX = /^[a-zA-Z0-9\-_@$]{2,64}$/;

// 🔹 Create Profile
export const create = mutation({
  args: {
    username: v.string(),
    data: v.any(),
  },
  handler: async (ctx, args) => {
    // validate username
    if (!USERNAME_REGEX.test(args.username)) {
      throw new Error(
        "Invalid username: only letters, numbers, -, _, @, $ allowed (no spaces, no dots)."
      );
    }
    const identity = await ctx.auth.getUserIdentity()
    if(!identity) throw new Error("un authorized")
    const alreadyHasProfile = await  ctx.db
      .query("profile")
      .withIndex("by_user_id", (q) => q.eq("user_id", identity.subject))
      .unique();
    if(alreadyHasProfile) throw Error("conflict error")
    const existing = await ctx.db
      .query("profile")
      .withIndex("by_username", (q) => q.eq("username", args.username))
      .unique();
    if (existing) {
      throw new Error("Username already taken.");
    }

    return await ctx.db.insert("profile", {
      user_id: identity?.subject,
      username: args.username,
      data: args.data,
    });
  },
});


export const update = mutation({
  args: {
    data: v.optional(v.any()),

  },
  handler: async (ctx, args) => {
    const identity =await ctx.auth.getUserIdentity()
    if(!identity )throw Error("unauthorized")
    const profile = await ctx.db
      .query("profile")
      .withIndex("by_user_id", (q) => q.eq("user_id", identity.subject))
      .unique();

    if (!profile) throw new Error("Profile not found.");


    return await ctx.db.patch(profile._id, {data:args.data});
  },
});

// 🔹 Get Profile by Username (without user_id)
export const getByUsername = query({
  args: { username: v.string() },
  handler: async (ctx, args) => {
    const profile = await ctx.db
      .query("profile")
      .withIndex("by_username", (q) => q.eq("username", args.username))
      .unique();

    if (!profile) return null;

    const { user_id, ...rest } = profile;
    return rest; // 🚫 never return user_id
  },
});


export const getProfile = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if(!identity) return null
    const profile = await ctx.db
      .query("profile")
      .withIndex("by_user_id", (q) => q.eq("user_id", identity.subject))
      .unique();

    if (!profile) return null;

    const { user_id, ...rest } = profile;
    return rest; // 🚫 never return user_id
  },
});
