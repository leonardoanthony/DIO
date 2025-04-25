import 'package:meu_app/enum/tipo_notificacao.dart';

abstract class Pessoa {
  String _nome = "";
  String _endereco = "";
  String _email = "";
  String _celular = "";
  String _token = "";

  TipoNotificacao _tipoNotificacao = TipoNotificacao.NENHUM;

  String getNome() {
    return _nome.toUpperCase();
  }

  void setNome(String nome) {
    _nome = nome;
  }

  String getEndereco() {
    return _endereco;
  }

  void setEndereco(String endereco) {
    _endereco = endereco;
  }

  String getEmail() {
    return _email;
  }

  void setEmail(String email) {
    _email = email;
  }

  String getCelular() {
    return _celular;
  }

  void setCelular(String celular) {
    _celular = celular;
  }

  String getToken() {
    return _token;
  }

  void setToken(String token) {
    _token = token;
  }

  TipoNotificacao getTipoNotificacao() {
    return _tipoNotificacao;
  }

  void setTipoNotificacao(TipoNotificacao tipoNotificacao) {
    _tipoNotificacao = tipoNotificacao;
  }

  Pessoa(
    String nome,
    String endereco, {
    TipoNotificacao tipoNotificacao = TipoNotificacao.NENHUM,
  }) {
    _nome = nome;
    _endereco = endereco;
    _tipoNotificacao = tipoNotificacao;
  }

  @override
  String toString() {
    return {
      "Nome": _nome,
      "Endereço": _endereco,
      "Tipo Notificação": _tipoNotificacao,
    }.toString();
  }
}
