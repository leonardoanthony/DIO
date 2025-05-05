import 'package:meu_app/ConsoleUtils.dart';
import 'package:meu_app/classes/Pessoa.dart';

void main(List<String> arguments) {
  print("IMC");

  var nome = ConsoleUtils.getString("Digite seu nome");
  var peso = ConsoleUtils.getDouble("Digite seu peso");
  var altura = ConsoleUtils.getDouble("Digite sua altura");

  Pessoa pessoa = new Pessoa(nome, peso, altura);

  print(pessoa.calculaIMC());

}
