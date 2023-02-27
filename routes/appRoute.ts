import { Router } from "express";
import { controller } from "../controllers/appController";

export const router = Router()

router.get("/api/people", controller.getPeople)

