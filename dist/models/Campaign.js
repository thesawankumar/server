"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/Campaign.ts
const mongoose_1 = __importDefault(require("mongoose"));
const campaignSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    description: String,
    status: { type: String, enum: ['active', 'inactive', 'deleted'], default: 'active' },
    leads: [String],
    accountIDs: [String],
}, { timestamps: true });
exports.default = mongoose_1.default.model("Campaign", campaignSchema);
