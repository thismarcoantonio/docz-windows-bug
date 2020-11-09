import React, { useState } from "react";
import { NotificationType } from "./types";
import { Notifications as NotificationIcon } from "@material-ui/icons";
import {
  Badge,
  IconButton,
  Popover,
  Tabs,
  Tab,
  Theme,
  makeStyles,
  createStyles
} from "@material-ui/core";
import NotificationsList from "./NotificationsList";

type Props = {
  notifications?: NotificationType[];
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tabs: {
      height: "100%",
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      borderBottomColor: theme.palette.grey[400]
    },
    tab: {
      paddingTop: 0,
      paddingBottom: 0,
      minHeight: "auto",
      color: theme.palette.grey[500]
    },
    tabSelected: {
      color: theme.palette.grey[600]
    },
    tabWrapper: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      "& svg": {
        marginRight: "5px !important",
        marginBottom: "0px !important"
      }
    },
    indicator: {
      display: "none"
    }
  })
);

const Notifications: React.FC<Props> = ({ notifications }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(undefined);
  };

  const handleTabChange = (_event: object, index: number) => {
    setCurrentIndex(index);
  };

  const notificationItem = () => {
    const notification: NotificationType | undefined =
      notifications?.[currentIndex];
    return notification?.items;
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <Badge badgeContent={(notifications || []).length} color="error">
          <NotificationIcon />
        </Badge>
      </IconButton>
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
        <Tabs
          value={currentIndex}
          onChange={handleTabChange}
          classes={{
            flexContainer: classes.tabs,
            indicator: classes.indicator
          }}
        >
          {notifications?.map((notification, index) => (
            <Tab
              key={index}
              icon={notification.icon}
              label={`${notification.title} (${notification.items.length})`}
              classes={{
                root: classes.tab,
                wrapper: classes.tabWrapper,
                selected: classes.tabSelected
              }}
            />
          ))}
        </Tabs>
        <NotificationsList notifications={notificationItem()} />
      </Popover>
    </>
  );
};

export default Notifications;
