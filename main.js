"use strict";
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
const antlr4ts_1 = require("antlr4ts");
const AlfLexer_1 = require("./AlfLexer");
const AlfParser_1 = require("./AlfParser");
const fs = __importStar(require("fs"));
// Create the lexer and parser
let input = "10\n20";
let inputStream = antlr4ts_1.CharStreams.fromString(input);
let lexer = new AlfLexer_1.AlfLexer(inputStream);
let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
let parser = new AlfParser_1.AlfParser(tokenStream);
// Parse the input, where `prog` is whatever entry point you defined
let tree = parser.prog();
let file_content;
try {
    file_content = fs.readFileSync('Alf.tokens', 'ascii');
    let ln = file_content.split('\r\n');
    for (let i in ln) {
        let ln2 = ln[i].split('=');
        console.log(ln2);
    }
    console.log(file_content);
}
catch (error) {
    console.log(error);
}
