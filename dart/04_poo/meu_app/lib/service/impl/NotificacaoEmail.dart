import 'package:meu_app/classes/Pessoa.dart';
import 'package:meu_app/service/NotificacaoInterface.dart';

class NotificacaoEmail implements NotificacaoInterface {
  @override
  void enviarNotificacao(Pessoa pessoa) {
    print("Enviando notificação Email para ${pessoa.getNome()}");
  }
  
}
