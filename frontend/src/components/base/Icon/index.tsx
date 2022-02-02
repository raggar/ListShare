import React from "react";
import { Icon } from "react-feather";

export const FeatherIcon = (Icon: Icon, size = 22, className = "") => (
    <Icon size={size} className={className} />
  );