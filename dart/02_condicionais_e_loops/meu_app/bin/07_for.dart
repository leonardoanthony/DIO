void main(List<String> arguments) {
  for (var i = 0; i < 10; i++) {
    print(i);
  }

  String texto = "Formação Flutter Specialist";

  for (var i = 0; i < texto.length; i++) {
    print(texto[i]);
  }

  List<String> alunos = [
    "Naruto",
    "Felicia",
    "Zaheer",
    "Zulema",
    "Tambor",
    "Nala",
  ];

  for (var i = 0; i < alunos.length; i++) {
    print(alunos[i]);
  }

  int posicaoFibonacci = 10;
  int f0 = 0;
  int f1 = 1;
  int fn = 0;

  for (var i = 0; i < posicaoFibonacci; i++) {
    fn = f0 + f1;
    f0 = f1;
    f1 = fn;
    print(fn);    
  }
}
