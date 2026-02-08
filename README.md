# Café com Código

O **Café com Código** é um projeto **backend** desenvolvido em Node.js que funciona como um **serviço de newsletter por e-mail**.  
O sistema realiza o cadastro de usuários e envia automaticamente conteúdos de tecnologia e programação diretamente para o e-mail dos inscritos.

Este foi meu **primeiro projeto backend completo**, envolvendo lógica de servidor, agendamento de tarefas, envio de e-mails e deploy em produção.

---

## Visão Geral

O projeto tem como objetivo simular um serviço real de newsletter, focando principalmente na **lógica de backend**, comunicação com APIs externas e automação de envios periódicos.

O frontend é simples e funcional, utilizado apenas para:
- Cadastro do usuário
- Cancelamento da inscrição
- Confirmação de usário

Toda a lógica principal está concentrada no servidor.

---

## Funcionalidades

- Cadastro de usuários para recebimento da newsletter
- Cancelamento de inscrição
- Envio automático de e-mails com notícias de tecnologia
- Agendamento de envios utilizando tarefas cron
- Consumo de APIs externas para obtenção de notícias
- Sistema em produção com deploy real

---

## Tecnologias Utilizadas

- Node.js
- Express
- JavaScript
- Node-cron
- Nodemailer
- Axios
- Prisma ORM
- PostgreSQL
- HTML e CSS (frontend simples)

---

## Arquitetura

- Backend responsável por:
  - Gerenciamento de usuários
  - Agendamento dos envios
  - Integração com APIs de notícias
  - Envio de e-mails
- Frontend apenas como interface de entrada para o usuário
- Variáveis de ambiente para dados sensíveis
- Serviço hospedado em ambiente cloud

---

## Deploy

O projeto está disponível online em:

https://cafe-com-codigo.onrender.com

> Observação: o serviço está hospedado no plano gratuito do Render. O primeiro acesso pode levar alguns segundos devido ao cold start.

---

## Execução Local

```bash
git clone https://github.com/seu-usuario/cafe_com_codigo.git
cd cafe_com_codigo
npm install
npm start
