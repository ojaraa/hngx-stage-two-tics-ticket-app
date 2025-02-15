import {z} from 'zod'

export const ticketSelectionSchema = z.object({
    ticketNumber: z.string().min(1, "Choose the number of tickets").nullable(),
    ticketType: z.object({
        id: z.string(),
        price: z.string(),
        access: z.string(),
      }).refine((val) => val.id && val.price && val.access, {
        message: "Please select a ticket type",
        path: ["ticketType"], 
      }),
})

export const attendeeDetailsSchema = z.object({
    name: z.string().min(4, { message: "Name must be at least 4 characters long" }),
    email: z.string().email({ message: "Enter a valid email address" }),
    specialRequest:  z.string().max(30, "You can only enter a maximum of 30 words").optional(),
    imageURL: z.string().min(4, { message: " Upload the image to cloudinary to get an image URL" }),
    attachments: z
    .array(z.unknown())
    .min(1, "Attach a document to record this payment"),
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
  