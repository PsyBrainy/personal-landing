import { Box, Typography } from "@mui/material";
import { Timeline } from "@mui/lab";
import TimelineItem from "@/components/ui/TimelineItem";
import { TimelineEntry } from "@/types/cv";

interface TimelineSectionProps {
    title: string;
    items: TimelineEntry[];
}

export default function TimelineSection({ title, items }: TimelineSectionProps) {
    return (
        <Box sx={{ mb: 10 }}>
            <Typography variant="h2" color="primary" gutterBottom sx={{ mb: 4 }}>
                {title}
            </Typography>
            <Timeline position="alternate">
                {items.map((item, idx) => (
                    <TimelineItem key={idx} {...item} index={idx} />
                ))}
            </Timeline>
        </Box>
    );
}
