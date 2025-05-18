import ComandosListener from "./generated/CommandListener.js";
export class CustomComandosListener extends ComandosListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }
}