import { injectable } from "inversify";
import { IMessageBroker } from "../interfaces/IMessageBroker";

@injectable()

export class MessageBroker implements IMessageBroker {
    NotifyToPromotionService(product: unknown) {
        // message broker 
        console.log("calling message broker")
        return true;
    }
}