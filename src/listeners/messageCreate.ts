import { wwebClient } from "../clients/wweb";
import { handlePing, handleBot, handleChecagem, handleFala, handleImagem, handleRanking, handleTranscrever } from "../events";
import { MessageObserver } from "../observers/message";
import { shouldProcessMessage } from "../helpers/messageFilter";

const observer = new MessageObserver();

observer.addListener('!ping', handlePing)
observer.addListener("!bot", handleBot);
observer.addListener("!checagem", handleChecagem);
observer.addListener("!fala", handleFala);
observer.addListener("!imagem", handleImagem);
observer.addListener("!ranking", handleRanking);
observer.addListener("!transcrever", handleTranscrever)

wwebClient.on("message_create", async msg => {

    if (!shouldProcessMessage(msg)) {
        return;
    }

    const messageBody = msg.body.toLowerCase();

    const event = messageBody.split(' ')[0];
    observer.notify(event, msg)

});
