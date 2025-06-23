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
exports.deleteCampaign = exports.updateCampaign = exports.createCampaign = exports.getCampaign = exports.getCampaigns = void 0;
const Campaign_1 = __importDefault(require("../models/Campaign"));
const getCampaigns = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const campaigns = yield Campaign_1.default.find({ status: { $ne: 'deleted' } });
    res.json(campaigns);
});
exports.getCampaigns = getCampaigns;
const getCampaign = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const campaign = yield Campaign_1.default.findById(req.params.id);
    res.json(campaign);
});
exports.getCampaign = getCampaign;
const createCampaign = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newCampaign = new Campaign_1.default(req.body);
    yield newCampaign.save();
    res.status(201).json(newCampaign);
});
exports.createCampaign = createCampaign;
const updateCampaign = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updated = yield Campaign_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});
exports.updateCampaign = updateCampaign;
const deleteCampaign = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deleted = yield Campaign_1.default.findByIdAndUpdate(req.params.id, { status: 'deleted' }, { new: true });
    res.json(deleted);
});
exports.deleteCampaign = deleteCampaign;
