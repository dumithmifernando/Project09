-- UniVerse Database Migration File
-- Version: 1.0
-- Date: 2025-12-12
-- Description: Initial database schema for University Club Management System

-- ======================
-- Step 1: Create Database
-- ======================
CREATE DATABASE IF NOT EXISTS universe_db;
USE universe_db;

-- ======================
-- Step 2: Create Tables
-- ======================

-- Clubs table
CREATE TABLE IF NOT EXISTS clubs (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    logo_url VARCHAR(500),
    admin_id BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (admin_id) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_admin (admin_id)
);

-- ======================
-- Step 3: Insert Default Data
-- ======================

-- Insert sample clubs
INSERT INTO clubs (name, description, admin_id) VALUES
('Computer Science Club', 'A club for students interested in programming, software development, and technology.', NULL),
('Photography Club', 'Capture moments and learn the art of photography with fellow enthusiasts.', NULL),
('Music Society', 'For music lovers to share, perform, and appreciate different genres of music.', NULL),
('Debate Society', 'Sharpen your argumentative and public speaking skills through structured debates.', NULL),
('Sports Club', 'Stay active and healthy while competing in various sports activities.', NULL)
ON DUPLICATE KEY UPDATE name=name;

-- ======================
-- Step 4: Verification Queries
-- ======================

-- Check if tables are created
SELECT 'Tables created successfully' AS status;
SELECT COUNT(*) as club_count FROM clubs;

-- ======================
-- For Team Collaboration
-- ======================
-- Each team member should:
-- 1. Create their own MySQL database locally
-- 2. Run this file to create the schema
-- 3. Update backend/src/main/resources/application.properties with their MySQL password
-- 4. Never commit database credentials to GitHub
-- 5. Use .env file or application-local.properties for local settings

-- ======================
-- Rollback (if needed)
-- ======================
-- DROP DATABASE IF EXISTS universe_db;
