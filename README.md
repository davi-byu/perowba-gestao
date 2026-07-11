# Perowba Gestão

Protótipo funcional e responsivo para gestão de vendas, estoque, clientes, fornecedores, compras, caixa, financeiro, relatórios, usuários e auditoria.

## Como abrir

A forma mais simples é usar a extensão **Live Server** no Visual Studio Code:

1. Extraia a pasta.
2. Abra a pasta `perowba-gestao` no VS Code.
3. Instale a extensão Live Server.
4. Clique com o botão direito em `index.html`.
5. Escolha **Open with Live Server**.

Também pode publicar pelo GitHub Pages ou Firebase Hosting.

## Acessos de demonstração

- Administrador: `admin@perowba.com`
- Senha: `123456`

- Vendedor: `vendedor@perowba.com`
- Senha: `123456`

## O que já funciona

- Login local de demonstração
- Painel com indicadores
- Cadastro e edição de produtos
- Alertas de estoque mínimo
- Movimentações e histórico de estoque
- PDV com carrinho e baixa automática
- Cadastro de clientes e fornecedores
- Registro de compras e entrada automática
- Caixa por operador
- Receitas e despesas
- Relatórios por período
- Exportação CSV
- Usuários e funções
- Auditoria
- Backup manual em JSON
- Layout responsivo
- Instalação como PWA quando publicado por HTTP/HTTPS

## Limitação importante

Este pacote é um **protótipo local**. Os dados ficam no `localStorage` do navegador. Ele não deve ser usado em produção antes da conexão com:

- Firebase Authentication
- Cloud Firestore
- Cloud Functions
- Firebase Storage
- App Check
- Regras de segurança
- Backups automáticos

O arquivo `firebase/firestore.rules` traz uma base inicial de regras, mas precisa ser revisado e testado antes da publicação.

## Próximas etapas

1. Criar projetos Firebase separados: desenvolvimento e produção.
2. Trocar o login local pelo Firebase Authentication.
3. Criar as coleções por empresa.
4. Migrar produtos, clientes, fornecedores, vendas e movimentações.
5. Finalizar vendas por Cloud Function ou transação.
6. Adicionar imagens no Firebase Storage.
7. Aplicar App Check.
8. Configurar backups.
9. Criar testes de permissões.
10. Integrar NF-e/NFC-e e pagamento somente com fornecedores especializados.

## Estrutura

- `index.html`: aplicação
- `estilos/app.css`: layout e responsividade
- `scripts/app.js`: regras do protótipo
- `manifest.webmanifest`: instalação PWA
- `sw.js`: cache básico
- `firebase/firestore.rules`: base de segurança
- `firebase/firebase-config.example.js`: modelo da configuração
