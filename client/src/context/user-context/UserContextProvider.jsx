import { useEffect, useState } from "react";
import { firebaseAuth, createUserProfileDocument } from "../../firebase";
import { UserContext } from "./UserContext";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";

const UserContextsProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChanged(
      firebaseAuth,
      async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          onSnapshot(userRef, (snapShot) => {
            setUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
            setLoading(false);
          });
        } else {
          setUser(userAuth);
          setLoading(false);
        }
      }
    );

    return () => unsubscribeFromAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <UserContext value={{ user, loading }}>{children}</UserContext>;
};

export default UserContextsProvider;
