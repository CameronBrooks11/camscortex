# Logseq Journal - 2023-02-25

- Getting started with [[hugging-face]]

  - Tried to `pip3 install torch torchvision torchaudio `
    - But got `ERROR: Could not find a version that satisfies the requirement torch (from versions: none) ERROR: No matching distribution found for torch`
  - Turns out I had to use Python 3.8.6
  - Then just set those PATH variables above and restart terminal then retry and it works
  - https://huggingface.co/docs/transformers/quicktour
  - https://huggingface.co/course/chapter1/1
  - I scratched all the above and followed [HuggingFace Installation](https://huggingface.co/docs/transformers/installation) with good results

    - It used a virtual environment instead by calling `python -m venv .env` then `.env/Scripts/activate`

      - `.env\Scripts\activate.bat` in cmd or `.env\Scripts\Activate.ps1` in PowerShell

    - Then proceeded with installation as it said

  - You may have to do `Set-ExecutionPolicy RemoteSigned` as administrator if you get:

    ```ps
    .env\Scripts\Activate.ps1 : File C:\Users\cambr\.env\Scripts\Activate.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
    At line:1 char:1
    + .env\Scripts\Activate.ps1
    + ~~~~~~~~~~~~~~~~~~~~~~~~~
        + CategoryInfo          : SecurityError: (:) [], PSSecurityException
        + FullyQualifiedErrorId : UnauthorizedAccess
    ```

  - Started the tutorial: [Pipelines for Inference](https://huggingface.co/docs/transformers/pipeline_tutorial)

    - Message:

      ```ps
      C:\Users\cambr\.env\lib\site-packages\transformers\generation\utils.py:1273: UserWarning: Neither `max_length` nor `max_new_tokens` has been set, `max_length` will default to 448 (`generation_config.max_length`). Controlling `max_length` via the config is deprecated and `max_length` will be removed from the config in v5 of Transformers -- we recommend using `max_new_tokens` to control the maximum length of the generation.
        warnings.warn(
      ```

- [[things-to-learn]]

  - How to use 3D scanning and CV to recreate and 3D print real world object
