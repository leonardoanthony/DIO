double calcularDesconto(double valor, double desconto, bool percentual) {
  if (desconto <= 0) {
    return valor;
  }

  if (valor <= 0) {
    throw new ArgumentError("Valor do produto deve ser maior que zero");
  }
  if (percentual) {
    return valor - ((valor * desconto) / 100);
  }
  return valor - desconto;
}
