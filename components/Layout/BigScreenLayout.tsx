"use client";

import { WithChildren } from "@/types/props";
import { AppShell } from "@mantine/core";
import Categories from "../Categories/Categories";

type Props = WithChildren;

const BigScreenLayout = ({ children }: Props) => {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
      }}
      padding="md"
    >
      <AppShell.Header></AppShell.Header>
      <AppShell.Navbar p="md">
        <Categories />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default BigScreenLayout;
