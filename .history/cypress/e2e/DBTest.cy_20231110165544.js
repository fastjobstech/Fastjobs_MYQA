const pool = require('../support/db');
describe('User management', () => {
    it('should insert a new user', async () => {
        const result = await pool.execute('INSERT INTO users (name, email) VALUES (?, ?)', ['John Doe', 'johndoe@example.com']);
        expect(result[0].affectedRows).to.equal(1);
    });
});