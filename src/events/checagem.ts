import { Message, Poll } from "whatsapp-web.js";

function handleChecagem(msg: Message) {
    msg.reply(new Poll(`🍆🍆🍆 CHECAGEM DA PEÇA NO GRUPO 🍆🍆🍆`, ['MOLE', 'MEIA BOMBA', 'DURA', 'TOMEI UM TADALA']));
}

export { handleChecagem };
