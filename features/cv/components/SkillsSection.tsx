"use client";

import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import { Paper, Typography, Chip, Box } from "@mui/material";

interface SkillCategory {
    category: string;
    skills: string[];
}

interface SkillsSectionProps {
    categories: SkillCategory[];
}

export default function SkillsSection({ categories }: SkillsSectionProps) {
    return (
        <Grid container spacing={3}>
            {categories.map((cat, catIndex) => (
                <Grid key={catIndex} size={{ xs: 12, md: 6, lg: 4 }}>
                    <Paper
                        component={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: catIndex * 0.05 }}
                        sx={{
                            p: 3,
                            height: "100%",
                            bgcolor: "background.paper",
                            borderRadius: 2,
                            border: "1px solid",
                            borderColor: "divider",
                            transition: "transform 0.2s ease-in-out",
                            "&:hover": {
                                transform: "translateY(-4px)",
                                borderColor: "primary.main",
                            },
                        }}
                    >
                        <Typography
                            variant="h6"
                            color="primary"
                            fontWeight={700}
                            gutterBottom
                            sx={{ mb: 2 }}
                        >
                            {cat.category}
                        </Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                            {cat.skills.map((skill, skillIndex) => (
                                <Chip
                                    key={skillIndex}
                                    label={skill}
                                    size="medium"
                                    variant="outlined"
                                    sx={{
                                        borderColor: "rgba(104, 140, 50, 0.3)",
                                        color: "text.primary",
                                        fontWeight: 500,
                                        "&:hover": {
                                            bgcolor: "primary.main",
                                            color: "white",
                                            borderColor: "primary.main",
                                        },
                                    }}
                                    component={motion.div}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false }}
                                    transition={{
                                        duration: 0.3,
                                        delay: catIndex * 0.05 + skillIndex * 0.02,
                                    }}
                                />
                            ))}
                        </Box>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
}
