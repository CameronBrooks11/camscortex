#!/usr/bin/env bash
# rename-title-to-kebab.sh
#
# Convert filenames from Title Case to kebab-case (lowercase, hyphens)
# Example: Doc About Words.md --> doc-about-words.md
#
# Usage:
#   ./scripts/rename-title-to-kebab.sh <target-dir> [--dry]


set -euo pipefail # exit on error, unset var, or failed pipe

# --- args ---
if [[ $# -lt 1 || $# -gt 2 ]]; then
  echo "Usage: $0 <target-dir> [--dry]"
  exit 1
fi

TARGET_DIR="$1"
DRY_RUN=false

if [[ "${2:-}" == "--dry" ]]; then
  DRY_RUN=true
fi

# --- resolve paths ---
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
ABS_TARGET="$PROJECT_ROOT/$TARGET_DIR"

# --- validate ---
if [[ ! -d "$ABS_TARGET" ]]; then
  echo "Error: target directory does not exist: $TARGET_DIR"
  exit 1
fi

shopt -s nullglob

# --- rename loop ---
for f in "$ABS_TARGET"/*.md; do
  base="$(basename "$f")"

  new="$(echo "$base" | sed -E 's/[[:space:]]+/-/g; s/.*/\L&/')"

  # skip if unchanged
  if [[ "$base" == "$new" ]]; then
    continue
  fi

  if $DRY_RUN; then
    echo "mv \"$TARGET_DIR/$base\" \"$TARGET_DIR/$new\""
  else
    mv -n "$f" "$ABS_TARGET/$new"
  fi
done

if $DRY_RUN; then
  echo "Dry run complete."
else
  echo "Rename complete."
fi
