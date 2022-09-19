const Client = require("ssh2-sftp-client");
const { listenForNewEntries } = require("./app");

const sftp = new Client("moenco-client");

const config = {
  host: process.env.SERVER_HOST,
  username: process.env.SERVER_USERNAME,
  password: process.env.SERVER_PASSWORD,
};
try {
  (async () => {
    const p = await sftp.connect(config).then((s) => {
      return sftp.cwd();
    });
    sftp.on("error", (err) => err);
    console.log(`Remote working directory is ${p}`);

    // return sftp.end();
    module.exports = { sftp };

    listenForNewEntries();
  })();
} catch (err) {
  //TODO: log to file
  console.log(`Error: ${err.message}`); // error message will include 'example-client'
}