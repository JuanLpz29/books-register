from sqlalchemy import Column, Integer, String, Date, Float
from .database import Base

class Book(Base):
    __tablename__ = "books"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    author = Column(String, nullable=False)
    start_date = Column(Date, nullable=True)
    end_date = Column(Date, nullable=True)
    rating = Column(Float, nullable=True)
    comments = Column(String, nullable=True)
    status = Column(String, nullable=False)
