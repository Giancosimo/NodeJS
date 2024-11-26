import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import "express-async-errors";

dotenv.config();

type Planet = {
  id: number;
  name: string;
};
type Planets = Planet[];
let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: err.message || "Error" });
});

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the Planets API" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
