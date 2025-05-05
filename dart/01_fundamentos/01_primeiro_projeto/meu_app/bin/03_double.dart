
void main(List<String> arguments) {
  double numero1 = 1.1;
  var numero2 = 2.1;

  print("## Remove ponto flutuante");
  print(numero1.truncate());
  // print(numero1.toInt());

  print("## Arredonda pra cima");
  print(numero1.ceil());
  print(numero2.ceil());

  print("## Arredonda pra baixo");
  print(numero1.floor());
  print(numero2.floor());

  print("## Retorna se o numero é finito");
  print(numero1.isFinite);
  print(numero2.isFinite);
  
  print("## Retorna se o numero é infinito");
  print(numero1.isInfinite);
  print(numero2.isInfinite);

  print("## Retorna se é valido");
  print(numero1.isNaN);
  print(numero2.isNaN);

  print("## Retorna se é negativo");
  print(numero1.isNegative);
  print(numero2.isNegative);

  print("## Converte de String para double ");
  print(double.parse('10'));
  //! print(double.parse('teste'));
  print(double.tryParse('teste'));


}
