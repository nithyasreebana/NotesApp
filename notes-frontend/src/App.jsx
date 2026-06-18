import { useEffect, useContext }
from "react";

import api from "./services/api";

import { AuthContext }
from "./context/AuthContext";

import AppRoutes
from "./routes/AppRoutes";

function App() {

     const { setUser } =
     useContext(AuthContext);

     useEffect(() => {

          const fetchUser =
          async () => {

               try {

                    const res =
                    await api.get(
                         "/user/me"
                    );

                    setUser(
                         res.data.user
                    );

               } catch(err) {

                    setUser(null);

               }
          };

          fetchUser();

     }, []);

     return <AppRoutes />;
}

export default App;