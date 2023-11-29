import { mutation, query } from "./_generated/server"
import { authorFields } from "./schema"
import { ConvexError, v } from "convex/values"
import { paginationOptsValidator } from "convex/server"

export const getAll = query({
	args: {
		paginationOpts: paginationOptsValidator,
	},
	handler: async (ctx, args) => {
		return await ctx.db.query("author").order("desc").paginate(args.paginationOpts)
	},
})

export const getByUserId = query({
	args: {
		userId: authorFields.userId,
	},
	handler: async (ctx, args) => {
		return ctx.db
			.query("author")
			.withIndex("by_userId", q => q.eq("userId", args.userId))
			.unique()
	},
})

export const create = mutation({
	args: authorFields,
	handler: async (ctx, args) => {
		const identity = await ctx.auth.getUserIdentity()
		if (!identity) {
			throw new ConvexError("Unauthenticated")
		}
		return await ctx.db.insert("author", args)
	},
})

export const update = mutation({
	args: {
		authorId: v.id("author"),
		brand: authorFields.brand,
	},
	handler: async (ctx, args) => {
		const identity = await ctx.auth.getUserIdentity()
		if (!identity) {
			throw new ConvexError("Unauthenticated")
		}
		const { authorId, ...rest } = args

		return await ctx.db.patch(authorId, rest)
	},
})

export const remove = mutation({
	args: {
		authorId: v.id("author"),
	},
	handler: async (ctx, args) => {
		const identity = await ctx.auth.getUserIdentity()
		if (!identity) {
			throw new ConvexError("Unauthenticated")
		}
		return await ctx.db.delete(args.authorId)
	},
})
