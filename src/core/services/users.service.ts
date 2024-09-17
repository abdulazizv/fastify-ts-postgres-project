import client from "@database/postgres";

export async function deductBalance(userId: number, amount: number) {
    try {
        await client.query('BEGIN');
        const { rows } = await client.query('SELECT balance FROM users WHERE id = $1', [userId]);
    
        if (rows.length === 0) {
         return { success: false, error_code: 400, message: "User not found" };
        }
    
        const balance = rows[0].balance;
        if (balance < amount) {
          return {success: false, error_code: 409, message: 'Insufficient balance'};
        }
    
        await client.query('UPDATE users SET balance = balance - $1 WHERE id = $2', [amount, userId]);
        await client.query('COMMIT');
        return { success: true, error_code: 200, message: "success" }
      } catch (error) {
        await client.query('ROLLBACK');
        console.log(error);
        return { success: false, error_code: error.statusCode || 500, message: error.message || "Internal server error" };
      }
}