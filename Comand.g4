grammar Comand;
// Parser
comando
    : prefijoComando nombreComando (argumento)*
    ;

prefijoComando
    : EXCLAMA | BAR | HAST | ANDD 
    ;
nombreComando
    : PALABRA
    ; 
argumento
    : argumentoPosicional | argumentoOpcional
    ;
argumentoPosicional
    : TEXT | PALABRA | NUM
    ;
argumentoOpcional
    :   GUIONDOBLE nombreArgumento (IGUAL valorArgumento)? | GUIONSIM LETRA valorArgumento
    ;
nombreArgumento
    :  PALABRA
    ;
valorArgumento
    : TEXT | NUM | PALABRA
    ;


// Lexer
WS : [ \t\n\r]+ -> skip ;
EXCLAMA : '!' ;
BAR : '/';
HAST : '#' ;
ANDD : '&' ;
GUIONDOBLE : '--' ;
IGUAL : '=' ;
GUIONSIM : '-' ;   
LETRA : [a-zA-Z] ;
TEXT : '"' (~['\r\n])* '"' ;
PALABRA : [a-zA-Z\u00E1\u00E9\u00ED\u00F3\u00FA\u00C1\u00C9\u00CD\u00D3\u00DA\u00F1\u00D1][a-zA-Z0-9\u00E1\u00E9\u00ED\u00F3\u00FA\u00C1\u00C9\u00CD\u00D3\u00DA\u00F1\u00D1]*;
NUM : [0-9]+ ('.' [0-9]+)? ;



