// src/Component/Resume/ResumePDF.jsx
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const pdfStyles = StyleSheet.create({
  page: { padding: 30, fontSize: 11, fontFamily: "Helvetica" },
  header: { fontSize: 18, fontWeight: "bold", marginBottom: 6 },
  subHeading: { fontSize: 12, fontWeight: "bold", marginTop: 6, marginBottom: 4, color: "#0ea5e9" },
  small: { fontSize: 10, marginBottom: 2 },
  bullet: { marginLeft: 6, marginBottom: 2 },
  watermark: {
    position: "absolute",
    fontSize: 48,
    color: "grey",
    opacity: 0.12,
    top: "40%",
    left: "10%",
    rotate: -45
  }
});

const ResumePDF = ({ user }) => (
  <Document>
    <Page style={pdfStyles.page}>
      <Text style={pdfStyles.watermark}>{user.name}</Text>

      <Text style={pdfStyles.header}>{user.name}</Text>
      <Text style={pdfStyles.small}>{user.title}</Text>
      <Text style={pdfStyles.small}>{user.contact.email} • {user.contact.phone} • {user.contact.location}</Text>

      <Text style={pdfStyles.subHeading}>CAREER OBJECTIVE</Text>
      <Text style={pdfStyles.small}>{user.careerObjective}</Text>

      <Text style={pdfStyles.subHeading}>WORK EXPERIENCE</Text>
      {user.workExperience.map((w, idx) => (
        <View key={idx}>
          <Text style={{ fontWeight: "bold" }}>{w.role} — {w.company} • {w.duration}</Text>
          {w.details.map((d, i) => <Text key={i} style={pdfStyles.bullet}>• {d}</Text>)}
        </View>
      ))}

      <Text style={pdfStyles.subHeading}>TECHNICAL SKILLS</Text>
      {user.technicalSkills.map((s, i) => <Text key={i} style={pdfStyles.bullet}>• {s}</Text>)}

      <Text style={pdfStyles.subHeading}>EDUCATION</Text>
      {user.education.map((e, i) => <Text key={i} style={pdfStyles.bullet}>• {e}</Text>)}

      <Text style={pdfStyles.subHeading}>INTERNSHIPS</Text>
      {user.internships.map((it, ii) => (
        <View key={ii}>
          <Text style={{ fontWeight: "bold" }}>{it.title} — {it.company} • {it.duration}</Text>
          {it.details.map((d, j) => <Text key={j} style={pdfStyles.bullet}>• {d}</Text>)}
        </View>
      ))}

      <Text style={pdfStyles.subHeading}>PROJECTS</Text>
      {user.projects.map((p, i) => (
        <View key={i}>
          <Text style={{ fontWeight: "bold" }}>{p.title} — {p.tech}</Text>
          {p.link && (
            <Text style={{ fontSize: 9, color: "blue", textDecoration: "underline", marginLeft: 8 }} src={p.link}>
              {p.link}
            </Text>
          )}
          {p.details.map((d, j) => <Text key={j} style={pdfStyles.bullet}>• {d}</Text>)}
        </View>
      ))}
    </Page>
  </Document>
);

export default ResumePDF;
