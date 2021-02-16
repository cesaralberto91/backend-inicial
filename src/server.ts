import express from "express";
import helmet from "helmet";
var cors = require('cors')

require("dotenv").config();

import "./database/connection";
import routes from "./routes";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
