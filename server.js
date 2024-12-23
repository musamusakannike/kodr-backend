const app = require("./src/app");
const { PORT } = require("./src/config/keys.config");
require("dotenv").config();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
