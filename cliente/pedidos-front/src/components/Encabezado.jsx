import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
const Encabezado = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          home
        </Button>
        <h1>GESTION DE PEDIDOS</h1>
      </Toolbar>
    </AppBar>
  );
};

export default Encabezado;
