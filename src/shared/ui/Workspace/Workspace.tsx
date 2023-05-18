import { FC } from "react";
import style from "./Workspace.module.css";

interface WorkspaceProps {
  children: React.ReactNode;
}

export const Workspace: FC<WorkspaceProps> = ({ children }) => {
  return <div className={style.workspace}>{children}</div>;
};
