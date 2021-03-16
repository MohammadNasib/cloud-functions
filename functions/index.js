const functions = require("firebase-functions");

var admin = require("firebase-admin");

var serviceAccount = require('./cloudfunctions-fc29b-firebase-adminsdk-be1pz-e46e5f20cd.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.randomNum = functions.https.onRequest((request, response) => {
  const number = Math.round(Math.random() * 100);
  response.send(number.toString());
});
