import {z} from "zod"


//validation for adding note to page
export const createNoteSchema = z.object({
    title: z.string().min(1, {message:"Title is required"}),
    content: z.string().optional()
})

export type CreateNoteSchema = z.infer<typeof createNoteSchema>


// Validation for updating an existing note
export const updateNoteSchema = createNoteSchema.extend({
    id: z.string().min(1),
})


//validation for deleting an existing note
export const deleteNoteSchema = z.object({
    id: z.string().min(1),

})