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
    console.log("✅ Conexão com o banco de dados estabelecida com sucesso.");
    
  return sequelize.sync({ alter: true });
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}!!!!!!`);
    });
  })
  .catch((error) => {
    console.error("Não foi possível conectar ao banco de dados:", error);
    process.exit(1);
  });
export default app;