"use client";

import React from "react";
import { AppBar, Toolbar, Box, Container } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                bgcolor: "rgba(36, 38, 33, 0.8)",
                backdropFilter: "blur(10px)",
                borderBottom: "1px solid",
                borderColor: "divider",
                top: 0,
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ minHeight: { xs: 64, sm: 70 } }}>
                    <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                height: "50px", // fixed height for better vertical centering
                            }}
                        >
                            <Image
                                src="/logo.svg"
                                alt="Logo"
                                width={50} // Use same width/height for square SVG
                                height={50}
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </motion.div>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
