"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionProps {
    id: string;
    title: string;
    children: ReactNode;
    delay?: number;
}

export default function Section({ id, title, children, delay = 0 }: SectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="section" id={id} ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay, ease: "easeOut" }}
                >
                    <h2 className="gradient-text mb-8">{title}</h2>
                    {children}
                </motion.div>
            </div>
        </section>
    );
}
