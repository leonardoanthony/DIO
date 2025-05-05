
void main(List<String> arguments) {
    var prova1 = 9;
    var prova2 = 5;
    var media = (prova1 + prova2) / 2;
    print("Média $media");
    print(media >= 7);
    print(media < 7);
    print(prova1 == prova2);
    print(prova1 != prova2);

    print((prova1 >= 7) && (prova2 >= 7));
    print((prova1 == 10) || (prova2 == 10));
}
