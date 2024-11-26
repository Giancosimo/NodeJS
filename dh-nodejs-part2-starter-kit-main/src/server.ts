import express from "express";
import morgan from "morgan";
import { Request, Response } from "express";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets = [
  { id: 1, name: "Mars" },
  { id: 2, name: "Saturn" },
];

app.get("/api/planets", (req, res) => {
  res.status(200).json(planets);
});
app.get("/api/planets/:id", (req, res) => {
  res.status(200).json(planets);
});

app.post("/api/planets", (req, res) => {
  const { id, name } = req.body;
  const newPlanet = { id, name };
  planets = [...planets, newPlanet];

  res.status(201).json({ msg: "The planet was created!" });
});

app.put("/api/planets/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));

  res.status(200).json({ msg: "Planet updated!" });
});

app.delete("/api/planets/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  planets = planets.filter((p) => p.id !== Number(id));
  res.status(200).json({ msg: "Planet deleted!" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Serving on https://Localhost:3000");
});
