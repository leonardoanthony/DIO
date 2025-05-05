import 'dart:convert';
import 'dart:io';

class ConsoleUtils {
  static String lerStringComMensagem(String texto) {
    print(texto);
    return lerString();
  }

  static String lerString() {
    return stdin.readLineSync(encoding: utf8) ?? "";
  }

  static double? lerDouble() {
    var value = lerString();
    try {
      return double.parse(value);
    } catch (e) {
      return null;
    }
  }

  static double? lerDoubleComMensagem(String texto) {
    print(texto);
    return lerDouble();
  }
}
