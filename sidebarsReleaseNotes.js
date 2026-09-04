// @ts-check

/**
 * Release notes sidebar. Each entry is a dated file in `release-notes-docs/`.
 * Order newest-first so the navbar item lands on the latest release.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebarsReleaseNotes = {
  releaseNotesSidebar: [
    '2026-09-04',
    '2026-08-17',
    '2026-07-14',
    '2026-06-29',
  ],
};

module.exports = sidebarsReleaseNotes;
