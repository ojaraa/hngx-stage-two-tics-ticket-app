import {z} from 'zod'

export const ticketSelectionSchema = z.object({
    ticketNumber: z.string().min(1, "Choose the number of tickets").nullable(),
    ticketType: z.object({
        id: z.string(),
        price: z.string(),
        access: z.string(),
      })

})

export const attendeeDetailsSchema = z.object({
    name: z.string().min(4, { message: "Name must be at least 4 characters long" }),
    email: z.string().email({ message: "Enter a valid email address" }),
    specialRequest:  z.string().max(30, "You can only enter a maximum of 30 words").optional(),
    imageURL: z.string().min(4, { message: "Enter an image URL " }),
    attachments: z
    .array(z.unknown())
    .min(1, "Attach a document to record this payment"),

// });
})

export interface AttachmentData {
    lastModified: number;
    lastModifiedDate: Date;
    thumbUrl: string;
    name: string;
    originFileObj: File;
    percent: number;
    size: number;
    type: string;
    uid: string;
  }
  