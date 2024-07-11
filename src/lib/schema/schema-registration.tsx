import { z } from 'zod'

const phoneValidation = new RegExp(
    ///^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
    /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
);

export const SchemaRegistration = z.object({

    lastname: z.string().min(3,'Vous devez saisir votre nom'),
    firstname: z.string().min(3,'Vous devez saisir votre prénom'),
    email: z.string().email( 'Vous devez saisir un email valide'),
    password: z.string().min(6, 'Vous devez saisir un mot de passe (min. 6 caracteres)'),
    phoneNumber: z
        .string()
        .min(12, 'Vous devez saisir votre numero de telephone valide à 10 chiffres')
        .max(12)
        .regex(phoneValidation,{message: 'numero invalide'}),

})