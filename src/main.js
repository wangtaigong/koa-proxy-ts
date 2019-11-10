"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const fs_1 = __importDefault(require("mz/fs"));
const app = new koa_1.default();
app.use(async function (ctx) {
    const paths = await fs_1.default.readdir('docs');
    const files = await Promise.all(paths.map((path) => fs_1.default.readFile(`docs/${path}`, 'utf8')));
    ctx.type = 'markdown';
    ctx.body = files.join('');
});
app.listen(8080).on('error', console.log);
