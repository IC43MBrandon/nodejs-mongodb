import { Router } from "express";
import {
  createTask,
  deleteTask,
  renderTasks,
  taskToggleDone,
  renderTaskEdit,
  editTask,
  About,
  Gracias
} from "../controllers/tasks.controllers";

const router = Router();

// Render all tasks
router.get("/", renderTasks);

router.get("/about", About);

router.get("/gracias", Gracias);

router.post("/tasks/add", createTask);

router.get("/tasks/:id/toggleDone", taskToggleDone);

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);

export default router;
