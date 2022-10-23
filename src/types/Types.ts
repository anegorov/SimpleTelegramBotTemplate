import { Context } from "telegraf";

export interface Prefix {
    Prefix: string;
}

export interface ICommand {
    execute(): Promise<string>;
}

export interface SessionData {
	messageContext: Context;
}

export interface BotContext extends Context {
	session?: SessionData;
}