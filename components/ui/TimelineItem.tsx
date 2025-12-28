"use client";

import { motion } from "framer-motion";
import {
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
} from "@mui/lab";
import { Typography, Box, Paper } from "@mui/material";

interface MUITimelineItemProps {
    title: string;
    company?: string;
    institution?: string;
    period: string;
    description?: string;
    items?: string[];
    index: number;
}

export default function MUITimelineItem({
    title,
    company,
    institution,
    period,
    description,
    items,
    index,
}: MUITimelineItemProps) {
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{
                    flex: { xs: 0, sm: 0.2 },
                    py: "12px",
                    px: 2,
                    display: { xs: "none", sm: "block" },
                }}
            >
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                    <Typography variant="caption" color="text.secondary" fontWeight={600}>
                        {period}
                    </Typography>
                </motion.div>
            </TimelineOppositeContent>

            <TimelineSeparator>
                <TimelineDot
                    color="primary"
                    sx={{
                        boxShadow: "0 0 10px rgba(104, 140, 50, 0.5)",
                        border: "2px solid #242621",
                    }}
                />
                <TimelineConnector sx={{ bgcolor: "rgba(104, 140, 50, 0.2)" }} />
            </TimelineSeparator>

            <TimelineContent sx={{ py: "12px", px: 2 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                    <Paper
                        elevation={0}
                        sx={{
                            p: 3,
                            bgcolor: "transparent",
                            border: "1px solid",
                            borderColor: "divider",
                            borderRadius: 2,
                            "&:hover": {
                                borderColor: "primary.main",
                                bgcolor: "rgba(46, 64, 19, 0.3)",
                            },
                        }}
                    >
                        <Typography variant="h3" component="h3" color="white" gutterBottom>
                            {title}
                        </Typography>

                        {(company || institution) && (
                            <Typography
                                variant="subtitle1"
                                color="primary"
                                gutterBottom
                                sx={{ fontWeight: 600, mb: 2 }}
                            >
                                {company || institution}
                            </Typography>
                        )}

                        <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ display: { xs: "block", sm: "none" }, mb: 2 }}
                        >
                            {period}
                        </Typography>

                        {description && (
                            <Typography
                                variant="body1"
                                color="text.primary"
                                paragraph
                                sx={{ mb: 3 }}
                            >
                                {description}
                            </Typography>
                        )}

                        {items && items.length > 0 && (
                            <Box component="ul" sx={{ m: 0, pl: 0 }}>
                                {items.map((item, i) => (
                                    <Box
                                        component="li"
                                        key={i}
                                        sx={{
                                            listStyle: "none",
                                            position: "relative",
                                            pl: 3,
                                            mb: 1.5,
                                            fontSize: "1.05rem",
                                            color: "text.secondary",
                                            lineHeight: 1.6,
                                            "&::before": {
                                                content: '"▹"',
                                                position: "absolute",
                                                left: 0,
                                                color: "primary.main",
                                                fontWeight: "bold",
                                                fontSize: "1.2rem",
                                            },
                                        }}
                                    >
                                        {item}
                                    </Box>
                                ))}
                            </Box>
                        )}
                    </Paper>
                </motion.div>
            </TimelineContent>
        </TimelineItem>
    );
}
