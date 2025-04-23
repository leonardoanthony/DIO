import 'dart:convert';
import 'dart:io';

void main() {
  print("Informe a primeira nota");
  var line = stdin.readLineSync(encoding: utf8);
  var prova1 = int.tryParse(line ?? "0") ?? 0;

  print("Informe a segunda nota");
  line = stdin.readLineSync(encoding: utf8);
  var prova2 = int.tryParse(line ?? "0") ?? 0;

  // print("Prova 1: $prova1 | Prova 2: $prova2");

  var media = (prova1 + prova2) / 2;

  if (media >= 7) {
    print("O aluno PASSOU com nota: $media");
  } else if (media >= 5) {
    print("O aluno FICOU DE RECUPERAÇÃO com nota: $media");
  } else {
    print("O aluno REPROVOU com nota: $media");
  }
}
