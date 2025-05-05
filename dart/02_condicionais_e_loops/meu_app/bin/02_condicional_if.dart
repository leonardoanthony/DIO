
void main(List<String> arguments) {
    var prova1 = 4;
    var prova2 = 5;
    var media = (prova1 + prova2) / 2;

    if(media >= 7){
      print("O aluno PASSOU com a nota $media");
    }else if(media >= 5){
      print("O aluno FOI PARA A RECUPERAÇÃO com a nota $media");
    }else{
      print("O aluno REPROVOU com a nota $media");
    }


    print("Média $media");
    print(media >= 7);
    print(media < 7);
    print(prova1 == prova2);
    print(prova1 != prova2);

    print((prova1 >= 7) && (prova2 >= 7));
    print((prova1 == 10) || (prova2 == 10));
}
