void main(List<String> arguments) {
  String texto1 = "DIO";
  var texto2 = "Flutter Specialist";

  print(texto1);
  print(texto2);

  print("## Comparação se vazio");
  print(texto2.isEmpty);
  print("".isEmpty);
  print(" ".isEmpty);

  print("## Tamanho da string");
  print(texto1.length);
  print(texto2.length);

  print("## Maiuscula / Minuscula");
  print(texto1.toLowerCase());
  print(texto2.toUpperCase());

  print("## Se na string contem outra string");
  print(texto2.contains("Flutter"));

  print("## Obtem parte de uma string");
  print(texto2.substring(5));
  print(texto2.substring(1,5));

  print("## Obtem a posição do caractere ou string em outra");
  print(texto2.indexOf('Flutter'));
  print(texto2.indexOf('S'));
  print(texto2.indexOf('@'));

  print("## Substitui caracteres da string");
  print(texto2.replaceAll('e', 'u'));

  print("## Divide uma string e retorna uma lista");
  String meuDia = '19-04-2025';
  print(meuDia.split('-'));

  print("## Remove espaços");
  
  print(" dio ".trim());
  print(" dio ".trimLeft());
  print(" dio ".trimRight());
  





}
