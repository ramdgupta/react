import {v2 as cloudinary} from "@cloudinary/react";
import fs from "fs"
    cloudinary.config({ 
        cloud_name: process.env.CLOUDIANRY_CLOUD_NAME, 
        api_key: process.env.CLOUDIANRY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRATE 
      });
    const uploadOnCloudinary = async(localFilePath)=>{
        try{ 
            if(!localFilePath) return null 
                // upload the file path 
                const response = await  cloudinary.uploader.upload(
                localFilePath, {
                    resource_type:"auto"    
                });
               //file has been uploaded
               console.log("file is uploaded successfully", response.url);
               return response; 
        }
        catch(error){
            fs.unlinkSync(localFilePath) // remove the localy saved temproray file upload the operation faild
            return null;

        }
    }
    export {uploadOnCloudinary};