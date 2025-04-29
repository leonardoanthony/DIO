import 'dart:ffi';

class Pessoa {
  String _nome = "";
  double _peso = 0;
  double _altura = 0;
  double _imc = 0;
  String _classificacao = "";

  Pessoa(String nome, double peso, double altura) {
    if (peso <= 0 || altura <= 0) throw new UnsupportedError("Peso e altura devem ser maiores que zero.");
    _nome = nome;
    _peso = peso;
    _altura = altura;
    _imc = double.parse((_peso / (_altura * _altura)).toStringAsFixed(2));
  }

  String getNome() => _nome;
  void setNome(String nome) => _nome = nome;

  double getPeso() => _peso;
  void setPeso(double peso) => _peso = peso;

  double getAltura() => _altura;
  void setAltura(double altura) => _altura = altura;

  double getImc() => _imc;
  void setImc(double imc) => _imc = imc;

  String getClassificacao() => _classificacao;
  void setClassificacao(String classificacao) => _classificacao = classificacao;

  String calculaIMC() {
    if (_imc < 16) {
      _classificacao = "Magreza grave";
    } else if (_imc < 17) {
      _classificacao = "Magreza moderada";
    } else if (_imc < 18.5) {
      _classificacao = "Magreza leve";
    } else if (_imc < 25) {
      _classificacao = "Saudável";
    } else if (_imc < 30) {
      _classificacao = "Sobrepeso";
    } else if (_imc < 35) {
      _classificacao = "Obesidade Grau I";
    } else if (_imc < 40) {
      _classificacao = "Obesidade Grau II (severa)";
    } else {
      _classificacao = "Obesidade Grau III (mórbida)";
    }

    return _classificacao;
  }
}
