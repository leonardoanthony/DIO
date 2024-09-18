# Níveis de SLA e Disponibilidade

## Níveis de SLA

A Microsoft oferece diferentes níveis de **SLA (Acordo de Nível de Serviço)**, com variações no tempo de inatividade permitido. Quanto maior o SLA, maior a garantia de disponibilidade, mas também mais elevados são os recursos e custos associados. Os principais níveis de SLA são:

| **SLA**    | **Tempo de Inatividade por Semana** | **Tempo de Inatividade por Mês** | **Tempo de Inatividade por Ano** |
|------------|------------------------------------|----------------------------------|---------------------------------|
| **99%**    | 1,68 horas                         | 7,2 horas                       | 3,65 dias                      |
| **99,9%**  | 101 minutos                        | 43,2 minutos                    | 8,76 horas                     |
| **99,95%** | 5 minutos                          | 21 minutos                      | 4,38 horas                     |
| **99,99%** | 1,01 minutos                       | 4,32 minutos                    | 52,56 minutos                  |
| **99,999%**| 6 segundos                         | 25,9 segundos                   | 5,26 minutos                   |

### Ressarcimento

A Microsoft pode ressarcir os clientes caso o tempo de inatividade ultrapasse os limites acordados no SLA. É importante lembrar que, quanto maior o nível de SLA escolhido, maiores serão os custos envolvidos.

### Comparações de SLA

Nas provas de certificação ou avaliações, podem aparecer comparações de tempos de inatividade entre diferentes níveis de SLA. Por exemplo: entre **99,99%** e **99,999%**, o segundo tem um menor tempo de inatividade.

## Máquinas Virtuais

Em relação às **máquinas virtuais**, além das opções tradicionais de configuração, existe a **opção de disponibilidade**, que garante maior redundância e resiliência para os serviços críticos.

## Contas de Armazenamento

As contas de armazenamento da Azure oferecem diferentes opções de **redundância**, garantindo a integridade e disponibilidade dos dados. As principais opções são:

- **LRS (Locally Redundant Storage)**: Redundância dentro de uma única região.
- **GRS (Geo-Redundant Storage)**: Redundância entre regiões geograficamente distintas.
- **ZRS (Zone-Redundant Storage)**: Redundância entre zonas dentro de uma região.
- **GZRS (Geo-Zone-Redundant Storage)**: Combina redundância entre zonas e regiões geográficas.

