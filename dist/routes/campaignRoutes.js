"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const campaignController_1 = require("../controllers/campaignController");
const router = express_1.default.Router();
router.get('/all', campaignController_1.getCampaigns);
router.get('/:id', campaignController_1.getCampaign);
router.post('/create', campaignController_1.createCampaign);
router.put('/:id', campaignController_1.updateCampaign);
router.delete('/:id', campaignController_1.deleteCampaign);
exports.default = router;
