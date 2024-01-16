import express from 'express'
import { GetAllUser, GetSingleUser, deleteUser, updateUser } from '../controllers/UserControllers.js'
const router = express.Router()

import { verifyAdmin, verifyUser } from '../utilities/verifyToken.js'


//update User
router.put("/:id", verifyUser,updateUser)
//delete User
router.delete("/:id",verifyUser, deleteUser)
//get single user
router.get("/:id", verifyUser, GetSingleUser)
//get all users
router.get("/", verifyAdmin, GetAllUser)


export default router