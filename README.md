# Books-register
A personal project to register the books that I read and track how long it takes to read them.

### Installation

1. Clone the repository (if applicable) or navigate to the project directory:
```bash
cd books-register
```

2. Create a virtual environment (recommended):
```bash
python -m venv venv
```

3. Activate the virtual environment:
   - On macOS/Linux:
   ```bash
   source venv/bin/activate
   ```
   - On Windows:
   ```bash
   venv\Scripts\activate
   ```

4. Install dependencies:
```bash
pip install -r requirements.txt
```

## Running the Backend

The backend is a FastAPI application that provides a REST API for managing books.

1. Make sure you're in the project root directory and your virtual environment is activated.

2. Run the server using uvicorn:
```bash
uvicorn app.main:app --reload
```

   - `--reload` enables auto-reload on code changes (useful for development)

3. The API will be available at:
   - **Interactive API Documentation (Swagger UI)**: http://localhost:8000/docs

### API Endpoints

- `GET /books` - Get all books
- `GET /books/{book_id}` - Get a specific book by ID
- `POST /books` - Create a new book
- `PUT /books/{book_id}` - Update a book
- `DELETE /books/{book_id}` - Delete a book

## Running the Frontend

*Note: Frontend is not yet implemented. When available, follow these instructions:*

1. Navigate to the frontend directory (e.g., `frontend/` or `client/`)

2. Install dependencies:
   - If using npm:
   ```bash
   npm install
   ```
   - If using yarn:
   ```bash
   yarn install
   ```

3. Start the development server:
   - If using npm:
   ```bash
   npm start
   ```
   - If using yarn:
   ```bash
   yarn start
   ```

4. The frontend will typically be available at http://localhost:3000

