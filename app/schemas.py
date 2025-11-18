from pydantic import BaseModel
from datetime import date
from typing import Optional

class BookBase(BaseModel):
    title: str
    author: str
    start_date: Optional[date] = None
    end_date: Optional[date] = None
    rating: Optional[float] = None
    comments: Optional[str] = None
    status: str  # "reading", "finished", "want to read"

class BookRead(BookBase):
    id: int

    class Config:
        orm_mode = True

class BookUpdate(BaseModel):
    title: Optional[str] = None
    author: Optional[str] = None
    start_date: Optional[date] = None
    end_date: Optional[date] = None
    rating: Optional[float] = None
    comments: Optional[str] = None
    status: Optional[str] = None

