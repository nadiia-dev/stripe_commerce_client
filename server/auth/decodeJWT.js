import { auth } from "../firebase.js";

async function decodeJWT(req, res, next) {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    const idToken = req.headers.authorization.split("Bearer ")[1];

    try {
      const decodedToken = await auth.verifyIdToken(idToken);
      req["currentUser"] = decodedToken;
    } catch (error) {
      console.log(error);
    }
  }

  next();
}

export default decodeJWT;
