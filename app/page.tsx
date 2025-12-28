import { Container, Box, Typography } from "@mui/material";
import Hero from "@/features/cv/components/Hero";
import SkillsSection from "@/features/cv/components/SkillsSection";
import ProfileSection from "@/features/cv/components/ProfileSection";
import TimelineSection from "@/features/cv/components/TimelineSection";
import { cvData } from "@/data/cv";

export default function Home() {
  return (
    <main>
      <Hero />

      <Container maxWidth="xl" sx={{ py: 6 }}>
        {/* Perfil */}
        <ProfileSection paragraphs={cvData.profile.paragraphs} />

        {/* Habilidades Técnicas */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h2" color="primary" gutterBottom sx={{ mb: 4 }}>
            Expertise Técnico
          </Typography>
          <SkillsSection categories={cvData.skills} />
        </Box>

        {/* Experiencia Profesional */}
        <TimelineSection title="Experiencia Profesional" items={cvData.experiences} />

        {/* Mentoría y Docencia */}
        <TimelineSection title="Mentoría y Docencia" items={cvData.mentoring} />

        {/* Educación */}
        <TimelineSection title="Formación Académica" items={cvData.education} />

        {/* Footer */}
        <Box
          sx={{
            mt: 10,
            pt: 6,
            borderTop: 1,
            borderColor: "divider",
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Desarrollado con Next.js, Material-UI y Framer Motion
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
            © 2025 Martín Correa. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </main>
  );
}
