import React from "react";

export type NotificationItemType = {
  icon?: React.ReactElement;
  date?: Date;
  label: string;
  status: "info" | "warning" | "error" | "success";
};

export type NotificationType = {
  icon?: React.ReactElement;
  title: string;
  items: NotificationItemType[];
};
