import 'package:mockito/annotations.dart';
import 'package:mockito/mockito.dart';
import 'package:myapp/cep.dart';
import 'package:myapp/classes/viacep.dart';
import 'package:test/test.dart';
import 'package:myapp/testes.dart' as app;

import 'widget_test.mocks.dart';

@GenerateMocks([MockViaCEP])
void main() {
  test('Calcula o valor do produto com desconto sem porcentagem', () {
    expect(app.calcularDesconto(1000, 150, false), equals(850));
  });
  test('Calcula o valor do produto com desconto com porcentagem', () {
    expect(app.calcularDesconto(1000, 15, true), equals(850));
  });
  test('Calcula o valor do produto com valor do produto zerado', () {
    expect(
      () => app.calcularDesconto(0, 150, false),
      throwsA(TypeMatcher<ArgumentError>()),
    );
  });
  test('Calcula o valor do produto com desconto zerado', () {
    expect(app.calcularDesconto(1000, 0, false), equals(1000));
  });

  test('Retornar cep', () async {
    MockMockViaCEP mockMockViaCEP = new MockMockViaCEP();

    when(mockMockViaCEP.retornaCEP("01001000"))
      .thenAnswer((realInvocation) => Future.value({
        "cep": "01001-000",
        "logradouro": "Praça da Sé",
        "complemento": "lado ímpar",
        "unidade": "",
        "bairro": "Sé",
        "localidade": "São Paulo",
        "uf": "SP",
        "estado": "São Paulo",
        "regiao": "Sudeste",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
      }));
    var body = await mockMockViaCEP.retornaCEP("01001000");
    expect(body['bairro'], equals("Sé"));
    expect(body['logradouro'], equals("Praça da Sé"));
  });
}

class MockViaCEP extends Mock implements ViaCep {}
