# Stock Logistics

- Stock control system with authentication, role-based access control (RBAC),
  and route optimization (Dijkstra's Algorithm), built in vanilla JS using a
  hexagonal architecture (ports & adapters).

## Technologies

- JavaScript (ES6+) - Classes, Private Fields, Modules
- HTML5 / CSS3
- Jest for testing

## Current Status

- [x] Usuario entity (login/logout, password and status encapsulation)
- [x] Auth.Service (role-based permission verification - RBAC)
- [x] Custom error handling (naoAutorizadoError)
- [ ] Automated tests (Jest)
- [ ] UI integration

## Project Features

- Hexagonal Architecture: the core (`core/entities`) does not depend on
  external layers — services depend on entities, never the other way around.
- Access Control (RBAC): fixed permissions per role, verified
  via `Auth.Service`.
- Error handling with `throw`/`try-catch` using custom error classes,
  instead of returning success/failure booleans.

## Lessons Learned

- The difference between passing a full instance vs. primitive values
  as a parameter, and its impact on coupling and testability.
- Why a domain entity should not depend on an external service
  (dependency inversion in practice).
- When to use `throw`/`try-catch` as the single source of truth for a
  decision, avoiding two conflicting sources (a redundant `return` + `throw`)
  for the same rule.

**Created by João Paulo Almeida Aureliano**
