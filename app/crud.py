from sqlalchemy.orm import Session
from . import models, schemas

def get_books(db: Session):
    return db.query(models.Book).order_by(models.Book.title).all()

def get_book(db: Session, book_id: int):
    return db.query(models.Book).filter(models.Book.id == book_id).first()

def create_book(db: Session, book: schemas.BookBase):
    db_book = models.Book(**book.dict())
    db.add(db_book)
    db.commit()
    db.refresh(db_book)
    return db_book


def update_book(db: Session, book_id: int, book_update: schemas.BookUpdate):
    db_book = db.query(models.Book).filter(models.Book.id == book_id).first()
    if not db_book:
        return None

    update_data = book_update.dict(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_book, key, value)

    db.commit()
    db.refresh(db_book)
    return db_book

def delete_book(db: Session, book_id: int):
    db_book = db.query(models.Book).filter(models.Book.id == book_id).first()
    if not db_book:
        return None

    db.delete(db_book)
    db.commit()
    return db_book



