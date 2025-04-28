import 'dart:io';

import 'package:myapp/exception/nome_invalido_exception.dart';
import 'package:myapp/models/Aluno.dart';
import 'package:myapp/models/console_utils.dart';

void execute() {
  print("Bem vindo ao Sistema de Notas");

  String nome = ConsoleUtils.lerStringComMensagem("Digite o nome do aluno:");
  try {
    if (nome.trim() == "") {
      throw NomeInvalidoException("Nome não pode ser vazio");
    }
  } catch (NomeInvalidoException) {
    print(NomeInvalidoException);
    exit(0);
  }
  Aluno aluno = new Aluno(nome);

  double? nota;

  do {
    nota = ConsoleUtils.lerDoubleComMensagem("Digite a nota ou S para sair");
    if (nota != null) {
      aluno.addNota(nota);
    }
  } while (nota != null);

  print(aluno.getNotas());
}
