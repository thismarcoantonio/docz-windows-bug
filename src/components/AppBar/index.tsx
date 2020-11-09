import React, { useState } from "react";
import Search from "./Search";
import Notifications from "./Notifications";
import { NotificationType } from "./types";
import { docsEnv } from "../../utils/environment";
import { Close as CloseIcon, Menu as MenuIcon } from "@material-ui/icons";
import {
  AppBar as MaterialAppBar,
  Avatar,
  Toolbar,
  IconButton,
  Theme,
  makeStyles,
  createStyles
} from "@material-ui/core";

type Props = {
  actions?: React.ReactElement;
  logo: string | React.ReactElement;
  notifications?: NotificationType[];
  onSearch?: Function;
  userImage?: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: 1200,
      backgroundColor: theme.palette.common.white
    },
    logoWrapper: {
      marginLeft: 8
    },
    imageWrapper: {
      width: 110,
      backgroundColor: (props: { empty: boolean }) =>
        props.empty ? theme.palette.grey[100] : "transparent",
      borderRadius: (props: { empty: boolean }) => (props.empty ? 2 : 0),
      height: (props: { empty: boolean }) => (props.empty ? 30 : "auto")
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "contain"
    },
    rightColumn: {
      marginLeft: "auto"
    },
    avatarButton: {
      marginLeft: 12
    },
    avatar: {
      width: 32,
      height: 32
    }
  })
);

const AppBar: React.FC<Props> = ({
  logo,
  actions,
  notifications,
  onSearch,
  userImage
}) => {
  const classes = useStyles({ empty: !logo });
  const [open, setOpen] = useState(false);

  const handleMenu = (state: boolean) => () => {
    setOpen(state);
  };

  return (
    <MaterialAppBar
      elevation={1}
      color="transparent"
      className={classes.appBar}
      position={docsEnv() ? "relative" : "fixed"}
    >
      <Toolbar>
        <IconButton color="inherit" onClick={handleMenu(!open)}>
          {open ? <CloseIcon color="primary" /> : <MenuIcon color="primary" />}
        </IconButton>
        <div className={classes.logoWrapper}>
          {!logo || typeof logo === "string" ? (
            <div className={classes.imageWrapper}>
              {logo && <img className={classes.image} src={logo} alt="" />}
            </div>
          ) : (
            logo
          )}
        </div>
        <div className={classes.rightColumn}>
          {actions && actions}
          {!!(notifications || []).length && (
            <Notifications notifications={notifications} />
          )}
          {onSearch && <Search onSearch={onSearch} />}
        </div>
        <IconButton
          edge="end"
          onClick={() => {}}
          className={classes.avatarButton}
        >
          <Avatar src={userImage} className={classes.avatar} />
        </IconButton>
      </Toolbar>
    </MaterialAppBar>
  );
};

export default AppBar;
