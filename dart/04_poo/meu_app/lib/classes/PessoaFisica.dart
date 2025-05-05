import 'package:meu_app/classes/Pessoa.dart';
import 'package:meu_app/enum/tipo_notificacao.dart';

class PessoaFisica extends Pessoa{
  String _cpf = "";
  
  String getCPF(){
    return _cpf;
  }

  void setCPF(String cpf){
    _cpf = cpf;
  }

  PessoaFisica(String nome, String endereco, String cpf, 
    {TipoNotificacao tipoNotificacao = TipoNotificacao.NENHUM})
    :super(nome, endereco, tipoNotificacao: tipoNotificacao){
    _cpf = cpf;
  }

  @override
  String toString(){
    return { "Nome": getNome(), "Endereço": getEndereco(), "CPF": _cpf,"Tipo Notificação": getTipoNotificacao() }.toString();
  }
}