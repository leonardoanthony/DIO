
void main(List<String> arguments) {
 
  Map<String, dynamic> map1 = Map<String, dynamic>();
  var map2 = {
    'zero': 0,
    'one': 1,
    'two': 2,
  };

  
  print("## Recupera pela chave");
  print(map2['one']);

  print("## Adiciona varios itens");
  map2.addAll({'three': 3, 'four': 4});
  print(map2);

  print("## Vazio / Preenchido");
  print(map2.isNotEmpty);
  print(map1.isEmpty);

  print("## Contem chave");
  print(map2.containsKey('one'));
  print(map1.containsKey('five'));

  map1.addAll({"Nome": "Leonardo"});
  map1.addAll({"Idade": 26});
  map1.addAll({"Casado": true});
  map1.addAll({"DataCadastro": DateTime(2025, 01, 01)});
  





}
