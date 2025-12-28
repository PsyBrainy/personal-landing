"use client";

import { motion } from "framer-motion";
import { Box, Typography, Avatar, Container } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        bgcolor: "rgba(104, 140, 50, 0.1)",
        pt: 6,
        pb: 6,
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            sx={{ flex: 1 }}
          >
            <Typography variant="h1" color="white" gutterBottom>
              Martín Correa
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 400,
                color: "text.primary",
                mb: 2,
              }}
            >
              Desarrollador de Software | Especialista en Arquitectura y
              Liderazgo Técnico
            </Typography>
            <Typography variant="body2" color="text.secondary">
              📧 martuto93@gmail.com | 📍 La Plata, Argentina
            </Typography>
          </Box>
          <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Avatar
              src="/profile.jpg"
              alt="Martín Correa"
              sx={{
                width: { xs: 140, sm: 160 },
                height: { xs: 140, sm: 160 },
                border: "3px solid",
                borderColor: "primary.main",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
