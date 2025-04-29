import 'package:test/test.dart';
import 'package:myapp/classes/Pessoa.dart';

void main() {
  group('Cálculo de IMC', () {
    test('Deve calcular corretamente o IMC', () {
      Pessoa pessoa = Pessoa('João', 70, 1.75);
      expect(pessoa.getImc(), closeTo(22.86, 0.01));
    });

    test('Deve retornar classificação Abaixo do peso', () {
      Pessoa pessoa = Pessoa('Ana', 45, 1.70);
      expect(pessoa.getImc(), closeTo(15.57, 0.01));
      expect(pessoa.calculaIMC(), equals('Magreza grave'));
    });

    test('Deve retornar classificação Peso normal', () {
      Pessoa pessoa = Pessoa('Carlos', 68, 1.75);
      expect(pessoa.calculaIMC(), equals('Saudável'));
    });

    test('Deve retornar classificação Sobrepeso', () {
      Pessoa pessoa = Pessoa('Bia', 80, 1.70);
      expect(pessoa.calculaIMC(), equals('Sobrepeso'));
    });

    test('Deve retornar classificação Obesidade Grau I', () {
      Pessoa pessoa = Pessoa('Gabriel', 91, 1.67);
      expect(pessoa.calculaIMC(), equals('Obesidade Grau I'));
    });

    test('Deve retornar classificação Obesidade Grau II', () {
      Pessoa pessoa = Pessoa('Rita', 110, 1.70);
      expect(pessoa.calculaIMC(), equals('Obesidade Grau II (severa)'));
    });

    test('Deve retornar classificação Obesidade Grau III', () {
      Pessoa pessoa = Pessoa('Roberto', 140, 1.70);
      expect(pessoa.calculaIMC(), equals('Obesidade Grau III (mórbida)'));
    });
  });

  group('Casos limite (bordas de classificação)', () {
    test('IMC exatamente 18.5 deve ser Peso normal', () {
      Pessoa pessoa = Pessoa('Limite1', 55.8, 1.74); // ~18.43
      expect(pessoa.calculaIMC(), equals('Magreza leve'));

      pessoa = Pessoa('Limite2', 56, 1.74); // ~18.5
      expect(pessoa.calculaIMC(), equals('Saudável'));
    });

    test('IMC exatamente 25 deve ser Sobrepeso', () {
      Pessoa pessoa = Pessoa('Limite3', 76, 1.74); // ~25.1
      expect(pessoa.calculaIMC(), equals('Sobrepeso'));
    });

    test('IMC exatamente 30 deve ser Obesidade Grau I', () {
      Pessoa pessoa = Pessoa('Limite4', 91, 1.74); // ~30
      expect(pessoa.calculaIMC(), equals('Obesidade Grau I'));
    });
  });

  group('Tratamento de dados inválidos (manual)', () {
    test('Altura zero deve causar erro (divisão por zero)', () {
      expect(() => Pessoa('Erro', 80, 0).calculaIMC(), throwsA(isA<UnsupportedError>()));
    });
  });
}
