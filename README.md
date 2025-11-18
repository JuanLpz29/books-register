# Books-register
A personal project to register the books that I read and track how long it takes to read them.

## Project Structure

```
books-register/
├── app/                        # Backend (FastAPI)
│   ├── main.py                 # FastAPI application
│   ├── models.py               # SQLAlchemy models
│   ├── schemas.py              # Pydantic schemas
│   ├── crud.py                 # Database operations
│   └── database.py             # Database configuration
├── reading-tracker-frontend/   # Frontend (Nuxt.js)
│   ├── app/                    # Nuxt app directory
│   ├── plugins/                # Nuxt plugins (Vuetify)
│   └── nuxt.config.ts          # Nuxt configuration
├── requirements.txt            # Python dependencies
└── README.md
```

## Tech Stack

### Backend
- **FastAPI** - Modern Python web framework
- **SQLAlchemy** - SQL toolkit and ORM
- **Pydantic** - Data validation
- **Uvicorn** - ASGI server
- **SQLite** - Database (can be changed to PostgreSQL)

### Frontend
- **Nuxt 4** - The Intuitive Vue Framework
- **Vue 3** - Progressive JavaScript Framework
- **Vuetify 3** - Material Design Component Framework
- **Nuxt UI** - UI component library
- **TypeScript** - Typed JavaScript
- **Vite** - Next Generation Frontend Tooling

## Installation

### Backend Setup

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

4. Install Python dependencies:
```bash
pip install -r requirements.txt
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd reading-tracker-frontend
```

2. Install dependencies:
   - Using npm:
   ```bash
   npm install
   ```
   - Using yarn:
   ```bash
   yarn install
   ```
   - Using pnpm:
   ```bash
   pnpm install
   ```

### Frontend Dependencies

The frontend uses the following main dependencies:
- `nuxt` (^4.2.1) - Nuxt framework
- `vue` (^3.5.24) - Vue.js
- `vuetify` (^3.10.11) - Material Design components
- `@nuxt/ui` (^4.1.0) - Nuxt UI components
- `typescript` (^5.9.3) - TypeScript support
- `vite` (^7.2.2) - Build tool
- `vue-router` (^4.6.3) - Vue router
- `@nuxt/devtools` (^3.1.0) - Development tools

## Running the Backend

The backend is a FastAPI application that provides a REST API for managing books.

1. Make sure you're in the project root directory and your virtual environment is activated.

2. Run the server using uvicorn:
```bash
uvicorn app.main:app --reload
```

   - `--reload` enables auto-reload on code changes (useful for development)

3. The API will be available at:
   - **API**: http://localhost:8000
   - **Interactive API Documentation (Swagger UI)**: http://localhost:8000/docs
   - **Alternative API Documentation (ReDoc)**: http://localhost:8000/redoc

   **Alternative**: If `uvicorn` command is not found, use:
   ```bash
   python -m uvicorn app.main:app --reload
   ```

### API Endpoints

- `GET /books` - Get all books
- `GET /books/{book_id}` - Get a specific book by ID
- `POST /books` - Create a new book
- `PUT /books/{book_id}` - Update a book
- `DELETE /books/{book_id}` - Delete a book

## Running the Frontend

The frontend is a Nuxt.js application with Vuetify for Material Design components.

1. Make sure you're in the frontend directory:
```bash
cd reading-tracker-frontend
```

2. Start the development server:
   - Using npm:
   ```bash
   npm run dev
   ```

3. The frontend will be available at **http://localhost:3000**

### Frontend Build Commands

- **Development**: `npm run dev` (or `yarn dev`, `pnpm dev`)
- **Build for production**: `npm run build`


