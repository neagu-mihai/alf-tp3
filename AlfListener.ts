// Generated from ./Alf.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgContext } from "./AlfParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `AlfParser`.
 */
export interface AlfListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `AlfParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `AlfParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;
}

