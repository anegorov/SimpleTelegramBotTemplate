import { Context } from "telegraf";

export class Command {
    ctx: Context;

    constructor(ctx: Context){
        this.ctx = ctx;
    }

    async execute(): Promise<string> {
        return 'Smth wrong';
    }

    getCurrentText(): string {
        const update: any = this.ctx.update;
        return update.message.text;
    }
}