import  jwt  from "jsonwebtoken";

const verifytoken = (req,res,next)=>{
  const token = req.headers['authorization'];

  if(!token){
    

    return res.status(401).json({success:false, message:"You are not auhtorized not token provided" })

  }

  //if token exist then verify the token


  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user)=>{
  if(err){
      
  return res.status(401).json({success:false, message:"token is invalid"})

  }

  req.user = user
  next()//dont fofget tot call next 
})




}



export const verifyUser = (req,res,next)=>{
  verifytoken(req,res,next, ()=>{
    if(req.user.id === res.params.id || req.user.role === 'admin'){
      next()
    }else{
      return res.status(401).json({success:false, message:"You are not authenticated as user"})
    }
  });
}
  export const verifyAdmin = (req,res,next)=>{
    verifytoken(req,res,next, ()=>{
      if(req.user.role === 'admin'){
        next()
      }else{
        return res.status(401).json({success:false, message:"You are not authorized as admin"})
      }
    });
  }