import { firebaseAuth } from "./firebase";

export const isInCart = (id, cartItems) => {
  return cartItems.find((item) => Number(item.id) === Number(id));
};

const API = "http://localhost:8080";

export async function fetchFromAPI(endpoint, opts) {
  const { method, body } = { method: "POST", body: null, ...opts };
  const user = firebaseAuth.currentUser;
  const token = user && (await user.getIdToken());
  console.log(token);
  const res = await fetch(`${API}/${endpoint}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(res);

  if (res.status === 200) {
    return res.json();
  } else {
    throw new Error(res.statusText);
  }
}
