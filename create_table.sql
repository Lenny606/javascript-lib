-- CREATE TABLE IF NOT EXISTS employers (
--     company_name VARCHAR(255),
--     adress VARCHAR(255),
--     revenue NUMERIC(5, 2),
--     is_hiring BOOLEAN
-- );
CREATE TABLE conversations(
    user_name VARCHAR(255),
    employer_name VARCHAR(255),
    message TEXT,
    date_sent TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);