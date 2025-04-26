import { ReactNode } from "react";

export type Tab = {
  lable: string;
  value: string;
};

export type TabBarProps = {
  title: string;
  tabs: Tab[];
  content: Record<string, ReactNode>;
};
