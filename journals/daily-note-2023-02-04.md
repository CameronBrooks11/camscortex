# Logseq Journal - 2023-02-04

- [[python]] [[python-tutorial]] Extract PDF Text While Preserving Whitespaces Using Python and Pytesseract by Aaron Zhu
- First session of building [[pdf-scribe]]

  - [[open-cv]] detect paragraphs to remove unwanted
  - [[pytesseract]]

    - Functions

      - **get_languages** Returns all currently supported languages by Tesseract OCR.
      - **get_tesseract_version** Returns the Tesseract version installed in the system.
      - **image_to_string** Returns unmodified output as string from Tesseract OCR processing
      - **image_to_boxes** Returns result containing recognized characters and their box boundaries
      - **image_to_data** Returns result containing box
        boundaries, confidences, and other information. Requires Tesseract
        3.05+. For more information, please check the [Tesseract TSV documentation](https://tesseract-ocr.github.io/tessdoc/Command-Line-Usage.html)
      - **image_to_osd** Returns result containing information about orientation and script detection.
      - **image_to_alto_xml** Returns result in the form of Tesseract's ALTO XML format.
      - **run_and_get_output** Returns the raw output from Tesseract OCR. Gives a bit more control over the parameters that are sent to tesseract.

    - Extracting Text From Images Using #PyTesseract - section.io
      - os.listdir
        - method in python is used to get the list of all files and directories in
          the specified directory. If we don’t specify any directory, then list
          of files and directories in the current working directory will be
          returned.
