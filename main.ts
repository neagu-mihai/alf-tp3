import {  CharStreams, CodePointCharStream, CommonTokenStream } from 'antlr4ts';
import { AlfLexer } from './AlfLexer';
import { AlfParser, ProgContext } from './AlfParser';
import * as fs from 'fs';
 
// Create the lexer and parser
let input: string = "10\n20";
let inputStream: CodePointCharStream = CharStreams.fromString(input);
let lexer: AlfLexer = new AlfLexer(inputStream);
let tokenStream: CommonTokenStream = new CommonTokenStream(lexer);
let parser: AlfParser = new AlfParser(tokenStream);
 
// Parse the input, where `prog` is whatever entry point you defined
let tree:ProgContext = parser.prog();
let file_content:string;
try {
    file_content = fs.readFileSync('Alf.tokens', 'ascii');
    let ln=file_content.split('\r\n');
    for(let i in ln)
    {
        let ln2=ln[i].split('=');
        console.log(ln2);
    }
    console.log(file_content);
} catch(error) {
    console.log(error);
}