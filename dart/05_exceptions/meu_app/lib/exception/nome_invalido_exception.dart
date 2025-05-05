class NomeInvalidoException implements Exception {
  String _message = "";

  NomeInvalidoException(String message) {
    _message = message;
  }

  String error() => "NomeInvalidoException: $_message";

  @override
  String toString() {
    return error();
  }
}
