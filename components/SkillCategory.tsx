"use client";

import { motion } from "framer-motion";

interface SkillCategoryProps {
    category: string;
    skills: string[];
    index: number;
    fromRight?: boolean;
}

export default function SkillCategory({
    category,
    skills,
    index,
    fromRight = false,
}: SkillCategoryProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: fromRight ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: fromRight ? 50 : -50 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="skill-category"
        >
            <h4>{category}</h4>
            <div className="skill-list">
                {skills.map((skill, i) => (
                    <span key={i} className="skill-item">
                        {skill}
                        {i < skills.length - 1 && " •"}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
