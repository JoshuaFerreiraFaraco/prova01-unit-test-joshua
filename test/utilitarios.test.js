const Utilitarios = require("../src/utilitarios");

//teste
describe('Testes da classe Utilitarios', () => {
    let utilitarios;

    beforeEach(() => {
        utilitarios = new Utilitarios();
    });

    test('Deve inverter a String enviada', () => {
        expect(utilitarios.inverterString('Ugioni')).toBe('inoigU');
    });
    
    test('Deve contar o Numero de Caracteres da String enviada', () => {
        expect(utilitarios.contarCaracteres('Ugioni')).toBe(6);
    });
    
    test('Deve colocar a String enviada em maiusculo', () => {
        expect(utilitarios.paraMaiusculas('Ugioni')).toBe('UGIONI');
    });
    
    test('Deve colocar a String enviada em minusculo', () => {
        expect(utilitarios.paraMinusculas('Ugioni')).toBe('ugioni');
    });
    
    test('Deve colocar a primeira letra da String enviada para Maiusculo', () => {
        expect(utilitarios.primeiraLetraMaiuscula('ugioni')).toBe('Ugioni');
    });
    
    test('Deve somar os valores enviados', () => {
        expect(utilitarios.somar(4,6)).toBe(10);
    });
    
    test('Deve subtrair os valores enviados', () => {
        expect(utilitarios.subtrair(8,6)).toBe(2);
    });
    
    test('Deve multiplicar os valores enviados', () => {
        expect(utilitarios.multiplicar(5,5)).toBe(25);
    });
    
    test('Deve dividir os valores enviados', () => {
        expect(utilitarios.dividir(5,5)).toBe(1);
    });

    test('Deve informar o erro de Divisao por zero', () => {
        expect(() => utilitarios.dividir(5,0)).toThrow('Divisão por zero');
    });

    test('Deve informar verdadeiro se o numero é Par ', () => {
        expect(utilitarios.ehPar(2)).toBe(true);
    });

    test('Deve informar falso se o numero é Impar ', () => {
        expect(utilitarios.ehPar(1)).toBe(false);
    });
    
    test('Deve informar o primeiro valor da Array ', () => {
        expect(utilitarios.primeiroElemento(['Joshua', 'Emely'])).toBe('Joshua');
    });

    test('Deve informar o último valor da Array ', () => {
        expect(utilitarios.ultimoElemento(['Joshua', 'Emely', 'Mateus'])).toBe('Mateus');
    });

    test('Deve informar o tamanho da Array ', () => {
        expect(utilitarios.tamanhoArray(['Joshua', 'Emely', 'Mateus'])).toBe(3);
    });

    test('Deve ordenar a Array de forma alfabetica', () => {
        expect(utilitarios.ordenarArray(['Joshua', 'Emely', 'Mateus'])).toEqual(['Emely', 'Joshua', 'Mateus']);
    });

    test('Deve inverter a Array', () => {
        expect(utilitarios.inverterArray(['Joshua', 'Emely', 'Mateus'])).toEqual(['Mateus', 'Emely', 'Joshua']);
    });

    test('Deve fazer um número aleatório entre 0 a 100', () => {
        const max = 100;
        expect(utilitarios.gerarNumeroAleatorio(max)).toBeGreaterThan(0);
        expect(utilitarios.gerarNumeroAleatorio(max)).toBeLessThan(100);
    });

    test('Deve informar verdadeiro se é um número', () => {
        expect(utilitarios.ehNumero(5)).toBe(true); 
    });

    test('Deve informar falso se não é um número', () => {
        expect(utilitarios.ehNumero('A')).toBe(false); 
    });

    test('Deve remover os espaços do texto', () => {
        expect(utilitarios.removerEspacos('Oi Professor Ugioni')).toBe('Oi Professor Ugioni'); 
    });

    test('Deve repetir o texto enviado', () => {
        expect(utilitarios.repetirTexto('Ugioni', 2)).toBe('UgioniUgioni'); 
    });

    test('Deve separar as informações do Array em uma String, separando os valores por "," ', () => {
        expect(utilitarios.juntarArray(['Ugioni', 'Joshua'], ',')).toBe('Ugioni,Joshua');
    });

    test('Deve contar a quantidade de palavras em uma String', () => {
        expect(utilitarios.contarPalavras('Joshua e Ugioni')).toBe(3);
    });

    test('Deve remover os valores duplicados de um Array', () => {
        expect(utilitarios.removerDuplicados(['Joshua', 'Joshua', 'Ugioni'])).toEqual(['Joshua', 'Ugioni']);
    });
    
    test('Deve verificar se a String pode ser lida indeferente da forma, é um Palindromo, deve retornar verdadeiro', () => {
        expect(utilitarios.ehPalindromo('Roma é Amor')).toBe(true);
    });

    test('Deve verificar se a String pode ser lida indeferente da forma, é um Palindromo, deve retornar falso', () => {
        expect(utilitarios.ehPalindromo('Joshua')).toBe(false);
    });

    test('Deve juntar os dois Objetos enviados em um unico', () => {
        expect(utilitarios.mesclarObjetos({0: 'Ugioni'}, {1: 'Joshua'})).toEqual({0: "Ugioni", 1: "Joshua"});
    });
});