import 'package:test/test.dart';
import 'package:myapp/testes.dart' as app;


void main() {
  test('Calcula o valor do produto com desconto sem porcentagem', () {
    expect(app.calcularDesconto(1000, 150, false), equals(850));
  });
  test('Calcula o valor do produto com desconto com porcentagem', () {
    expect(app.calcularDesconto(1000, 15, true), equals(850));
  });
  test('Calcula o valor do produto com valor do produto zerado', () {
    expect(() => app.calcularDesconto(0, 150, false), throwsA(TypeMatcher<ArgumentError>()));
  });
  test('Calcula o valor do produto com desconto zerado', () {
    expect(app.calcularDesconto(1000, 0, false), equals(1000));
  });
}
