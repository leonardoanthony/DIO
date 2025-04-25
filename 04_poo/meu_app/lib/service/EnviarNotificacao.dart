import 'package:meu_app/classes/Pessoa.dart';
import 'package:meu_app/enum/tipo_notificacao.dart';
import 'package:meu_app/service/NotificacaoInterface.dart';
import 'package:meu_app/service/impl/NotificacaoEmail.dart';
import 'package:meu_app/service/impl/NotificacaoPushNotification.dart';
import 'package:meu_app/service/impl/NotificacaoSMS.dart';

class EnviarNotificacao {
  NotificacaoInterface? notificacao;

  void notificar(Pessoa pessoa) {
    switch (pessoa.getTipoNotificacao()) {
      case TipoNotificacao.EMAIL:
        notificacao = new NotificacaoEmail();
        break;
      case TipoNotificacao.SMS:
        notificacao = new NotificacaoSMS();
        break;
      case TipoNotificacao.PUSH_NOTIFICATION:
        notificacao = new NotificacaoPushNotification();
        break;
      default:
        notificacao = new NotificacaoEmail();
        break;
    }

    

    notificacao!.enviarNotificacao(pessoa);
  }
}
