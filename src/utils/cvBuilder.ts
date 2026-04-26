import avatar from "../assets/images/avatar.jpg";
import {
  achievements,
  careerObjective,
  developmentStrengths,
  education,
  featuredProjects,
  internship,
  personal,
  skills,
  softSkills,
  supportingProjects,
} from "../data/portfolio";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function topSkills() {
  return skills.flatMap((group) => group.items).slice(0, 12);
}

function compactProjectLines() {
  const featured = featuredProjects.map(
    (project) =>
      `<li><strong>${escapeHtml(project.title)}:</strong> ${escapeHtml(
        project.summary
      )}</li>`
  );

  const supporting = supportingProjects.map(
    (project) =>
      `<li><strong>${escapeHtml(project.title)}:</strong> ${escapeHtml(
        project.focus
      )}</li>`
  );

  return [...featured, ...supporting].join("");
}

async function imageUrlToDataUrl(url: string) {
  const response = await fetch(url);
  const blob = await response.blob();

  return await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Failed to encode image."));
    reader.readAsDataURL(blob);
  });
}

function buildCvHtml(avatarDataUrl: string) {
  const skillItems = topSkills()
    .map((item) => `<span class="skill-chip">${escapeHtml(item)}</span>`)
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(personal.name)} - CV</title>
    <style>
      @page { size: A4; margin: 0; }
      * { box-sizing: border-box; }
      html, body {
        margin: 0;
        padding: 0;
        background: #eef2f7;
        font-family: Arial, sans-serif;
        color: #1f2937;
      }
      body {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .sheet {
        width: 210mm;
        min-height: 297mm;
        max-height: 297mm;
        margin: 0 auto;
        background: #ffffff;
        overflow: hidden;
      }
      .cv {
        height: 297mm;
        display: grid;
        grid-template-columns: 68mm 1fr;
      }
      .sidebar {
        background: linear-gradient(180deg, #8f4327 0%, #693322 100%);
        color: #fff7f2;
        padding: 14mm 9mm 12mm;
      }
      .main {
        padding: 12mm 12mm 10mm;
        background:
          radial-gradient(circle at top right, rgba(15, 118, 110, 0.08), transparent 20%),
          #fff;
      }
      .photo {
        width: 38mm;
        height: 46mm;
        object-fit: cover;
        border-radius: 10mm;
        display: block;
        margin: 0 auto 7mm;
        border: 1.5mm solid rgba(255,255,255,0.25);
      }
      .name {
        font-size: 8.2mm;
        line-height: 1.02;
        margin: 0 0 2.2mm;
        color: #1f2937;
      }
      .role {
        margin: 0 0 3mm;
        font-size: 3.8mm;
        color: #a44d2c;
        font-weight: 700;
      }
      .sidebar h2,
      .main h2 {
        margin: 0 0 3mm;
        font-size: 3.6mm;
        text-transform: uppercase;
        letter-spacing: 0.08em;
      }
      .main h2 { color: #0f766e; }
      .section { margin-bottom: 4.4mm; }
      .section.tight { margin-bottom: 3.4mm; }
      .contact-item,
      .small,
      li {
        font-size: 3.05mm;
        line-height: 1.42;
      }
      .contact-item {
        margin-bottom: 1.6mm;
        word-break: break-word;
      }
      .pill-wrap {
        display: flex;
        flex-wrap: wrap;
        gap: 1.6mm;
      }
      .skill-chip {
        display: inline-flex;
        align-items: center;
        padding: 1.2mm 2.1mm;
        border-radius: 999px;
        background: rgba(255,255,255,0.15);
        border: 0.25mm solid rgba(255,255,255,0.18);
        font-size: 2.8mm;
      }
      .main .skill-chip {
        background: #f4ebe7;
        border-color: #edd8ce;
        color: #7b3c24;
      }
      ul { margin: 0; padding-left: 4.5mm; }
      li + li { margin-top: 1mm; }
      .summary {
        font-size: 3.15mm;
        line-height: 1.48;
        margin: 0;
      }
      .two-col {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4mm;
      }
      .project-box,
      .education-box {
        border: 0.3mm solid #ece4dc;
        border-radius: 4mm;
        padding: 3mm 3.4mm;
        background: #fffaf7;
      }
      .project-box h3,
      .education-box h3 {
        margin: 0 0 1.4mm;
        font-size: 3.2mm;
        color: #1f2937;
      }
      .muted { color: #6b7280; }
      .accent-line {
        width: 100%;
        height: 0.9mm;
        border-radius: 999px;
        background: linear-gradient(90deg, #b6542e, #0f766e);
        margin: 0 0 4mm;
      }
      .footer-note {
        margin-top: 2mm;
        font-size: 2.7mm;
        color: #6b7280;
      }
    </style>
  </head>
  <body>
    <div class="sheet">
      <div class="cv">
        <aside class="sidebar">
          <img class="photo" src="${avatarDataUrl}" alt="${escapeHtml(
            personal.name
          )}" />

          <section class="section">
            <h2>Contact</h2>
            <div class="contact-item">${escapeHtml(personal.location)}</div>
            <div class="contact-item">${escapeHtml(personal.email)}</div>
            <div class="contact-item">${escapeHtml(personal.phone)}</div>
            <div class="contact-item">${escapeHtml(personal.github)}</div>
            <div class="contact-item">${escapeHtml(personal.linkedin)}</div>
          </section>

          <section class="section">
            <h2>Top Skills</h2>
            <div class="pill-wrap">${skillItems}</div>
          </section>

          <section class="section tight">
            <h2>Strengths</h2>
            <ul>${developmentStrengths
              .slice(0, 5)
              .map((item) => `<li>${escapeHtml(item)}</li>`)
              .join("")}</ul>
          </section>

          <section class="section tight">
            <h2>Soft Skills</h2>
            <ul>${softSkills
              .slice(0, 5)
              .map((item) => `<li>${escapeHtml(item)}</li>`)
              .join("")}</ul>
          </section>

          <section class="section tight">
            <h2>Achievements</h2>
            <ul>${achievements
              .slice(0, 3)
              .map((item) => `<li>${escapeHtml(item)}</li>`)
              .join("")}</ul>
          </section>
        </aside>

        <main class="main">
          <h1 class="name">${escapeHtml(personal.name)}</h1>
          <p class="role">${escapeHtml(personal.role)}</p>
          <div class="accent-line"></div>

          <section class="section">
            <h2>Profile</h2>
            <p class="summary">${escapeHtml(personal.intro)}</p>
          </section>

          <section class="section">
            <h2>Career Objective</h2>
            <p class="summary">${escapeHtml(
              careerObjective.headline
            )} ${escapeHtml(careerObjective.closing)}</p>
          </section>

          <section class="section">
            <h2>Featured Projects</h2>
            <div class="project-box">
              <ul>${compactProjectLines()}</ul>
            </div>
          </section>

          <section class="section">
            <h2>Education & Experience</h2>
            <div class="two-col">
              <div class="education-box">
                <h3>${escapeHtml(education.school)}</h3>
                <p class="small"><strong>${escapeHtml(education.program)}</strong></p>
                <p class="small muted">${escapeHtml(education.summary)}</p>
                <ul>${education.studies
                  .slice(0, 4)
                  .map((item) => `<li>${escapeHtml(item)}</li>`)
                  .join("")}</ul>
              </div>
              <div class="education-box">
                <h3>${escapeHtml(internship.title)}</h3>
                <p class="small"><strong>${escapeHtml(
                  `${internship.company} | ${internship.period}`
                )}</strong></p>
                <p class="small muted">${escapeHtml(internship.summary)}</p>
                <ul>${internship.responsibilities
                  .slice(0, 5)
                  .map((item) => `<li>${escapeHtml(item)}</li>`)
                  .join("")}</ul>
              </div>
            </div>
          </section>

          <section class="section">
            <h2>Core Technologies</h2>
            <div class="pill-wrap">${skillItems}</div>
          </section>

          <p class="footer-note">
            CV generated from portfolio data. Open the downloaded file and use Print to save as PDF on one A4 page.
          </p>
        </main>
      </div>
    </div>
  </body>
</html>`;
}

export async function downloadCv() {
  const avatarDataUrl = await imageUrlToDataUrl(avatar);
  const html = buildCvHtml(avatarDataUrl);
  const file = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(file);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "huynh-huu-hau-cv-a4.html";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}
