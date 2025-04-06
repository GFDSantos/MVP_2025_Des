from pydantic import BaseModel # type: ignore
from typing import Optional, List
from model.apartamento import Apartamento

class ApartamentoUpdateSchema(BaseModel):
    condominio: str
    endereco: str
    disposicao: str
    valor: float
    
class ApartamentoSchema(BaseModel):
    """ Define como um novo apartamento a ser inserido deve ser representado
    """
    condominio: str = "Condomínio Rio Wonder"
    endereco: str = "R. Geógrafo Milton Santos, 121"
    disposicao: str = "Dois quartos c/Suíte"
    valor: float = 565000


class ApartamentoBuscaSchema(BaseModel):
    """ Define como deve ser a estrutura que representa a busca. Que será
        feita apenas com base no nome do condomínio.
    """
    condominio: str = "Condomínio Rio Wonder"


class ListagemApartamentosSchema(BaseModel):
    """ Define como uma listagem de apartamentos será retornada.
    """
    apartamentos:List[ApartamentoSchema]


def apresenta_apartamentos(apartamentos: List[Apartamento]):
    """ Retorna uma representação do apartamento seguindo o schema definido em
        ApartamentoViewSchema.
    """
    result = []
    for apartamento in apartamentos:
        result.append({
            "id": apartamento.id,
            "condominio": apartamento.condominio,
            "endereco": apartamento.endereco, 
            "disposicao": apartamento.disposicao,
            "valor": apartamento.valor,
        })

    return {"apartamentos": result}


class ApartamentoViewSchema(BaseModel):
    """ Define como o apartamento será retornado: apartamento
    """
    id: int = 1
    condominio: str = "Condominio Rio Wonder"
    endereco: str = "R. Geógrafo Milton Santos, 121"
    disposicao: str = "Dois quartos c/Suíte"
    valor: float = 565000


class ApartamentoDelSchema(BaseModel):
    """ Define como deve ser a estrutura do dado retornado após uma requisição
        de remoção.
    """
    message: str
    condominio: str


def apresenta_apartamento(apartamento: Apartamento):
    """ Retorna uma representação do apartamento seguindo o schema definido em
        ApartamentoViewSchema.
    """
    return {
        "id": apartamento.id,
        "condominio": apartamento.condominio,
        "endereco": apartamento.endereco,
        "disposicao": apartamento.disposicao,
        "valor": apartamento.valor,
        }
