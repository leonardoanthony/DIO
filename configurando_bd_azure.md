# Criação de Máquinas Virtuais e Bancos de Dados SQL na Azure

## Criação de Máquinas Virtuais (VMs)

A criação de **máquinas virtuais** na Azure é um processo essencial para a implementação de infraestrutura em nuvem. Durante a configuração de uma VM, algumas opções importantes precisam ser consideradas:

- **Sistema Operacional**: Escolha entre Windows, Linux ou outras distribuições.
- **Tamanho da VM**: Selecione a quantidade de vCPUs, memória e outras capacidades com base nas necessidades da aplicação.
- **Opção de Disponibilidade**: Utilize **Conjuntos de Disponibilidade** ou **Zonas de Disponibilidade** para garantir alta disponibilidade e proteção contra falhas.
- **Discos**: Defina o tipo de disco (SSD, HDD) com base na performance desejada.
- **Rede**: Configure endereços IP, sub-redes e regras de firewall para controlar o acesso à máquina.

### Redundância e Disponibilidade

Durante a criação de uma VM, você pode escolher **opções de redundância** para aumentar a disponibilidade do serviço:

- **Conjuntos de Disponibilidade**: Protegem contra falhas de hardware dentro de um datacenter.
- **Zonas de Disponibilidade**: Oferecem redundância geográfica dentro de uma região.

## Bancos de Dados SQL

A Azure também permite a criação e gerenciamento de **bancos de dados SQL** totalmente gerenciados, com escalabilidade e alta disponibilidade. Algumas opções configuráveis incluem:

- **Tipo de Banco de Dados**: Escolha entre SQL Server ou Azure SQL Database.
- **Escalabilidade**: Ajuste a performance conforme necessário, com opções de computação elástica ou dedicada.
- **Backup e Restauração**: Os bancos de dados SQL na Azure oferecem backup automático e opções de recuperação com até **35 dias** de retenção.
- **Segurança**: Configure firewalls, criptografia e autenticação multi-fator para proteger os dados.
- **Integração**: Os bancos de dados SQL podem ser integrados a outras soluções da Azure, como **Azure Data Factory** e **Power BI**, para facilitar análises e transformações de dados.

### Escalabilidade e Desempenho

Os bancos de dados SQL na Azure são otimizados para oferecer alta performance. Você pode escalar verticalmente (aumentando recursos como CPU e memória) ou horizontalmente (adicionando mais instâncias ou bancos de dados).

