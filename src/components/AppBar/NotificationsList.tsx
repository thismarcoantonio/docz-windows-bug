import React from "react";
import moment from "moment";
import { NotificationItemType } from "./types";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Theme,
  makeStyles,
  createStyles
} from "@material-ui/core";
import { blue, orange, green, red } from "@material-ui/core/colors";

type Props = {
  notifications?: NotificationItemType[];
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      marginBottom: 8,
      padding: "0px 16px"
    },
    itemTitle: {
      color: theme.palette.grey[900],
      fontWeight: theme.typography.fontWeightMedium
    },
    avatarInfo: {
      color: theme.palette.getContrastText(blue[500]),
      backgroundColor: blue[500]
    },
    avatarWarning: {
      color: theme.palette.getContrastText(orange[500]),
      backgroundColor: orange[500]
    },
    avatarError: {
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: red[500]
    },
    avatarSuccess: {
      color: theme.palette.getContrastText(green[500]),
      backgroundColor: green[500]
    }
  })
);

const NotificationsList: React.FC<Props> = ({ notifications }) => {
  const classes = useStyles();

  const getTimeDifference = (date: Date | undefined) => {
    return moment(date).fromNow();
  };

  const getAvatarClassName = (type: string) => {
    const types = {
      info: classes.avatarInfo,
      warning: classes.avatarWarning,
      error: classes.avatarError,
      success: classes.avatarSuccess
    };
    return types[type];
  };

  return (
    <List>
      {notifications?.map(({ icon: Icon, ...notification }, index) => (
        <ListItem className={classes.listItem} key={index}>
          <ListItemAvatar>
            <Avatar className={getAvatarClassName(notification.status)}>
              {Icon || <div />}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={notification.label}
            classes={{ primary: classes.itemTitle }}
            secondary={getTimeDifference(notification.date)}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default NotificationsList;
