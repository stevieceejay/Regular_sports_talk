from pypdf import PdfReader

pdf_path = r"C:\Users\steph\OneDrive\Documents\nc_projects\Regular_sports_talk\promptlog.pdf"
out_path = r"C:\Users\steph\OneDrive\Documents\nc_projects\Regular_sports_talk\promptlog.txt"

reader = PdfReader(pdf_path)
print(f"pages={len(reader.pages)}")
text = "\n".join((page.extract_text() or "") for page in reader.pages)
with open(out_path, "w", encoding="utf-8") as f:
    f.write(text)
print(f"saved to {out_path}")
print(text[:4000])
