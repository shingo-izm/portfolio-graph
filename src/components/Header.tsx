import { AppBar, Toolbar, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Typography flex="1">ヘッダー</Typography>
        <AccountCircleIcon />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
