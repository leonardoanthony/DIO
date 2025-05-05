import 'dart:convert';
import 'dart:io';

void main() {
  print("Bem vindo a calculadora!");

  print("Digite o primeiro número: ");
  var line = stdin.readLineSync(encoding: utf8);
  var numero1 = double.tryParse(line ?? "0") ?? 0;

  print("Digite o segundo número: ");
  line = stdin.readLineSync(encoding: utf8);
  var numero2 = double.tryParse(line ?? "0") ?? 0;

  print("Digite o operador (+, -, *, /):");
  var operador = stdin.readLineSync(encoding: utf8);

  double resultado = 0;

  switch (operador) {
    case "+":
      resultado = numero1 + numero2;
      break;
    case "-":
      resultado = numero1 - numero2;
      break;
    case "*":
      resultado = numero1 * numero2;
      break;
    case "/":
      resultado = numero1 / numero2;
      break;
    default:
      print("Operação inválida");
      return;
  }

  print("Operação: $numero1 $operador $numero2");
  print("Resultado: $resultado");
}
