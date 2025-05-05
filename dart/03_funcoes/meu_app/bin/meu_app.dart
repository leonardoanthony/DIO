
void main(List<String> arguments) {

  print(incrementar(8));
  print(decrementar(12));

  print(executar(98, incrementar));
  print(executar(102, decrementar));

}

int executar(int numero, Function func){
  return func(numero);
}


int incrementar(int numero) => numero + 1;
int decrementar(int numero) => numero - 1;

