import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";
import dotenv from 'dotenv'
dotenv.config();
config();

cloudinary.config(
    {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        secret_key: process.env.CLOUDINARY_API_SECRET,
    }
)

export default cloudinary;