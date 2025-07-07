# Backend API

This backend provides a REST API for displaying database information without CRUD operations.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure database:**
   - Update the database configuration in `config/database.js`
   - Make sure your MySQL server is running
   - Ensure the `ts_wisla` database exists

3. **Start the server:**
   ```bash
   # Development mode (with auto-restart)
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### Health Check
- `GET /health` - Check if server is running

### Data Endpoints
- `GET /api/zawodnicy` - Get all players
- `GET /api/mecze` - Get all matches
- `GET /api/druzyny` - Get all teams
- `GET /api/statystyki` - Get all statistics
- `GET /api/summary` - Get data summary (counts)

## Response Format

All endpoints return JSON responses in this format:
```json
{
  "success": true,
  "data": [...]
}
```

## Error Handling

Errors are returned in this format:
```json
{
  "success": false,
  "error": "Error message"
}
```

## Database Tables Expected

The API expects these tables in your `ts_wisla` database:
- `zawodnicy` (players)
- `mecze` (matches)
- `druzyny` (teams)
- `statystyki` (statistics)

## CORS

The API is configured to accept requests from any origin for development. For production, you should configure CORS properly. 