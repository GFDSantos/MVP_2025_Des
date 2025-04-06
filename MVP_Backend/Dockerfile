# Use uma imagem leve do Python
FROM python:3.11-slim

# Define variáveis de ambiente para o Flask
ENV FLASK_APP=app.py
ENV FLASK_ENV=development

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o requirements.txt e instala as dependências
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copia todos os arquivos da pasta do projeto para o container
COPY . .

# Expõe a porta que o Flask usará
EXPOSE 5000

# Comando para rodar a aplicação
CMD ["python", "-m", "flask", "run", "--host=0.0.0.0"]
