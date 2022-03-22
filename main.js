"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const AlfLexer_1 = require("./AlfLexer");
const AlfParser_1 = require("./AlfParser");
// Create the lexer and parser
let input = "10\n20";
let inputStream = antlr4ts_1.CharStreams.fromString(input);
let lexer = new AlfLexer_1.AlfLexer(inputStream);
let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
let parser = new AlfParser_1.AlfParser(tokenStream);
// Parse the input, where `prog` is whatever entry point you defined
let tree = parser.prog();
