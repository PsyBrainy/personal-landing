"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
    title: string;
    company?: string;
    institution?: string;
    period: string;
    description?: string;
    items?: string[];
    index: number;
    position: "left" | "right";
}

export default function TimelineItem({
    title,
    company,
    institution,
    period,
    description,
    items,
    index,
    position,
}: TimelineItemProps) {
    const contentClass = position === "left" ? "timeline-content-left" : "timeline-content-right";
    const fromX = position === "left" ? -100 : 100;

    return (
        <div className="timeline-item-wrapper">
            <div className="timeline-item-left">
                {position === "left" && (
                    <motion.div
                        initial={{ opacity: 0, x: fromX }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: fromX }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: index * 0.05 }}
                        className={contentClass}
                    >
                        <div className="job-header">
                            <h3 className="job-title">{title}</h3>
                            <span className="job-period">{period}</span>
                        </div>
                        {(company || institution) && (
                            <p className="job-company">{company || institution}</p>
                        )}
                        {description && <p className="text-xs mb-2">{description}</p>}
                        {items && items.length > 0 && (
                            <ul>
                                {items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </motion.div>
                )}

                <div className="timeline-dot" />

                {position === "right" && (
                    <motion.div
                        initial={{ opacity: 0, x: fromX }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: fromX }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: index * 0.05 }}
                        className={contentClass}
                    >
                        <div className="job-header">
                            <h3 className="job-title">{title}</h3>
                            <span className="job-period">{period}</span>
                        </div>
                        {(company || institution) && (
                            <p className="job-company">{company || institution}</p>
                        )}
                        {description && <p className="text-xs mb-2">{description}</p>}
                        {items && items.length > 0 && (
                            <ul>
                                {items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </motion.div>
                )}
            </div>
        </div>
    );
}
