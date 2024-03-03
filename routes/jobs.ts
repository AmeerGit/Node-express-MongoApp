import { getallJobs, getJob, createJob, updateJob, deleteJob } from "../controllers/jobs";

import { Router } from "express";

export const jobsRouter = Router();

jobsRouter.get("/", getallJobs);

jobsRouter.get("/:id", getJob);

jobsRouter.post("/", createJob);

jobsRouter.patch("/:id", updateJob);

jobsRouter.delete("/:id", deleteJob);