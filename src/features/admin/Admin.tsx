import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import useLoadDataFromApi from "../../hooks/useLoadDataFromApi";

export const Admin = () => {
  const [loadData] = useLoadDataFromApi();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (
      username === "findyourmotorcycle" &&
      password === "findyourmotorcycle123!"
    ) {
      setIsAuthenticated(true);
    }
  };

  return (
    <div className="admin">
      <div className="admin-form">
        {!isAuthenticated && (
          <>
            <Input
              value={username}
              handleChange={(val: string) => setUsername(val)}
              placeholder="Username"
            />
            <Input
              value={password}
              handleChange={(val: string) => setPassword(val)}
              placeholder="Password"
              type="password"
            />
            <Button text="Login" handleClick={() => login()} />
          </>
        )}
        {isAuthenticated && (
          <Button
            handleClick={() => loadData()}
            text="Download data from Ninja API"
          />
        )}
      </div>
    </div>
  );
};

export default Admin;
