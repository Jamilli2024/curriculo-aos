import cors from "cors";
import "dotenv/config";
import express from "express";
import sequelize from "./config/database.js";
import "./models/index.js";
import router from "./router/index.js";

const app = express();
app.set("trust proxy", true);

app.use(cors());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT ?? 3000;

app.get("/", (req,res)=> {
    return res.send("Bem vindo a api")
})

app.use("/usuario", router.usuariosRoutes);
app.use("/endereco", router.enderecosRoutes);
app.use("/experiencia", router.experienciasRoutes)
app.use("/habilidades", router.habilidadesRoutes)
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco estabelecida.");

    if (process.env.SYNC_DB === "true") {
      console.log("Rodando sequelize.sync()...");
      return sequelize.sync({ alter: true });
    }

    console.log("SYNC_DB está como false — nenhuma mudança será aplicada ao banco.");
    return Promise.resolve(); // segue sem sincronizar
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao iniciar:", error);
    process.exit(1);
  });
export default app;