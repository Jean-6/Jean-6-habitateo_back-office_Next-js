import { z } from 'zod'

export const SchemaLogin = z.object({
    email: z.string().email( 'Vous devez saisir un email valide'),
    password: z.string().min(6, 'Vous devez saisir un mot de passe (min. 6 caracteres)'),
})