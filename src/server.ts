import express, { Application, Request, Response, NextFunction } from "express";
import routes from "routes/index";

export default function creatServer() {
  const app: Application = express();

  app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("hello world");
  });

  app.use(routes);

  return app;
}
