

void main(List<String> arguments) {
  DateTime data1 = DateTime.now();
  var data2 = DateTime.parse("2025-01-01 01:15:00");

  print(data1);
  print(data2.day);
  print(data2.month);
  print(data2.year);
  print(data2.hour);
  print(data2.minute);
  print(data2.second);
  print(data2.weekday);

  print('## Soma de datas');

  print(data1);
  print(data1.add(Duration(days: 1)));
  print(data1.subtract(Duration(hours: 1)));
  data1 = data1.add(Duration(minutes: -1));
  print(data1);  

  print('## Compara datas');

  print(data1.isAfter(data2));
  print(data1.isBefore(data2));
  print(data1.compareTo(data2)); //? -1 se Antes | 0 se igual | 1 se Depois

}

