"use client";

import { Box, Typography, Drawer } from "@mui/material";
import type React from "react";
import { useState } from "react";
import JobDrawerContent from "../../shared/jobDrawer";
import styles from "./workAtHaptic.module.css";

const WorkAtHaptic = ({
  toggleDrawer,
}: {
  toggleDrawer: (open: boolean) => (event: any) => void;
}) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleToggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.topLabel}>
        <ul>
          <li>
            <Typography variant="h6" className={styles.smallText}>
              Work At Haptic
            </Typography>
          </li>
        </ul>
      </Box>

      <Box className={styles.titleBox}>
        <Typography variant="h2" className={styles.title}>
          Great work starts with great people ——— join us.
        </Typography>
      </Box>

      <Box className={styles.bottomLabel}>
        <ul>
          <li>
            <Typography variant="h6" className={styles.smallText}>
              Open Roles
            </Typography>
          </li>
        </ul>
      </Box>

      <Box className={styles.rolesContainer}>
        <Box className={styles.roleBox} onClick={handleToggleDrawer(true)}>
          <Typography variant="h2" className={styles.roleText}>
            Senior Designer
          </Typography>
        </Box>

        <Box className={styles.roleTypeWrapper}>
          {["Remote/Hybrid", "Full-Time"].map((label) => (
            <Box key={label} className={styles.roleTypeBox} onClick={handleToggleDrawer(true)}>
              <Typography variant="h2" className={styles.roleTypeText}>
                {label}
              </Typography>
            </Box>
          ))}
        </Box>

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleCloseDrawer}
          PaperProps={{ sx: { width: "100%", maxWidth: "600px", backgroundColor: "#fff" } }}
        >
          <JobDrawerContent onClose={handleCloseDrawer} />
        </Drawer>
      </Box>
    </Box>
  );
};

export default WorkAtHaptic;
