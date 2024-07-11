import { z } from 'zod'

export const SchemaPasswordReset = z.object({
    email: z.string().email( 'Vous devez saisir un email valide'),
})