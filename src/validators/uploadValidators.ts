import {z} from 'zod';

// Define the file size and type validation
const maxSize = 2 * 1024 * 1024; // 2MB in bytes
const allowedTypes = ['image/jpeg', 'image/png', "image/jpg"];


export const avatarUploadValidator = z.instanceof(File)
    .refine(file => file.size <= maxSize, {
        message: "Avatar must be less than 2MB in size.",
    })
    .refine(file => allowedTypes.includes(file.type), {
        message: "Avatar must be a JPEG or PNG image.",
    });