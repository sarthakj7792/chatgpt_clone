import { Router } from "express";
import openAiRouter from "./open_ai_router";

const router = Router()
router.use('/generate_response',openAiRouter)
export default router