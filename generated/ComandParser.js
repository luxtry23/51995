// Generated from c:/Users/SSJ sexo/Desktop/51995/Comand.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ComandListener from './ComandListener.js';
import ComandVisitor from './ComandVisitor.js';

const serializedATN = [4,1,12,50,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,1,1,1,
1,2,1,2,1,3,1,3,3,3,31,8,3,1,4,1,4,1,5,1,5,1,5,1,5,3,5,39,8,5,1,5,1,5,1,
5,3,5,44,8,5,1,6,1,6,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,2,1,0,2,5,1,
0,10,12,45,0,16,1,0,0,0,2,24,1,0,0,0,4,26,1,0,0,0,6,30,1,0,0,0,8,32,1,0,
0,0,10,43,1,0,0,0,12,45,1,0,0,0,14,47,1,0,0,0,16,17,3,2,1,0,17,21,3,4,2,
0,18,20,3,6,3,0,19,18,1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,
22,1,1,0,0,0,23,21,1,0,0,0,24,25,7,0,0,0,25,3,1,0,0,0,26,27,5,11,0,0,27,
5,1,0,0,0,28,31,3,8,4,0,29,31,3,10,5,0,30,28,1,0,0,0,30,29,1,0,0,0,31,7,
1,0,0,0,32,33,7,1,0,0,33,9,1,0,0,0,34,35,5,6,0,0,35,38,3,12,6,0,36,37,5,
7,0,0,37,39,3,14,7,0,38,36,1,0,0,0,38,39,1,0,0,0,39,44,1,0,0,0,40,41,5,8,
0,0,41,42,5,9,0,0,42,44,3,14,7,0,43,34,1,0,0,0,43,40,1,0,0,0,44,11,1,0,0,
0,45,46,5,11,0,0,46,13,1,0,0,0,47,48,7,1,0,0,48,15,1,0,0,0,4,21,30,38,43];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ComandParser extends antlr4.Parser {

    static grammarFileName = "Comand.g4";
    static literalNames = [ null, null, "'!'", "'/'", "'#'", "'&'", "'--'", 
                            "'='", "'-'" ];
    static symbolicNames = [ null, "WS", "EXCLAMA", "BAR", "HAST", "ANDD", 
                             "GUIONDOBLE", "IGUAL", "GUIONSIM", "LETRA", 
                             "TEXT", "PALABRA", "NUM" ];
    static ruleNames = [ "comando", "prefijoComando", "nombreComando", "argumento", 
                         "argumentoPosicional", "argumentoOpcional", "nombreArgumento", 
                         "valorArgumento" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ComandParser.ruleNames;
        this.literalNames = ComandParser.literalNames;
        this.symbolicNames = ComandParser.symbolicNames;
    }



	comando() {
	    let localctx = new ComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ComandParser.RULE_comando);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.prefijoComando();
	        this.state = 17;
	        this.nombreComando();
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 7488) !== 0)) {
	            this.state = 18;
	            this.argumento();
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	prefijoComando() {
	    let localctx = new PrefijoComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ComandParser.RULE_prefijoComando);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 60) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombreComando() {
	    let localctx = new NombreComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ComandParser.RULE_nombreComando);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(ComandParser.PALABRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumento() {
	    let localctx = new ArgumentoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ComandParser.RULE_argumento);
	    try {
	        this.state = 30;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	        case 11:
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 28;
	            this.argumentoPosicional();
	            break;
	        case 6:
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 29;
	            this.argumentoOpcional();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentoPosicional() {
	    let localctx = new ArgumentoPosicionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ComandParser.RULE_argumentoPosicional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7168) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentoOpcional() {
	    let localctx = new ArgumentoOpcionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ComandParser.RULE_argumentoOpcional);
	    var _la = 0;
	    try {
	        this.state = 43;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 34;
	            this.match(ComandParser.GUIONDOBLE);
	            this.state = 35;
	            this.nombreArgumento();
	            this.state = 38;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 36;
	                this.match(ComandParser.IGUAL);
	                this.state = 37;
	                this.valorArgumento();
	            }

	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 40;
	            this.match(ComandParser.GUIONSIM);
	            this.state = 41;
	            this.match(ComandParser.LETRA);
	            this.state = 42;
	            this.valorArgumento();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombreArgumento() {
	    let localctx = new NombreArgumentoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ComandParser.RULE_nombreArgumento);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(ComandParser.PALABRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valorArgumento() {
	    let localctx = new ValorArgumentoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ComandParser.RULE_valorArgumento);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7168) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ComandParser.EOF = antlr4.Token.EOF;
ComandParser.WS = 1;
ComandParser.EXCLAMA = 2;
ComandParser.BAR = 3;
ComandParser.HAST = 4;
ComandParser.ANDD = 5;
ComandParser.GUIONDOBLE = 6;
ComandParser.IGUAL = 7;
ComandParser.GUIONSIM = 8;
ComandParser.LETRA = 9;
ComandParser.TEXT = 10;
ComandParser.PALABRA = 11;
ComandParser.NUM = 12;

ComandParser.RULE_comando = 0;
ComandParser.RULE_prefijoComando = 1;
ComandParser.RULE_nombreComando = 2;
ComandParser.RULE_argumento = 3;
ComandParser.RULE_argumentoPosicional = 4;
ComandParser.RULE_argumentoOpcional = 5;
ComandParser.RULE_nombreArgumento = 6;
ComandParser.RULE_valorArgumento = 7;

class ComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandParser.RULE_comando;
    }

	prefijoComando() {
	    return this.getTypedRuleContext(PrefijoComandoContext,0);
	};

	nombreComando() {
	    return this.getTypedRuleContext(NombreComandoContext,0);
	};

	argumento = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentoContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ComandListener ) {
	        listener.enterComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandListener ) {
	        listener.exitComando(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandVisitor ) {
	        return visitor.visitComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrefijoComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandParser.RULE_prefijoComando;
    }

	EXCLAMA() {
	    return this.getToken(ComandParser.EXCLAMA, 0);
	};

	BAR() {
	    return this.getToken(ComandParser.BAR, 0);
	};

	HAST() {
	    return this.getToken(ComandParser.HAST, 0);
	};

	ANDD() {
	    return this.getToken(ComandParser.ANDD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandListener ) {
	        listener.enterPrefijoComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandListener ) {
	        listener.exitPrefijoComando(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandVisitor ) {
	        return visitor.visitPrefijoComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandParser.RULE_nombreComando;
    }

	PALABRA() {
	    return this.getToken(ComandParser.PALABRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandListener ) {
	        listener.enterNombreComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandListener ) {
	        listener.exitNombreComando(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandVisitor ) {
	        return visitor.visitNombreComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandParser.RULE_argumento;
    }

	argumentoPosicional() {
	    return this.getTypedRuleContext(ArgumentoPosicionalContext,0);
	};

	argumentoOpcional() {
	    return this.getTypedRuleContext(ArgumentoOpcionalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandListener ) {
	        listener.enterArgumento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandListener ) {
	        listener.exitArgumento(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandVisitor ) {
	        return visitor.visitArgumento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentoPosicionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandParser.RULE_argumentoPosicional;
    }

	TEXT() {
	    return this.getToken(ComandParser.TEXT, 0);
	};

	PALABRA() {
	    return this.getToken(ComandParser.PALABRA, 0);
	};

	NUM() {
	    return this.getToken(ComandParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandListener ) {
	        listener.enterArgumentoPosicional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandListener ) {
	        listener.exitArgumentoPosicional(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandVisitor ) {
	        return visitor.visitArgumentoPosicional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentoOpcionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandParser.RULE_argumentoOpcional;
    }

	GUIONDOBLE() {
	    return this.getToken(ComandParser.GUIONDOBLE, 0);
	};

	nombreArgumento() {
	    return this.getTypedRuleContext(NombreArgumentoContext,0);
	};

	IGUAL() {
	    return this.getToken(ComandParser.IGUAL, 0);
	};

	valorArgumento() {
	    return this.getTypedRuleContext(ValorArgumentoContext,0);
	};

	GUIONSIM() {
	    return this.getToken(ComandParser.GUIONSIM, 0);
	};

	LETRA() {
	    return this.getToken(ComandParser.LETRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandListener ) {
	        listener.enterArgumentoOpcional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandListener ) {
	        listener.exitArgumentoOpcional(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandVisitor ) {
	        return visitor.visitArgumentoOpcional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreArgumentoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandParser.RULE_nombreArgumento;
    }

	PALABRA() {
	    return this.getToken(ComandParser.PALABRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandListener ) {
	        listener.enterNombreArgumento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandListener ) {
	        listener.exitNombreArgumento(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandVisitor ) {
	        return visitor.visitNombreArgumento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorArgumentoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandParser.RULE_valorArgumento;
    }

	TEXT() {
	    return this.getToken(ComandParser.TEXT, 0);
	};

	NUM() {
	    return this.getToken(ComandParser.NUM, 0);
	};

	PALABRA() {
	    return this.getToken(ComandParser.PALABRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandListener ) {
	        listener.enterValorArgumento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandListener ) {
	        listener.exitValorArgumento(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandVisitor ) {
	        return visitor.visitValorArgumento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ComandParser.ComandoContext = ComandoContext; 
ComandParser.PrefijoComandoContext = PrefijoComandoContext; 
ComandParser.NombreComandoContext = NombreComandoContext; 
ComandParser.ArgumentoContext = ArgumentoContext; 
ComandParser.ArgumentoPosicionalContext = ArgumentoPosicionalContext; 
ComandParser.ArgumentoOpcionalContext = ArgumentoOpcionalContext; 
ComandParser.NombreArgumentoContext = NombreArgumentoContext; 
ComandParser.ValorArgumentoContext = ValorArgumentoContext; 
