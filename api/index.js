// --- RSA ---
// const NodeRSA = require("node-rsa");
// const key = new NodeRSA({ b: 512 });
// key.setOptions({ encryptionScheme: "pkcs1" });

// const publicDer = key.exportKey("pkcs1-public-pem");

// --- node server ---
const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
// const { sendTelegramMessage } = require("./sendBotMsg.js");

// const botToken = "6528725816:AAFdrl7sVckqun7In06wVE01IyKCnd2UONM";

const app = express();
const router = express.Router();
const port = process.env.PORT;
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

app.use(`/.netlify/functions/api`, router);

// app.listen(port, () => {
//   console.log("Server has started on port: ", port);
// });

// app.post("/sendmessage", (req, res) => {
//   const data = req.body;

//   const userId = key.decrypt(data.id, "utf8");
//   const firstName = key.decrypt(data.firstName, "utf8");
//   const lastName = key.decrypt(data.lastName, "utf8");
//   const time = key.decrypt(data.time, "utf8");
//   const date = key.decrypt(data.date, "utf8");

//   sendTelegramMessage(botToken, userId, firstName, lastName, time, date);

//   res.status(200).send({ text: "Ok!" });
// });

router.get("/", (req, res) => {
  console.log(`Response ok.`);
  res.status(200).send("Hello!");
});

// app.get("/key", (req, res) => {
//   console.log(`Response key.`);
//   res.status(200).send({ key: publicDer });
// });

module.exports = { app };
module.exports.handler = serverless(app);

// --- telegram bot ---
// const { Telegraf } = require("telegraf");
// const bot = new Telegraf(botToken);

// bot.start((ctx) => {
//   const userId = ctx.update.message.from.id;
//   const firstName = ctx.update.message.from.first_name;
//   const lastName = ctx.update.message.from.last_name;

//   const link = `https://user-link-mds-bot.netlify.app/?id=${userId}&fn=${firstName}&ln=${lastName}`;
//   const message = `<code>Привіт ${firstName} ${lastName}!</code>\n<code>Щоб переглянути інформацію про себе, натисни посилання нижче.</code>\n<a href="${link}">Натисни мене!</a>`;

//   ctx.replyWithHTML(message);
// });

// bot.launch();

// --- close ---
// process.once("SIGINT", () => bot.stop("SIGINT"));
// process.once("SIGTERM", () => bot.stop("SIGTERM"));
