import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export const authorFields = {
	userId: v.string(),
	brand: v.optional(v.string()),
}

export const categoriesFields = {
	label: v.string(),
	value: v.string(),
}

export default defineSchema({
	author: defineTable(authorFields).index("by_userId", ["userId"]),
	categories: defineTable(categoriesFields),
})
