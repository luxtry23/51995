import { Parser } from "antlr4";
import ComandosVisitor from "./generated/ComandosVisitor.js";

export default class CustomComandosVisitor extends ComandosVisitor {
    visitComando(ctx) {
        const nombreComando = ctx.nombreComando().getText();

        const argumentos = [];
        const argumentosOpcionales = {};

        for (const arg of ctx.argumento()) {
            if (arg.argumentoPosicional()) {
                argumentos.push(arg.argumentoPosicional().getText().replace(/"/g, ""));
            } else if (arg.argumentoOpcional()) {
                // --modo=formal o -m formal
                const opc = arg.argumentoOpcional();
                if (opc.DOBLEGUION()) {
                    const nombreArg = opc.nombreArgumento().getText();
                    let valor = "true";
                    if (opc.valorArgumento()) {
                        valor = opc.valorArgumento().getText().replace(/"/g, "");
                    }
                    argumentosOpcionales[nombreArg] = valor;
                } else if (opc.GUION()) {
                    const letra = opc.LETRA().getText();
                    let valor = opc.valorArgumento().getText().replace(/"/g, "");
                    argumentosOpcionales[letra] = valor;
                }
            }
        }

        let params = argumentos.length > 0 ? "nombre" : "";
        let llamada = argumentos.length > 0 ? `"${argumentos[0]}"` : "";

        let body = `console.log("Hola",nombre)`;
        if (argumentosOpcionales["modo"] === "formal") {
            body = `console.log("Buenos días",nombre)`;
        }

        console.log(`function ${nombreComando}(${params}) {`);
        console.log(`    ${body}`);
        console.log(`}`);
        console.log(`${nombreComando}(${llamada});`);
    }
}