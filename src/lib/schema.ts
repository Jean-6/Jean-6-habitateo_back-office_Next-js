import { z } from 'zod'

export const FormDataSchema = z.object({

    //Step1
    project: z.string().min(1,'Project is required'),
    property: z.string().min(1,'Property is required'),
    street: z.string().min(1, 'Street is required'),
    city: z.string().min(1, 'City is required'),
    state: z.string().min(1, 'State is required'),
    zipcode: z.string().min(1, 'Zip is required'),
    country: z.string().min(1, 'Country is required'),

    //Step2

    area: z.string().min(1,'Area is required'),
    room: z.string().min(1,'Room is required'),

    //Step3

})