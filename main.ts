import {  CharStreams, CodePointCharStream, CommonTokenStream } from 'antlr4ts';
import { AlfLexer } from './AlfLexer';
import { AlfParser, ProgContext } from './AlfParser';
import * as fs from 'fs';
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator';
 
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
console.log(lexer.getTokenType("Bonjour"));
try {
    file_content = fs.readFileSync('text_and_numbers.txt', 'ascii');
    let ln=file_content.split('\r\n');
    for (let i in ln)
    {
        lexer.text=ln[i];
    
           lexer.getTokenType(lexer.text);
           lexer.getAllTokens();
    }
    console.log(file_content);
} catch(error) {
    console.log(error);
    
}

let books_array: string[] = [
    'Engineering a Compiler,9780120884780,7th February 2011',
    'Modern Operating Systems 4,9780133591620,21st March 2014',
    'Computer Networks,9332518742,9th January 2010'
];
type Book={
    titre:String;
    isbn:number;
    date_de_publication:String;
}
let regex:RegExp= /\,/
for(let i in books_array)
{
    let ln=books_array[i].split(regex);
    let b:Book={titre:ln[0],isbn:+ln[1],date_de_publication:ln[2]}
    console.log(b.titre+" "+b.isbn+" "+b.date_de_publication);
}