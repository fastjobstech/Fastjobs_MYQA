const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // baseUrl: "https://employer-test.fastjobs.my/",
    baseUrl: '//testuser:testpass@localhost/testdb',
    experimentalSessionAndOrigin: true
  },
  env: {
    de_username: "kimjayfastcoqa2@gmail.com",
    de_password: "Password1234",
    pl_username: "kimjay.luta@fastjobs.ph",
    pl_password: "Password1234",
    DB: {
      "user": "myuser",
      "host": "127.0.0.1",
      "database": "testDB",
      "password": "fastco88",
      "port": 32763
    },
    DATABASE_URL:'//testuser:testpass@localhost/testdb'
  },
});
