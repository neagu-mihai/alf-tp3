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
type Dictionary={
    value:string[],
    token:string[]
}
function toString(dictionary:Dictionary)
{
    let output:String="";
    for(let i in dictionary.token)
    {
        output.concat(dictionary.value[i],":",dictionary.token[i],",");
    }
    return output;
}
let file_content:string;
try {
    file_content = fs.readFileSync('Alf.tokens', 'ascii');
    let d:Dictionary={value:[],token:[]}
    let ln=file_content.split('\r\n');
    for(let i in ln)
    {
        let ln2=ln[i].split('=');
        for( let j in ln2)
        {if(+j%2==0){d.token.push(ln2[j])}
        else{d.value.push(ln2[j])};
    }
    }
    console.log(toString(d));
    console.log(file_content);
} catch(error) {
    console.log(error);
}