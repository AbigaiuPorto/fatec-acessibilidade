# Projeto base para aula de Acessibilidade
Algoritmo: Controle de Tamanho da Fonte

Início

Definir tamanho da fonte padrão como 16

Quando o botão "A+" for clicado
    Aumentar o tamanho da fonte em 2
    Aplicar o novo tamanho da fonte na página

Quando o botão "A-" for clicado
    Diminuir o tamanho da fonte em 2
    Aplicar o novo tamanho da fonte na página

Quando o botão "Fonte Padrão" for clicado
    Voltar o tamanho da fonte para 16
    Aplicar o tamanho padrão na página

Fim

# ATIVIDADE 01

 Nesse algoritmo foi feito a implementação de três  botões para aumento e diminuição de página , e fonte padrao
## Estrutura do Projeto

- `index.html` – página principal contendo:
  - Trê botões: `A+`, `A-` e : `Fonte Padrão` para aumentar ,diminuir a fonte e voltar ao tamanho padrão.
  - JavaScript usando funções `aumentarFonte()` e `diminuirFonte()`.
  -adicionou o botão fonte padrão
  - foi separado o css e JavaCript da página do index e foi criado uma pasta separada para cada um deles
- a cor, e tamanho da fonte dos botões foram alteradas.


# Estrutura do Projeto

O projeto está organizado da seguinte forma:

index.html

Contém a estrutura da página

Inclui os três botões: A+, A- e Fonte Padrão css/

Arquivo separado para estilização

Alteração de cor, tamanho da fonte e aparência dos botões

js/

Arquivo JavaScript separado

Implementação das funções:

aumentarFonte()

diminuirFonte()

fontePadrao()

A separação dos arquivos foi realizada para manter o código mais organizado e seguindo boas práticas de desenvolvimento.
