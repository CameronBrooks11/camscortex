async function createNote({ resolver }) {
  const title = await resolver.resolveFromName("FOAM_TITLE");
  const slug = await resolver.resolveFromName("FOAM_SLUG");

  return {
    content: `# ${title}

`,
    filepath: `notes/${slug}.md`,
  };
}

createNote;
