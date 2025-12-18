#!/usr/bin/env python3
import json
from pypdf import PdfReader

# Extract text from PDF
pdf_path = r"c:\Users\arunr\Downloads\arun-latest-2025.pdf"

try:
    reader = PdfReader(pdf_path)
    text = ""
    
    # Extract text from all pages
    for page in reader.pages:
        text += page.extract_text() + "\n"
    
    # Print the extracted text
    print(text)
    
except Exception as e:
    print(f"Error: {e}")
    print("Make sure the PDF file exists at:", pdf_path)
