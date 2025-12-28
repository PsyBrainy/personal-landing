export interface TimelineEntry {
    title: string;
    company?: string;
    institution?: string;
    period: string;
    description?: string;
    items?: string[];
}

export interface SkillCategory {
    category: string;
    skills: string[];
}

export interface CVData {
    profile: {
        paragraphs: string[];
    };
    skills: SkillCategory[];
    experiences: TimelineEntry[];
    mentoring: TimelineEntry[];
    education: TimelineEntry[];
}
