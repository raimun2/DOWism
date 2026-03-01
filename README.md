# Fridayism 📅

The standard calendar interface enforces a Monday or Sunday start. This is a systemic bias—a leftover of industrial-era productivity metrics designed to standardise human output. It ignores a fundamental, albeit entirely arbitrary, reality: your week actually begins on the day (of the week) you were born.

As a Fridayst, I built Fridayism as a lightweight Chrome Extension that corrects this oversight for the Friday-born (Viernistas) by re-indexing Google Calendar to align with your personal temporal baseline. The underlying personality profiling system predicts human behaviour with the exact same precision as horoscopes, astrological charts, or the Myers-Briggs Type Indicator: **0%**. 

We embrace this.

## Prerequisite: The 7-Day Hack
To bypass Google’s hardcoded DOM architecture without breaking the UI, you must force the system into a custom view:
1. Open Google Calendar > **Settings** (gear icon).
2. Scroll to **View options**.
3. Under **Set custom view**, select **7 days**.

## Installation (Developer Mode)
1. Download this repository as a `.zip` file and extract it.
2. Navigate to `chrome://extensions/` in your browser.
3. Toggle **Developer mode** on (top right corner).
4. Click **Load unpacked** and select the extracted folder.
5. Open Google Calendar. Your week now begins on Friday.

## Contributing: The Path to Day-of-week-ism (DOWism)
Currently, this repository only supports Fridayists—originating from a July 1985 realisation. 

The architecture needs to scale to support a broader "DOWism" framework encompassing Tuesdayism, Wednesdayism, Thursdayism, and Saturdayism (Sunday and Monday already have native privileges and require no intervention). 

Pull Requests to add a UI popup and dynamic day-of-week selection are highly encouraged. Fork it, build the UI, and submit a PR.

## License
MIT. Reclaim your time.