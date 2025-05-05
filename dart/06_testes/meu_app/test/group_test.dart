import 'package:test/test.dart';
import 'package:myapp/testes.dart' as app;

void main() {
  group("Calcula o valor do produto com desconto", () {
    var valuesToTest = {
      {'valor': 1000, 'desconto': 150, 'percentual': false}: 850,
      {'valor': 1000, 'desconto': 15, 'percentual': true}: 850,
    };
    valuesToTest.forEach((values, expected) {
      test(
        "$values $expected",() {
        expect(
          app.calcularDesconto(
            double.parse(values['valor'].toString()),
            double.parse(values['desconto'].toString()),
            values['percentual'] == true),
          equals(expected),
        );
      });
    });
  });
}
