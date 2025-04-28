class Aluno {
  String _nome = "";
  List<double> _notas = [];

  Aluno(String nome) {
    _nome = nome;
  }

  void setNome(String nome) => _nome = nome;
  String getNome() => _nome;

  // void setNotas(List<double> notas) => _notas = notas;
  void addNota(double nota) => _notas.add(nota);
  List<double> getNotas() => _notas;
}
