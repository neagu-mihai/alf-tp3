import {  CharStreams, CodePointCharStream, CommonTokenStream } from 'antlr4ts';
import { AlfLexer } from './AlfLexer';
import { AlfParser, ProgContext } from './AlfParser';
 
// Create the lexer and parser
let input: string = "10\n20";
let inputStream: CodePointCharStream = CharStreams.fromString(input);
let lexer: AlfLexer = new AlfLexer(inputStream);
let tokenStream: CommonTokenStream = new CommonTokenStream(lexer);
let parser: AlfParser = new AlfParser(tokenStream);
 
// Parse the input, where `prog` is whatever entry point you defined
let tree:ProgContext = parser.prog();