import { Box, Typography, Paper } from "@mui/material";

interface ProfileSectionProps {
    paragraphs: string[];
}

export default function ProfileSection({ paragraphs }: ProfileSectionProps) {
    return (
        <Box sx={{ mb: 10 }}>
            <Typography variant="h2" color="primary" gutterBottom sx={{ mb: 4 }}>
                Perfil Profesional
            </Typography>
            <Paper
                elevation={0}
                sx={{
                    p: 4,
                    bgcolor: "rgba(46, 64, 19, 0.2)",
                    borderRadius: 3,
                    border: "1px solid",
                    borderColor: "divider",
                }}
            >
                {paragraphs.map((para, idx) => (
                    <Typography
                        key={idx}
                        variant="body1"
                        color="text.primary"
                        sx={{ mb: idx === paragraphs.length - 1 ? 0 : 3 }}
                    >
                        {para}
                    </Typography>
                ))}
            </Paper>
        </Box>
    );
}
