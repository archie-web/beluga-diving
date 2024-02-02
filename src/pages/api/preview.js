/* eslint-disable consistent-return */
/* eslint-disable require-await */
export default async function preview(req, res) {
    // Only continue if Craft has passed it's token
    if (req.query.crafttoken === null) {
        return res.status(401).json({ message: "No preview token" });
    }

    // Only continue if a URI is passed
    if (req.query.uri === null) {
        return res.status(401).json({ message: "No URI provided" });
    }

    // Set the preview cookies with a max age of 2 minutes
    res.setPreviewData(
        {
            status: req.query.status ?? null,
            draftId: req.query.draftId || null,
            provisionalDraft: Boolean(req.query.provisionalDraft) ?? false,
        },
        {
            maxAge: 120,
        }
    );

    // Redirect to the requested page with preview cookies set (possibly)
    res.redirect(`/${req.query.uri}`);
}
