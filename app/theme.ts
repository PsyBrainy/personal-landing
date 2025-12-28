"use client";

import React from 'react';
import { createTheme } from "@mui/material/styles";

// Augment MUI theme to include @mui/lab components
declare module "@mui/material/styles" {
    interface ComponentNameToClassKey {
        MuiTimeline: React.ElementType;
        MuiTimelineItem: React.ElementType;
        MuiTimelineDot: React.ElementType;
        MuiTimelineOppositeContent: React.ElementType;
        MuiTimelineContent: React.ElementType;
    }
}

export const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#688C32",
            light: "#8db055",
            dark: "#506d26",
        },
        secondary: {
            main: "#734022",
            light: "#9d5c31",
            dark: "#5a321a",
        },
        background: {
            default: "#242621",
            paper: "#2E4013",
        },
        text: {
            primary: "#e5e5e5",
            secondary: "#7B838C",
        },
    },
    typography: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        fontSize: 18,
        h1: {
            fontSize: "3.5rem",
            fontWeight: 700,
        },
        h2: {
            fontSize: "2.5rem",
            fontWeight: 700,
        },
        h3: {
            fontSize: "1.75rem",
            fontWeight: 600,
        },
        h6: {
            fontSize: "1.25rem",
            fontWeight: 500,
        },
        body1: {
            fontSize: "1.125rem",
            lineHeight: 1.7,
        },
        body2: {
            fontSize: "1rem",
            lineHeight: 1.6,
        },
        caption: {
            fontSize: "0.95rem",
        },
        subtitle2: {
            fontSize: "1.1rem",
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollBehavior: "smooth",
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontSize: "0.9rem",
                },
            },
        },
    },
});
