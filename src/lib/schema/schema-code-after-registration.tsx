import { z } from 'zod'

export const SchemaCodeAfterRegistration = z.object({
    code: z.string()
        .min(6, 'Vous devez entrer un code à 6 caracteres')
        .max(6,'Vous devez entrer un code à 6 caracteres'),
});