import { Router } from "express";
import {
  renderSignUpForm,
  singup,
  renderSigninForm,
  signin,
  logout,
} from "../controllers/users.controller";

import {
  createTask,
  deleteTask,
  renderTasks,
  taskToggleDone,
  renderTaskEdit,
  editTask,
  About
} from "../controllers/tasks.controllers";


const router = Router();

// Routes
router.get("/users/signup", renderSignUpForm);

router.post("/users/signup", singup);

router.get("/users/signin", renderSigninForm);

router.post("/users/signin", signin);

router.get("/users/logout", logout);

router.get("/", renderTasks);

router.get("/about", About);

router.post("/tasks/add", createTask);

router.get("/tasks/:id/toggleDone", taskToggleDone);

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);


export default router;
