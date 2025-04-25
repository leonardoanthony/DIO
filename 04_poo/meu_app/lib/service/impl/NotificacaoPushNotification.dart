import 'package:meu_app/classes/Pessoa.dart';
import 'package:meu_app/service/NotificacaoInterface.dart';

class NotificacaoPushNotification implements NotificacaoInterface {
  @override
  void enviarNotificacao(Pessoa pessoa) {
    print("Enviando notificação PushNotification para ${pessoa.getNome()}");
  }
  
}
