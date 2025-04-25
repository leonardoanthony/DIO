import 'package:meu_app/enum/tipo_notificacao.dart';

abstract class Pessoa {
  String _nome = "";
  String _endereco = "";
  TipoNotificacao _tipoNotificacao = TipoNotificacao.NENHUM;


  String getNome(){
    return _nome.toUpperCase();
  }

   void setNome(String nome){
    _nome = nome;
  }

  String getEndereco(){
    return _endereco;
  }
 
  void setEndereco(String endereco){
    _endereco = endereco;
  }

  TipoNotificacao getTipoNotificacao(){
    return _tipoNotificacao;
  }
 
  void setTipoNotificacao(TipoNotificacao tipoNotificacao){
    _tipoNotificacao = tipoNotificacao;
  }

  Pessoa(String nome, String endereco, {TipoNotificacao tipoNotificacao = TipoNotificacao.NENHUM}){
    _nome = nome;
    _endereco = endereco;
    _tipoNotificacao = tipoNotificacao;
  }

  @override
  String toString(){
    return { "Nome": _nome, "Endereço": _endereco, "Tipo Notificação": _tipoNotificacao }.toString();
  }
}