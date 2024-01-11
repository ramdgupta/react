import {asyncHandler} from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async(req, res)=>{
    // res.status(200).json({
    //     message:"Chai and code"
    // })
    // get user detail  from frontend
    // validation -not empty
    // check if user already exist
    // check for images and check for avatar
    // upload them cloudanry , check avtar
    // create user object - create entry in db
    // remove password and refresh token filed from response
    // check for user creation 
    // if user creation success send response
    // else send error message
    const {fullName, email, username, password} = req.body
    console.log("email:", email, "password:", password)
})

export {registerUser}
