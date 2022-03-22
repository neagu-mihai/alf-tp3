"use strict";
// Generated from ./Alf.g4 by ANTLR 4.9.0-SNAPSHOT
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlfLexer = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const Lexer_1 = require("antlr4ts/Lexer");
const LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class AlfLexer extends Lexer_1.Lexer {
    // tslint:enable:no-trailing-whitespace
    constructor(input) {
        super(input);
        this._interp = new LexerATNSimulator_1.LexerATNSimulator(AlfLexer._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return AlfLexer.VOCABULARY;
    }
    // @Override
    get grammarFileName() { return "Alf.g4"; }
    // @Override
    get ruleNames() { return AlfLexer.ruleNames; }
    // @Override
    get serializedATN() { return AlfLexer._serializedATN; }
    // @Override
    get channelNames() { return AlfLexer.channelNames; }
    // @Override
    get modeNames() { return AlfLexer.modeNames; }
    static get _ATN() {
        if (!AlfLexer.__ATN) {
            AlfLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(AlfLexer._serializedATN));
        }
        return AlfLexer.__ATN;
    }
}
exports.AlfLexer = AlfLexer;
AlfLexer.NEWLINE = 1;
AlfLexer.INT = 2;
// tslint:disable:no-trailing-whitespace
AlfLexer.channelNames = [
    "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
];
// tslint:disable:no-trailing-whitespace
AlfLexer.modeNames = [
    "DEFAULT_MODE",
];
AlfLexer.ruleNames = [
    "NEWLINE", "INT",
];
AlfLexer._LITERAL_NAMES = [];
AlfLexer._SYMBOLIC_NAMES = [
    undefined, "NEWLINE", "INT",
];
AlfLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(AlfLexer._LITERAL_NAMES, AlfLexer._SYMBOLIC_NAMES, []);
AlfLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x04\x11\b\x01" +
    "\x04\x02\t\x02\x04\x03\t\x03\x03\x02\x06\x02\t\n\x02\r\x02\x0E\x02\n\x03" +
    "\x03\x06\x03\x0E\n\x03\r\x03\x0E\x03\x0F\x02\x02\x02\x04\x03\x02\x03\x05" +
    "\x02\x04\x03\x02\x04\x04\x02\f\f\x0F\x0F\x03\x022;\x02\x12\x02\x03\x03" +
    "\x02\x02\x02\x02\x05\x03\x02\x02\x02\x03\b\x03\x02\x02\x02\x05\r\x03\x02" +
    "\x02\x02\x07\t\t\x02\x02\x02\b\x07\x03\x02\x02\x02\t\n\x03\x02\x02\x02" +
    "\n\b\x03\x02\x02\x02\n\v\x03\x02\x02\x02\v\x04\x03\x02\x02\x02\f\x0E\t" +
    "\x03\x02\x02\r\f\x03\x02\x02\x02\x0E\x0F\x03\x02\x02\x02\x0F\r\x03\x02" +
    "\x02\x02\x0F\x10\x03\x02\x02\x02\x10\x06\x03\x02\x02\x02\x05\x02\n\x0F" +
    "\x02";
