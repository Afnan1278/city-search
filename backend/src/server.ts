import app from './app';
import { config } from 'dotenv';

config();  // Load environment variables

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
