"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const openai_1 = __importDefault(require("openai"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const openai = new openai_1.default({
    apiKey: process.env.OPENAI_KEY,
});
const generateMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { name, job_title, company, location, summary } = req.body;
        if (!name || !job_title || !company || !location || !summary) {
            return res.status(400).json({ error: 'All fields are required.' });
        }
        const completion = yield openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: `Write a short personalized outreach message for ${name}, a ${job_title} at ${company} in ${location}. Bio: ${summary}`,
                },
            ],
            max_tokens: 100,
            temperature: 0.7,
        });
        const message = (_a = completion.choices[0].message.content) === null || _a === void 0 ? void 0 : _a.trim();
        if (!message) {
            return res.status(500).json({ error: 'Failed to generate message.' });
        }
        res.json({ message });
    }
    catch (error) {
        console.error('OpenAI error:', error);
        res.status(500).json({ error: 'Something went wrong while generating the message.' });
    }
});
exports.default = generateMessage;
