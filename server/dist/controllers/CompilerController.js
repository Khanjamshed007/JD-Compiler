"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codeSaved = void 0;
const Code_1 = require("../models/Code");
const codeSaved = async (req, res) => {
    const { fullCode } = req.body;
    try {
        const newCode = await Code_1.Code.create({
            fullCode: fullCode,
        });
        return res.status(201).send(newCode);
    }
    catch (error) {
        return res.status(500).send({ message: "Error saving Code", error });
    }
};
exports.codeSaved = codeSaved;
