const express = require('express');
const router = express.Router();
const { pool } = require('../config/database');

// Get all players (zawodnicy)
router.get('/zawodnicy', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM zawodnicy ORDER BY id');
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('Error fetching zawodnicy:', error);
    res.status(500).json({ success: false, error: 'Database error' });
  }
});

// Get all matches (mecze)
router.get('/mecze', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM mecze ORDER BY data_meczu DESC');
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('Error fetching mecze:', error);
    res.status(500).json({ success: false, error: 'Database error' });
  }
});

// Get all teams (druzyny)
router.get('/druzyny', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM druzyny ORDER BY nazwa');
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('Error fetching druzyny:', error);
    res.status(500).json({ success: false, error: 'Database error' });
  }
});

// Get statistics (statystyki)
router.get('/statystyki', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM statystyki ORDER BY sezon DESC');
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('Error fetching statystyki:', error);
    res.status(500).json({ success: false, error: 'Database error' });
  }
});

// Get all data summary
router.get('/summary', async (req, res) => {
  try {
    const [zawodnicy] = await pool.execute('SELECT COUNT(*) as count FROM zawodnicy');
    const [mecze] = await pool.execute('SELECT COUNT(*) as count FROM mecze');
    const [druzyny] = await pool.execute('SELECT COUNT(*) as count FROM druzyny');
    
    res.json({
      success: true,
      data: {
        zawodnicy: zawodnicy[0].count,
        mecze: mecze[0].count,
        druzyny: druzyny[0].count
      }
    });
  } catch (error) {
    console.error('Error fetching summary:', error);
    res.status(500).json({ success: false, error: 'Database error' });
  }
});

module.exports = router; 