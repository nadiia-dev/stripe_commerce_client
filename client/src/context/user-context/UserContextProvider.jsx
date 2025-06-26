import { useEffect, useState } from "react";
import { auth, createUserProfileDocument } from "../../firebase";

const UserContextsProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
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
    });

    return () => unsubscribeFromAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <UserContext value={{ user, loading }}>{children}</UserContext>;
};

export default UserContextsProvider;
