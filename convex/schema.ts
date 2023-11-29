import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
	categories: defineTable({
		label: v.string(),
		value: v.string(),
	}),
})
