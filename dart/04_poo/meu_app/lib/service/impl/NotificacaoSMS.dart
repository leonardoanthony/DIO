import 'package:meu_app/classes/Pessoa.dart';
import 'package:meu_app/service/NotificacaoInterface.dart';

class NotificacaoSMS implements NotificacaoInterface {
  @override
  void enviarNotificacao(Pessoa pessoa) {
    print("Enviando notificação SMS para ${pessoa.getNome()}");
  }
  
}
