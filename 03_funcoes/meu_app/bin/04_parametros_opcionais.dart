

void main(List<String> arguments) {

  printName("Leonardo");
  printName("Leonardo", lastname: "Anthony");
  printName("Leonardo", nickname: "Anthony");

}

void printName(String name, {String lastname = "", String nickname = "Leo"}){
  print("Nome: $name $lastname ou $nickname");
}