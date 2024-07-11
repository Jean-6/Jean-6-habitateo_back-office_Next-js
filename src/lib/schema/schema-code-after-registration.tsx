import { z } from 'zod'

export const SchemaCodeAfterRegistration = z.object({
    code: z.string().min(4, 'Vous devez entrer un code à 4 chiffres'),
});