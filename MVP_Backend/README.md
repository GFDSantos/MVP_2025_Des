# Imobiliária - API e Front-end

Este projeto faz parte do material didático da disciplina **Desenvolvimento Full Stack Básico** e tem como objetivo demonstrar a criação de uma aplicação completa utilizando **Python (Flask)** no back-end, **HTML/CSS/JS** no front-end e conteinerização com **Docker** e **Docker Compose**.

---

## 📦 Como Executar com Docker

> Certifique-se de ter o Docker e Docker Compose instalados.

1. Clone o repositório:
  
   git clone <URL-do-repositório>
   cd nome-do-projeto
Execute a aplicação:

docker-compose up --build
Acesse no navegador:

API (Swagger): http://localhost:5000

Front-end: http://localhost:8080

🛑 Como Parar a Aplicação
Para encerrar os containers:


CTRL + C
ou


docker-compose down
💡 Sobre o Projeto
A aplicação simula uma plataforma de venda de imóveis, com foco em:

Imóveis Novos da Construtora Cury

Imóveis Usados de clientes que compraram com a Cury

Funcionalidades:

Cadastro, listagem, atualização e exclusão de apartamentos

Interface amigável para usuários via Front-end

API REST documentada com Swagger

🔧 Tecnologias Utilizadas
Python 3.11

Flask, Flask-CORS, Flask-OpenAPI3

SQLAlchemy, SQLite

Pydantic

HTML, CSS, JS

Docker e Docker Compose

🧪 Testando Sem Docker (modo desenvolvimento)
Use um ambiente virtual:

python -m venv env
source env/bin/activate  # Linux/macOS
.\env\Scripts\activate   # Windows

pip install -r requirements.txt
flask run --host 0.0.0.0 --port 5000
📌 Considerações Finais
Este projeto representa uma versão beta da aplicação. A versão alfa será baseada nos requisitos finais fornecidos pelo cliente. O MVP atual foi desenvolvido com base em uma ideia de negócio real e servirá de base para melhorias e integrações futuras.

---

## 🇺🇸 English Version

```markdown
# Real Estate App - API and Front-end

This project is part of the course material for **Basic Full Stack Development** and aims to demonstrate the creation of a complete application using **Python (Flask)** for the back-end, **HTML/CSS/JS** for the front-end, and containerization with **Docker** and **Docker Compose**.

---

## 📦 How to Run with Docker

> Make sure you have Docker and Docker Compose installed.

1. Clone the repository:
  
   git clone <repository-url>
   cd project-name
Start the application:


docker-compose up --build
Open in your browser:

API (Swagger): http://localhost:5000

Front-end: http://localhost:8080

🛑 How to Stop the App
To shut down the containers:


CTRL + C
or


docker-compose down
💡 About the Project
This app simulates a real estate platform, focusing on:

New Apartments from the construction company (Cury)

Used Apartments offered by customers who bought from Cury

Features:

Create, list, update, and delete apartments

User-friendly Front-end interface

REST API documented via Swagger

🔧 Technologies Used
Python 3.11

Flask, Flask-CORS, Flask-OpenAPI3

SQLAlchemy, SQLite

Pydantic

HTML, CSS, JS

Docker and Docker Compose

🧪 Testing Without Docker (Dev Mode)
Use a virtual environment:


python -m venv env
source env/bin/activate  # Linux/macOS
.\env\Scripts\activate   # Windows

pip install -r requirements.txt
flask run --host 0.0.0.0 --port 5000

📌 Final Notes
This project represents the beta version of the application. The alpha version will be designed based on final client requirements. The current MVP is based on a real business idea and will serve as a base for future improvements and integrations.


