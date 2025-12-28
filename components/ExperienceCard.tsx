"use client";

import { motion } from "framer-motion";

interface ExperienceCardProps {
    title: string;
    company?: string;
    period: string;
    description: string;
    achievements: string[];
    index: number;
}

export default function ExperienceCard({
    title,
    company,
    period,
    description,
    achievements,
    index,
}: ExperienceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card mb-6 relative border-l-4 border-l-cyan-500"
        >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                    <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
                    {company && <p className="text-cyan-400 font-medium">{company}</p>}
                </div>
                <span className="text-sm text-gray-400 mt-2 md:mt-0">{period}</span>
            </div>

            <p className="mb-4 text-gray-300">{description}</p>

            {achievements.length > 0 && (
                <ul className="space-y-2">
                    {achievements.map((achievement, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                            className="flex items-start text-gray-400"
                        >
                            <span className="text-cyan-500 mr-2 mt-1">▸</span>
                            <span>{achievement}</span>
                        </motion.li>
                    ))}
                </ul>
            )}
        </motion.div>
    );
}
