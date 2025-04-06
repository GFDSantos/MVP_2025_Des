import os
from sqlalchemy import create_engine # type: ignore
from sqlalchemy.orm import sessionmaker # type: ignore
from sqlalchemy_utils import database_exists, create_database # type: ignore

# Importa os elementos do modelo
from model.base import Base
from model.apartamento import Apartamento

# Caminho do banco
db_path = "database"
db_file = "db.sqlite3"
full_path = os.path.join(db_path, db_file)

# Cria o diretório do banco se não existir
os.makedirs(db_path, exist_ok=True)

# URL de conexão com o SQLite
db_url = f'sqlite:///{full_path}'

# Cria a engine e sessão
engine = create_engine(db_url, echo=False)
Session = sessionmaker(bind=engine)

# Cria o banco e as tabelas, se necessário
if not database_exists(engine.url):
    create_database(engine.url)

Base.metadata.create_all(engine)
