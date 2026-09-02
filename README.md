# Logística Estoque

- Sistema de controle de estoque com autenticação, controle de acesso por cargo (RBAC) e otimização de rotas (Algoritmo de Dijkstra), construído em JS puro seguindo utilizando uma arquitetura hexagonal (ports & adapters)

## Tecnologias

- JavaScript (ES6+) - Classes, Private Fields, Modules
- HTML5 / CSS3
- Jest para testes

## Status Atual

- [x] Entidade Usuario (login/logout, encapsulamento de senha e status)
- [x] Auth.Service (verificação de permissões por cargo - RBAC)
- [x] Tratamento de erros customizados (naoAutorizadoError)
- [] Testes automatizados (Jest)
- [] Integração com UI

## Características do projeto

- Arquitetura Hexagonal: o núcleo (`core/entities`) não depende de
  camadas externas — serviços dependem das entidades, nunca o contrário.
- Controle de Acesso (RBAC): permissões fixas por cargo, verificadas
  via `Auth.Service`.
- Tratamento de erros com `throw`/`try-catch` usando classes de erro
  customizadas, em vez de retornar booleanos de sucesso/falha.

## Lições aprendidas

- Diferença entre passar uma instância completa vs. valores primitivos
  como parâmetro, e o impacto disso em acoplamento e testabilidade.
- Por que uma entidade de domínio não deve depender de um serviço externo
  (inversão de dependência na prática).
- Quando usar `throw`/`try-catch` como único mecanismo de decisão, evitando
  duas fontes de verdade (`return` redundante + `throw`) para a mesma regra.

**Criado por João Paulo Almeida Aureliano**
