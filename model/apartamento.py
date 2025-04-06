from sqlalchemy import Column, String, Integer, Float # type: ignore
from typing import Union
from model.base import Base  


class Apartamento(Base):
    __tablename__ = 'apartamento'

    id = Column("pk_apartamento", Integer, primary_key=True)  # Mantida a chave como pk_apartamento
    condominio = Column(String(100), unique=True)
    endereco = Column(String(140))
    disposicao = Column(String(30))
    valor = Column(Float)

    # Relacionamento com Comentario, usando back_populates para refletir a bidirecionalidade
#    comentarios = relationship("Comentario", back_populates="apartamento")

    def __init__(self, condominio: str, endereco: str, disposicao: str, valor: float):
        """
        Cria um Apartamento

        Arguments:
            condominio: nome do condomínio do Apartamento.
            endereco: localização do Apartamento.
            disposicao: quantidade de quartos e se tem suíte.
            valor: valor esperado para o apartamento.
            data_insercao: data de quando o produto foi inserido à base.
        """
        self.condominio = condominio
        self.endereco = endereco        
        self.disposicao = disposicao
        self.valor = valor
