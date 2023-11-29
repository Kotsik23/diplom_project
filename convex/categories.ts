import { query } from "./_generated/server"

export const getCategoriesList = query({
	handler: async ctx => {
		return await ctx.db.query("categories").collect()
	},
})
