const express = require("express");
const os = require("os");
const dns = require("dns");

const readFileData = require("./read");

const app = express();
const PORT = 3000;

/* Test route */
app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

/* Read file route */
app.get("/readfile", (req, res) => {
  try {
    const data = readFileData();
    res.send(data);
  } catch (error) {
    res.status(500).send("Error reading file");
  }
});

/* System details route */
app.get("/systemdetails", (req, res) => {
  const totalMemory = (os.totalmem() / (1024 ** 3)).toFixed(2);
  const freeMemory = (os.freemem() / (1024 ** 3)).toFixed(2);
  const cpuInfo = os.cpus();

  res.json({
    platform: os.platform(),
    totalMemory: `${totalMemory} GB`,
    freeMemory: `${freeMemory} GB`,
    cpuModel: cpuInfo[0].model,
    cpuCores: cpuInfo.length // bonus
  });
});

/* Get IP route */
app.get("/getip", (req, res) => {
  dns.lookup("masaischool.com", { all: true }, (err, addresses) => {
    if (err) {
      return res.status(500).send("Error fetching IP address");
    }

    res.json({
      hostname: "masaischool.com",
      addresses: addresses
    });
  });
});

/* Start server */
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
