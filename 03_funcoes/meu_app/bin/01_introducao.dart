

void main(List<String> arguments) {
  printHelloWorld();
  printName('Leonardo');
  print(returnAge());
  int age = returnAge();
  print(age);

  int resultado = sum(20, 10);
  print(resultado);
}

void printHelloWorld() {
  print("Hello World");
}

void printName(String name){
  print("Meu nome é $name");
}

int returnAge(){
  return 27;
}

int sum(int number1, int number2){
  return number1 + number2;
}
