import  express  from "express";
import { deleteUser, followUser, getAllUsers, getUser, unfollowUser, updateUser } from "../controllers/UserControllers.js";
import AuthMiddleWare from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.get('/',getAllUsers);
router.get('/:id',getUser);
router.put('/:id',AuthMiddleWare,updateUser);
router.delete('/:id',AuthMiddleWare ,deleteUser) 
router.put('/:id/follow' ,AuthMiddleWare , followUser)
router.put('/:id/unfollow',unfollowUser)

export default router;