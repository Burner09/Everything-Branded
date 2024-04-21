import { Router } from "express";
import { verifyToken } from '../middleware/authMiddleware.js';
import { createStaff, getAllStaff, staffLogin, staffLogout, verifyStaff } from "../controllers/staffController.js";

const router = Router();

router.get('/', verifyToken, verifyStaff)
router.get('/allstaff', getAllStaff)
router.get('/logout', staffLogout);

router.post('/login', staffLogin);
router.post('/signup', createStaff);

export default router;