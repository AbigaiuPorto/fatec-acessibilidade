# Projeto base para aula de Acessibilidade

# ATIVIDADE 01

 nesse algoritmo foi feito a implementação de dois botões para aumento e diminuição de página , usando html, css e JavaScript

## Estrutura do Projeto

- `index.html` – página principal contendo:
  - Dois botões: `A+` e `A-` para aumentar e diminuir a fonte.
  - JavaScript usando funções `aumentarFonte()` e `diminuirFonte()`.

##  Como funciona

1. A variável CSS `--base-font` define o tamanho padrão da fonte.
2. O JavaScript altera essa variável dinamicamente quando os botões são clicados.
3. O script está no `<head>` com o atributo `defer` para garantir que os elementos HTML já existam ao executar o código.
4. Cada clique aumenta ou diminui a fonte em 2px.

