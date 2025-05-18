import ComandosLexer from "./generated/ComandosLexer.js";
import ComandosParser from "./generated/ComandosParser.js";
import CustomComandosVisitor from "./CustomComandosVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        input = await leerCadena(); 
        console.log(input);
    }

    let inputStream = CharStreams.fromString(input);
    let lexer = new ComandosLexer(inputStream);
    
    console.log("Verificando tokens generados por el lexer...");
    const tokens = lexer.getAllTokens();
    if (tokens.length === 0) {
        console.error("No se generaron tokens. Verifica la entrada y la gramática.");
        return;
    }

    console.log("\nTabla de Tokens y Lexemas:");
    console.log("--------------------------------------------------");
    console.log("| Lexema         | Token                         |");
    console.log("--------------------------------------------------");

    for (let token of tokens) {
        const tokenType = ComandosLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
        const lexema = token.text; 
        console.log(`| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)}|`);
    }
    console.log("--------------------------------------------------"); 


    inputStream = CharStreams.fromString(input);
    lexer = new ComandosLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new ComandosParser(tokenStream);
    let tree = parser.comando();


    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } else {
        console.log("\nEntrada válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);


        const visitor = new CustomComandosVisitor();
        visitor.visit(tree);
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();