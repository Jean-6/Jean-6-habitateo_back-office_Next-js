import { z } from 'zod'

export const SchemaAdSearchFormCriteriaMin = z.object({
    project: z.string().min( 12,'Vous devez saisir un email valide'),
    locality: z.string().min(6, 'Vous devez saisir un mot de passe (min. 6 caracteres)'),
})