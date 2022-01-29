import path from "path";
import express from "express";
import morgan from "morgan";
import exphbs from "express-handlebars";


import session from "express-session";
import methodOverride from "method-override";
import flash from "connect-flash";
import passport from "passport";
import { createAdminUser } from "./libs/createUser";
import config from "./config";


import indexRoutes from "./routes/tasks.routes";
import userRoutes from "./routes/users.routes";
import "./config/passport";

const Handlebars = require("handlebars");
const multer = require('multer');

const app = express();
createAdminUser();


// settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaulLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/img/uploads'),
  filename: (req, file, cb, filename) => {
      console.log(file);
    
  }
}) 
app.use(multer({storage}).single('image'));

Handlebars.registerHelper('checked', function(value, test) {
  if (value == undefined) return '';
  return value==test ? 'checked' : '';
});

app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  next();
});

// routes
app.use(indexRoutes);
app.use(userRoutes);

// public route
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.status(404).render("404");
});

export default app;
