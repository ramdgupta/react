import mongoose, { Schema } from 'mongoose';
import mongooseAggregatePaginatev2 from 'mongoose-aggregate-paginate-v2';
const videoSchema = new mongoose.Schema({
    videoFile:{
        type:String, // cloudinary url
        required:true
    },
    thumbnail:{
        type:String, // cloudinary url
        required:true
    },
    title:{
        type:String, 
        required:true
    },
    description:{
        type:String, 
        required:true
    },
    duration:{
        type:Number, 
        required:true
    },
    views:{
        type:Number, 
        default:0
    },
    views:{
        type:Number, 
        default:0
    },
    isPublished:{
        type:Boolean, 
        default:true
    },
    publisher:{
        type:Schema.Types.ObjectId, 
        ref:"User"
    },
}, {timestamps:true});
videoSchema.plugin(mongooseAggregatePaginatev2);
export const Video = mongoose.model("Video", videoSchema);