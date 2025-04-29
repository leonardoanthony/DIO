import 'dart:convert';
import 'dart:io';

class ConsoleUtils {
  static String getString(String texto) {
    print(texto);
    var line = stdin.readLineSync(encoding: utf8);
    return line ?? "";
  }

  static double getDouble(String texto) {
    print(texto);
    var line = stdin.readLineSync(encoding: utf8);
    return double.tryParse(line ?? "") ?? 0;
  }
}
