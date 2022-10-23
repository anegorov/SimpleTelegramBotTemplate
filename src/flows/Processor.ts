import axios from "axios";
import { Context } from "telegraf";
import { Command } from "../commands/Command";

export default class Processor {
    async text(ctx: Context) {
        const input = new Command(ctx).getCurrentText();
        ctx.reply(input);
    }
}