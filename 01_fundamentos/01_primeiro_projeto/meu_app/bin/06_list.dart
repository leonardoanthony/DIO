
void main(List<String> arguments) {
  List<String> lstString = [];
  var lstInt = [1,2,3];
  List lstDynamic = [];

  print("## Tamanho da lista");
  print(lstString.length);
  print(lstInt.length);

  print("## Adicionar Item");
  lstString.add('D');
  lstString.add('I');
  lstString.add('O');
  print(lstString);
  lstDynamic.add('A');
  lstDynamic.add(1);
  lstDynamic.add(2.1);
  lstDynamic.add(true);
  lstDynamic.add(lstString);
  print(lstDynamic);
  lstInt.add(4);


  print("## Remover Item");
  lstString.remove('D');
  lstString.remove('A');
  print(lstString);

  print("## Está ou não está vazia");
  print(lstString.isEmpty);
  print(lstDynamic.isNotEmpty);


  print("## Contem");
  print(lstString.contains('D'));
  print(lstString.contains('O'));
  
  print("## Where");
  print(lstInt.where((inteiro) => inteiro.isEven));

}
