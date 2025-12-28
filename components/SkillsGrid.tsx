"use client";

import { motion } from "framer-motion";

interface SkillCategory {
    category: string;
    skills: string[];
}

interface SkillsGridProps {
    categories: SkillCategory[];
}

export default function SkillsGrid({ categories }: SkillsGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, catIndex) => (
                <motion.div
                    key={catIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                    className="card"
                >
                    <h3 className="text-lg font-bold text-cyan-400 mb-4">{cat.category}</h3>
                    <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill, skillIndex) => (
                            <motion.span
                                key={skillIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.3,
                                    delay: catIndex * 0.1 + skillIndex * 0.05,
                                }}
                                className="pill"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
