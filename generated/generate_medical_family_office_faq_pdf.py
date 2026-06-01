from __future__ import annotations

import math
import re
import textwrap
from pathlib import Path


OUTPUT = Path(__file__).with_name("medical-family-office-faq.pdf")
PAGE_W = 612
PAGE_H = 792
LEFT = 60
RIGHT = 60
TOP = 108
BOTTOM = 78
LINE = 14
BODY_SIZE = 10.2
H1_SIZE = 22
SECTION_SIZE = 14
QUESTION_SIZE = 11.4
SMALL_SIZE = 8.4


FAQ = [
    ("About Medical Family Office", [
        ("What is Medical Family Office?", [
            "Medical Family Office is a long-term health management and medical advisory platform dedicated to helping individuals and families navigate complex healthcare decisions.",
            "We are not a hospital.",
            "We do not provide medical treatment.",
            "Our role is to connect clients with trusted medical resources, coordinate care, and help build a long-term health strategy.",
        ]),
        ("What does a Medical Family Office do?", [
            "A Medical Family Office acts as a personal health advisory office for individuals and families.",
            {"Services may include:": [
                "Health risk assessment",
                "Executive health management",
                "Medical second opinions",
                "Global medical access",
                "Preventive health planning",
                "Longevity strategy",
                "Care coordination",
                "Family health governance",
            ]},
        ]),
        ("How is a Medical Family Office different from a hospital?", [
            "Hospitals focus on diagnosis and treatment.",
            {"A Medical Family Office focuses on:": [
                "Health planning",
                "Risk management",
                "Medical decision support",
                "Resource coordination",
                "Long-term health outcomes",
            ]},
            "A hospital treats illness.",
            "A Medical Family Office helps protect health before illness occurs.",
        ]),
        ("How is a Medical Family Office different from a medical tourism agency?", [
            "Most medical tourism agencies arrange appointments or overseas treatments.",
            "A Medical Family Office provides ongoing guidance before, during, and after medical care.",
            "The objective is not a single procedure.",
            "The objective is lifelong health management.",
        ]),
        ("Why is healthcare becoming a Family Office issue?", [
            {"Many families already have:": [
                "Wealth advisors",
                "Tax advisors",
                "Legal advisors",
            ]},
            "Yet their most valuable asset-health-often lacks professional management.",
            "A Medical Family Office fills this gap.",
        ]),
    ]),
    ("Health Management", [
        ("What is Health Management?", [
            "Health management is a continuous process of monitoring, assessing, and improving health over time.",
            "The goal is not simply to treat disease.",
            "The goal is to reduce future health risks and improve quality of life.",
        ]),
        ("What is the difference between a health check-up and health management?", [
            "A health check-up provides information at a single point in time.",
            "Health management is an ongoing process.",
            "A check-up asks: \"How healthy am I today?\"",
            "Health management asks: \"How healthy will I be in ten years?\"",
        ]),
        ("Why do business leaders need health management?", [
            {"Executives often face:": [
                "High stress",
                "Frequent travel",
                "Sleep disruption",
                "Poor recovery",
                "Irregular schedules",
            ]},
            "These factors can accelerate biological aging and increase long-term health risks.",
        ]),
        ("What is Healthspan?", [
            "Healthspan refers to the number of years a person remains healthy, active, and independent.",
            "Living longer is not enough.",
            "The goal is to live healthier for longer.",
        ]),
        ("What is Biological Age?", [
            "Biological age measures how well the body is functioning compared to chronological age.",
            "For example: A 55-year-old person may have a biological age of 45. Or a biological age of 65.",
        ]),
        ("Can biological age be improved?", [
            {"Research suggests that improvements in:": [
                "Sleep",
                "Exercise",
                "Nutrition",
                "Metabolic health",
            ]},
            "may positively influence biological aging markers.",
        ]),
    ]),
    ("Executive Health", [
        ("What is Executive Health?", [
            "Executive Health is a proactive healthcare model designed for entrepreneurs, executives, investors, and high-performing professionals.",
            {"The focus is on:": [
                "Prevention",
                "Early detection",
                "Performance optimization",
                "Longevity",
            ]},
        ]),
        ("Why do successful people often neglect health?", [
            "Many high achievers spend decades building wealth while postponing health priorities.",
            "Unfortunately, health risks accumulate quietly over time.",
            "The most expensive health problem is often the one that was never detected.",
        ]),
    ]),
    ("Second Medical Opinion", [
        ("What is a Second Medical Opinion?", [
            "A second medical opinion is an independent review of an existing diagnosis or treatment recommendation by another qualified physician.",
        ]),
        ("Why should I seek a second opinion?", [
            "Major medical decisions often have multiple possible approaches.",
            {"A second opinion may help:": [
                "Confirm a diagnosis",
                "Explore alternative treatments",
                "Reduce uncertainty",
                "Improve confidence in decision-making",
            ]},
        ]),
        ("Does obtaining a second opinion offend my doctor?", [
            "No.",
            "Second opinions are widely accepted and encouraged in many leading healthcare systems worldwide.",
        ]),
    ]),
    ("Global Medical Access", [
        ("What is Global Medical Access?", [
            "Global Medical Access refers to connecting patients with leading specialists, hospitals, and medical institutions around the world.",
        ]),
        ("Why do some patients seek medical care abroad?", [
            {"Common reasons include:": [
                "Access to specialized expertise",
                "Advanced diagnostics",
                "Innovative therapies",
                "Faster appointments",
                "Additional treatment options",
            ]},
        ]),
        ("Which countries are commonly considered?", [
            {"Depending on medical needs, patients may explore care options in:": [
                "Japan",
                "Singapore",
                "Switzerland",
                "United States",
            ]},
        ]),
    ]),
    ("Longevity Medicine", [
        ("What is Longevity Medicine?", [
            "Longevity Medicine is an emerging field focused on extending healthy years of life through evidence-based prevention and health optimization.",
            {"Areas of interest include:": [
                "Metabolic health",
                "Preventive medicine",
                "Healthy aging",
                "Lifestyle intervention",
                "Aging biology research",
            ]},
        ]),
        ("Is longevity medicine the same as anti-aging?", [
            "No.",
            {"Anti-aging often focuses on appearance. Longevity medicine focuses on:": [
                "Physical function",
                "Cognitive function",
                "Disease prevention",
                "Quality of life",
                "Healthy aging",
            ]},
        ]),
        ("Can longevity medicine stop aging?", [
            "No.",
            "Aging remains a natural biological process.",
            "Current scientific approaches focus on slowing functional decline and improving healthspan.",
        ]),
    ]),
    ("Regenerative Medicine", [
        ("What is Regenerative Medicine?", [
            "Regenerative medicine aims to repair, replace, or regenerate damaged tissues and biological functions.",
            "It is one of the fastest-growing areas in modern medicine.",
        ]),
        ("Is regenerative medicine regulated?", [
            "Regulatory requirements vary by country.",
            "Patients should always seek care through properly licensed institutions and qualified physicians.",
        ]),
        ("Is regenerative medicine appropriate for everyone?", [
            "No.",
            {"Suitability depends on:": [
                "Medical history",
                "Health status",
                "Treatment goals",
                "Physician evaluation",
            ]},
        ]),
    ]),
    ("Stem Cells", [
        ("What are Stem Cells?", [
            "Stem cells are unique cells capable of self-renewal and differentiation into other cell types.",
            "They are an important area of medical research.",
        ]),
        ("Can stem cells make people younger?", [
            "There is currently no scientific evidence that stem cell therapies can permanently reverse aging.",
            "Patients should be cautious of exaggerated claims.",
        ]),
        ("Are stem cell therapies safe?", [
            {"Safety depends on:": [
                "Clinical protocols",
                "Cell source",
                "Medical supervision",
                "Regulatory compliance",
            ]},
            "All medical interventions involve potential risks.",
        ]),
    ]),
    ("Exosomes", [
        ("What are Exosomes?", [
            "Exosomes are microscopic vesicles released by cells that carry biological signals.",
            "They have become an important area of research in regenerative medicine.",
        ]),
        ("What is the difference between exosomes and stem cells?", [
            "Stem cells are living cells.",
            "Exosomes are biological messengers released by cells.",
            "They are fundamentally different.",
        ]),
    ]),
    ("Membership", [
        ("Why does Medical Family Office use a membership model?", [
            "Health outcomes are rarely improved by a single appointment.",
            {"The greatest value comes from:": [
                "Long-term monitoring",
                "Continuous guidance",
                "Risk management",
                "Ongoing support",
            ]},
        ]),
        ("What may be included in membership services?", [
            {"Depending on the membership level:": [
                "Annual health assessments",
                "Health strategy reviews",
                "Medical resource coordination",
                "Specialist referrals",
                "Second medical opinions",
                "Family health planning",
                "Longitudinal health records",
            ]},
        ]),
        ("I feel healthy. Why would I need a Medical Family Office?", [
            "The best time to manage health risks is before symptoms appear.",
            "Many serious conditions develop silently over many years.",
        ]),
    ]),
    ("The Most Important Question", [
        ("What does a Medical Family Office actually provide?", [
            "Not treatments.",
            "Not procedures.",
            "Not miracle cures.",
            "A Medical Family Office provides:",
            "Clarity. Confidence. Coordination. Continuity.",
            "In a world filled with medical information, conflicting opinions, and complex healthcare choices, the most valuable service is often helping people make the right health decisions at the right time.",
            "Sometimes the most valuable treatment is not a procedure. It is certainty.",
        ]),
    ]),
]


def esc_text(value: str) -> str:
    value = value.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")
    return value


def normalize(value: str) -> str:
    value = value.replace("\u2014", "-").replace("\u2013", "-")
    value = value.replace("\u201c", '"').replace("\u201d", '"')
    value = value.replace("\u2018", "'").replace("\u2019", "'")
    value = value.replace("\u00a0", " ")
    return re.sub(r"\s+", " ", value).strip()


class Pdf:
    def __init__(self) -> None:
        self.pages: list[str] = []
        self.ops: list[str] = []
        self.y = PAGE_H - TOP

    def add_page(self) -> None:
        if self.ops:
            self.finish_page()
        self.ops = []
        self.y = PAGE_H - TOP
        self.draw_header_footer()

    def finish_page(self) -> None:
        self.pages.append("\n".join(self.ops))
        self.ops = []

    def color(self, r: float, g: float, b: float) -> None:
        self.ops.append(f"{r:.3f} {g:.3f} {b:.3f} rg")

    def stroke_color(self, r: float, g: float, b: float) -> None:
        self.ops.append(f"{r:.3f} {g:.3f} {b:.3f} RG")

    def rect(self, x: float, y: float, w: float, h: float, fill: bool = True) -> None:
        self.ops.append(f"{x:.1f} {y:.1f} {w:.1f} {h:.1f} re {'f' if fill else 'S'}")

    def line(self, x1: float, y1: float, x2: float, y2: float, width: float = 0.5) -> None:
        self.ops.append(f"{width:.2f} w {x1:.1f} {y1:.1f} m {x2:.1f} {y2:.1f} l S")

    def text(self, x: float, y: float, value: str, size: float = BODY_SIZE, font: str = "F1", color=(0.13, 0.15, 0.16)) -> None:
        self.color(*color)
        self.ops.append(f"BT /{font} {size:.1f} Tf {x:.1f} {y:.1f} Td ({esc_text(normalize(value))}) Tj ET")

    def ensure(self, needed: float) -> None:
        if self.y - needed < BOTTOM:
            self.add_page()

    def draw_header_footer(self) -> None:
        self.color(0.97, 0.965, 0.94)
        self.rect(0, PAGE_H - 72, PAGE_W, 72)
        self.color(0.48, 0.39, 0.24)
        self.rect(0, PAGE_H - 74, PAGE_W, 2)
        self.text(LEFT, PAGE_H - 38, "MEDICAL FAMILY OFFICE", 13.5, "F2", (0.14, 0.17, 0.18))
        self.text(LEFT, PAGE_H - 55, "Private Health Advisory | Long-Term Health Management | Global Medical Access", 8.7, "F1", (0.42, 0.39, 0.34))
        self.text(PAGE_W - RIGHT - 108, PAGE_H - 38, "aeteralife.com", 9.2, "F2", (0.14, 0.17, 0.18))
        self.text(PAGE_W - RIGHT - 108, PAGE_H - 55, "contact@aeteralife.com", 8.7, "F1", (0.42, 0.39, 0.34))
        self.stroke_color(0.78, 0.70, 0.56)
        self.line(LEFT, 54, PAGE_W - RIGHT, 54, 0.45)
        self.text(LEFT, 36, "aeteralife.com | contact@aeteralife.com", SMALL_SIZE, "F1", (0.42, 0.39, 0.34))
        self.text(PAGE_W - RIGHT - 136, 36, "Medical Family Office FAQ", SMALL_SIZE, "F1", (0.42, 0.39, 0.34))

    def paragraph(self, text: str, indent: int = 0, size: float = BODY_SIZE, font: str = "F1", color=(0.13, 0.15, 0.16), leading: float = LINE) -> None:
        width_chars = max(44, int((PAGE_W - LEFT - RIGHT - indent) / (size * 0.49)))
        lines = textwrap.wrap(normalize(text), width=width_chars, break_long_words=False)
        self.ensure(max(leading, len(lines) * leading))
        for line in lines:
            self.text(LEFT + indent, self.y, line, size, font, color)
            self.y -= leading
        self.y -= 3

    def bullet(self, text: str) -> None:
        width_chars = 78
        lines = textwrap.wrap(normalize(text), width=width_chars, break_long_words=False)
        self.ensure(len(lines) * LINE + 2)
        self.text(LEFT + 14, self.y, "-", BODY_SIZE, "F1", (0.48, 0.39, 0.24))
        self.text(LEFT + 28, self.y, lines[0], BODY_SIZE, "F1")
        self.y -= LINE
        for line in lines[1:]:
            self.text(LEFT + 28, self.y, line, BODY_SIZE, "F1")
            self.y -= LINE
        self.y -= 1

    def section(self, title: str) -> None:
        self.ensure(44)
        self.y -= 10
        self.text(LEFT, self.y, title.upper(), SECTION_SIZE, "F2", (0.36, 0.28, 0.15))
        self.y -= 9
        self.stroke_color(0.78, 0.70, 0.56)
        self.line(LEFT, self.y, PAGE_W - RIGHT, self.y, 0.45)
        self.y -= 18

    def question(self, title: str) -> None:
        self.ensure(32)
        self.text(LEFT, self.y, title, QUESTION_SIZE, "F2", (0.11, 0.14, 0.15))
        self.y -= 18

    def cover(self) -> None:
        self.add_page()
        self.y = PAGE_H - 164
        self.color(0.97, 0.965, 0.94)
        self.rect(LEFT - 18, self.y - 102, PAGE_W - LEFT - RIGHT + 36, 128)
        self.color(0.48, 0.39, 0.24)
        self.rect(LEFT - 18, self.y + 24, PAGE_W - LEFT - RIGHT + 36, 3)
        self.text(LEFT, self.y, "Frequently Asked Questions", H1_SIZE, "F2", (0.10, 0.12, 0.13))
        self.y -= 30
        self.text(LEFT, self.y, "About Medical Family Office", 15, "F1", (0.36, 0.28, 0.15))
        self.y -= 34
        self.paragraph("A long-term health management and medical advisory reference for individuals, families, executives, and family offices.", size=11.2, leading=15)
        self.y -= 16
        self.paragraph("Medical Family Office is not a hospital and does not provide medical treatment. Its role is to support clarity, coordination, and long-term medical decision-making.", size=10.6, leading=15)
        self.y -= 8
        self.text(LEFT, self.y, "aeteralife.com", 11, "F2", (0.10, 0.12, 0.13))
        self.text(LEFT + 130, self.y, "contact@aeteralife.com", 11, "F2", (0.10, 0.12, 0.13))
        self.y -= 50


def build() -> None:
    pdf = Pdf()
    pdf.cover()
    for section, questions in FAQ:
        pdf.section(section)
        for question, items in questions:
            pdf.question(question)
            for item in items:
                if isinstance(item, dict):
                    for intro, bullets in item.items():
                        pdf.paragraph(intro)
                        for bullet in bullets:
                            pdf.bullet(bullet)
                        pdf.y -= 4
                else:
                    pdf.paragraph(item)
            pdf.y -= 7
    pdf.finish_page()
    write_pdf(pdf.pages)


def write_pdf(pages: list[str]) -> None:
    objects: list[bytes] = []

    def obj(data: str | bytes) -> int:
        objects.append(data.encode("latin-1") if isinstance(data, str) else data)
        return len(objects)

    font_regular = obj("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
    font_bold = obj("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")
    page_ids: list[int] = []
    content_ids: list[int] = []
    for content in pages:
        stream = content.encode("latin-1")
        content_ids.append(obj(b"<< /Length " + str(len(stream)).encode("ascii") + b" >>\nstream\n" + stream + b"\nendstream"))
        page_ids.append(0)
    pages_id = len(objects) + len(pages) + 1
    for index, content_id in enumerate(content_ids):
        page_ids[index] = obj(
            f"<< /Type /Page /Parent {pages_id} 0 R /MediaBox [0 0 {PAGE_W} {PAGE_H}] "
            f"/Resources << /Font << /F1 {font_regular} 0 R /F2 {font_bold} 0 R >> >> "
            f"/Contents {content_id} 0 R >>"
        )
    kids = " ".join(f"{page_id} 0 R" for page_id in page_ids)
    pages_obj = obj(f"<< /Type /Pages /Kids [{kids}] /Count {len(page_ids)} >>")
    catalog = obj(f"<< /Type /Catalog /Pages {pages_obj} 0 R >>")

    out = bytearray(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
    xref = [0]
    for number, data in enumerate(objects, 1):
        xref.append(len(out))
        out.extend(f"{number} 0 obj\n".encode("ascii"))
        out.extend(data)
        out.extend(b"\nendobj\n")
    startxref = len(out)
    out.extend(f"xref\n0 {len(objects) + 1}\n".encode("ascii"))
    out.extend(b"0000000000 65535 f \n")
    for offset in xref[1:]:
        out.extend(f"{offset:010d} 00000 n \n".encode("ascii"))
    out.extend(
        f"trailer\n<< /Size {len(objects) + 1} /Root {catalog} 0 R >>\nstartxref\n{startxref}\n%%EOF\n".encode("ascii")
    )
    OUTPUT.write_bytes(out)


if __name__ == "__main__":
    build()
    print(OUTPUT)
