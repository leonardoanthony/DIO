import 'dart:math';

class GeraNumAleatorioService {
  static int gerarNumeroAleatorio(int numMax) {
    return Random().nextInt(numMax);
  }
}