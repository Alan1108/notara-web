# Plan: an account deletion page on Notara's website

A hand-off for a Claude session working in the **website repository**: the site that already hosts `TERMS_URL` and `PRIVACY_URL`. Copy everything under "Task" into that session.

Why: Google Play requires a public web page where people can ask to delete their account and data, even if the app is no longer installed. Its URL goes into Play Console → Data safety → "Delete account URL". Apple accepts the in-app deletion, but the same page is linked from the privacy policy.

---

## Task

Add an **account deletion page** to this site in **English and Spanish**, following the site's existing structure, styling, layout and language switch. Then link it from the privacy policy. Don't change anything else.

### Where

- Use a stable path that matches the site's conventions, for example `/delete-account` (English) and `/es/eliminar-cuenta` (Spanish), or whatever pattern the privacy policy already uses.
- Report the final public URL. It goes into the Play Console.

### What the page must say

Google requires the page to name the app or developer, give the steps to request deletion, and say what's deleted, what's kept, and for how long. Use plain words and short sentences.

**Title:** "Delete your Notara account" / "Elimina tu cuenta de Notara"

1. **In the app (fastest).** Open Notara → Account (top right) → Delete account → Delete. It takes effect at once.
2. **Without the app.** Email **[ACCOUNT_EMAIL — ask Alan]** from the address you sign in with, with the subject "Delete my account". The account is deleted within **30 days**, and you get a confirmation by email.

**What's deleted:**
- the account: email, name and user id
- the "About you" answers and app preferences copied to the account
- notes, transcripts, summaries, questions and flashcards, and study progress synced to the cloud (Pro)
- recordings backed up to the cloud (Pro)
- the free-plan usage counters
- the purchase history kept by our subscription provider (RevenueCat)

**What's not deleted, or is kept:**
- **Notes on your phone.** Notara keeps them on the device. They go away when you delete the notes or uninstall the app.
- **Subscriptions.** Deleting the account doesn't cancel a subscription. Cancel it in the App Store or Google Play first.
- **Store records.** Apple and Google keep their own purchase records under their own policies.
- **Server security logs.** Our backend provider's logs, which may include IP addresses, are removed on that provider's schedule, within **[RETENTION — ask Alan, e.g. 90 days]**.

**Developer:** Notara, by **[DEVELOPER NAME — as shown in the stores; ask Alan]**.

### Privacy policy

Add a link to the new page in the privacy policy's section on deleting data or your rights, in both languages. Check that the privacy policy also says the following. Report anything missing instead of rewriting it without asking:
- Cloud AI (summaries, questions, chat) sends note text to Google's Gemini API, paid tier. Google processes it for Notara and doesn't use it for training. Private mode keeps everything on the phone.
- RevenueCat handles subscriptions. Supabase hosts accounts and sync.
- The app checks Shorebird for app updates at launch, with a random per-install id and no personal data.
- AI models download from Hugging Face. No personal data is sent.
- There's no advertising, tracking or analytics.

### Done when

- Both language versions of the page are built and reachable at their public URLs.
- The privacy policy links to the page.
- You report the URLs and any gaps found in the privacy policy.
- The placeholders in brackets are filled in with Alan's answers, never guessed.
