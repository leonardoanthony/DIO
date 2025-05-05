// import 'package:meu_app/classes/Pessoa.dart';
import 'package:meu_app/classes/PessoaFisica.dart';
import 'package:meu_app/classes/PessoaJuridica.dart';
import 'package:meu_app/enum/tipo_notificacao.dart';
import 'package:meu_app/service/EnviarNotificacao.dart';
// import 'package:meu_app/enum/tipo_notificacao.dart';

void main(List<String> arguments) {
  // var p1 = new Pessoa("Leonardo", "Rua 1");

  // p1.setNome("Leonardo");
  // p1.setEndereco("Rua 1");

  // print(p1.getNome());
  // print(p1.getEndereco());

  // print(p1);

  var pf1 = new PessoaFisica("Anthony", "Rua 2", "000.000.000-00");
  print(pf1);
  
  var pj1 = new PessoaJuridica("LA Development", "Rua 3", "00.000.000/0000-00");
  pj1.setTipoNotificacao(TipoNotificacao.SMS);
  print(pj1);

  EnviarNotificacao envio = new EnviarNotificacao();
  envio.notificar(pj1);
  envio.notificar(pf1);
}
