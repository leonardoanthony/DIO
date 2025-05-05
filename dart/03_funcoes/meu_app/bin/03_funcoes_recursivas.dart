

void main(List<String> arguments) {

  print(fatorial(-1));

}

int fatorial(int numero){
  if(numero <= 1){
    return 1;
  }
  return numero * fatorial(numero - 1);
}
