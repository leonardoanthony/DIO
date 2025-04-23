void main(List<String> arguments) {
  List<int> numeros = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

  numeros.forEach((n) {
    print(n);
  });

  for (var numero in numeros) {
    print(numero);
  }
}
