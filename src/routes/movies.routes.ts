import { Router } from "express";
import { addMovie, allGenres, allMovies, allPlatform, allReviews, deleteMovie, updateStatusMovie } from "../controllers/movie.controllers.js";
import { schemaValidation } from "../middlewares/schemaValidation.js";
import movieSchemas from "../schemas/movie.schema.js";
import scoreSchema from "../schemas/score.schema.js";

const movieRouter = Router();

movieRouter.get("/movies", allMovies)
movieRouter.get("/movies/genres", allGenres)
movieRouter.get("/movies/platform", allPlatform)
movieRouter.get("/movies/reviews", allReviews)

movieRouter.post("/movies", schemaValidation(movieSchemas), addMovie)

movieRouter.delete("/movies/:id", deleteMovie)

movieRouter.put("/movies/:id", schemaValidation(scoreSchema),  updateStatusMovie)

export default movieRouter;