import 'package:meu_app/classes/Pessoa.dart';
import 'package:meu_app/enum/tipo_notificacao.dart';

class PessoaJuridica extends Pessoa{
  String _cnpj = "";
  
  String getCNPJ(){
    return _cnpj;
  }

  void setCNPJ(String cnpj){
    _cnpj = cnpj;
  }

  PessoaJuridica(String nome, String endereco, String cnpj, 
    {TipoNotificacao tipoNotificacao = TipoNotificacao.NENHUM})
    :super(nome, endereco, tipoNotificacao: tipoNotificacao){
    _cnpj = cnpj;
  }

  @override
  String toString(){
    return { "Nome": getNome(), "Endereço": getEndereco(), "CNPJ": _cnpj,"Tipo Notificação": getTipoNotificacao() }.toString();
  }
}