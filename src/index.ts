import * as discord from 'discord.js';
import { config } from 'dotenv';
import { readdirSync } from 'fs';

config();
const token = process.env.TOKEN;

const client = new discord.Client({ disableMentions: 'everyone' });

client.on('ready', () => console.log('Connected!'));

client.login(token);
