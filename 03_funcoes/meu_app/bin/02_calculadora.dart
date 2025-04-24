import 'dart:convert';
import 'dart:io';

void main(List<String> arguments) {

  print("Bem-vindo a calculadora!");


  double numero1 = double.parse(lerConsole("Informe o primeiro número"));

  double numero2 = double.parse(lerConsole("Informe o segundo número"));

  String operador = lerConsole("Informe o operador (+,-,*,/)");


  calcular(operador, numero1, numero2);

}


String lerConsole(String texto){
    print(texto);
    var line = stdin.readLineSync(encoding: utf8);
    return line ?? "0"; 
}

double soma(double num1, double num2){
  return num1 + num2;
}
double subtracao(double num1, double num2){
  return num1 - num2;
}
double multiplicacao(double num1, double num2){
  return num1 * num2;
}
double divisao(double num1, double num2){
  return num1 / num2;
}

void calcular(String operador, double numero1, double numero2){
  double resultado = 0;

  switch (operador) {
      case "+":
          resultado =  soma(numero1, numero2);
        break;
      case "-":
          resultado =  subtracao(numero1, numero2);
        break;
      case "*":
          resultado =  multiplicacao(numero1, numero2);
        break;
      case "/":
          resultado =  divisao(numero1, numero2);
        break;
      default: 
        print("Operação inválida");
        return;
  }

  print("Resultado: $numero1 $operador $numero2 = $resultado");
}