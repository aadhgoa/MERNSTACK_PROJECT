import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import  Jwt  from "jsonwebtoken";

//user registration
export const register = async(req,res)=>{



  try {


    //hasing password 
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password,salt);


    const newUser = new User({
      username: req.body.username,
      email:req.body.email,
      password:hash,
      image:req.body.image
    })
    
    await newUser.save()
    res.status(200).json({success:true, message:"successfully created"})

  } catch (error) {
    res.status(500).json({success:false, message:"Failed to create , try again"})

    
  }
}

//user login
export const login = async(req,res)=>{

  const email = req.body.email

  try {
    
      const user = await User.findOne({email})

      //if user doesnt; exist 
      if(!user){
        return res.status(404).json({success:false,message:'User not found'})


      }

      //if user is exist then check th epassword or compare the password
      const checkCorrectPassword = await bcrypt.compare(req.body.password,user.password)

      //if password is incorrect 
      if(!checkCorrectPassword){
        return res.status(401).json({success:false, message:"Incorrect password or email"})

        
      }
      const {password, role, ...rest} = user._doc

      //create jwt token
      const token = Jwt.sign(
        {id:user._id, role:user._role}, 
        process.env.JWT_SECRET_KEY,
        {expiresIn:"15d"}
        );


        //set token in th browser cookies and send th ereporsne to thhe client

        res.cookie("accessToken", token,{
          httpOnly: true,
          expires:token.expiresIn,

         }).status(200).json({
          token,
          data:{...rest},
          role,
        });

      }catch (error) {
        res.status(500).json({ success:false, message: "failed to login"})


    
  }
}