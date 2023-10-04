import { useState } from "react";

export const Login = () => {
  console.log("Se renderizo");

  const [nombre, setNombre] = useState("Franco");

  const changeName = () => {
    setNombre("Nicolas");
  };

  return (
    <div>
      <h2>{nombre}</h2>
      <button onClick={changeName}>Cambiar nombre</button>
    </div>
  );
};
