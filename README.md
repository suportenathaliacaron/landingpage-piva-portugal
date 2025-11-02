<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1h2WBnEBeWvY_SNriN_s_uqPZF1fpij1S

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Set the `VITE_MAPS_API_KEY` in [.env.local](.env.local) to your Google Maps API key
4. Run the app:
   `npm run dev`

## Google Maps Integration

This project uses the Google Maps Static API to display location information. To enable this feature:

1. Obtain a Google Maps API key from the [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the Maps Static API in your Google Cloud project
3. Add the API key to your [.env.local](.env.local) file as `VITE_MAPS_API_KEY=your_api_key_here`

The map component will automatically fall back to a static image if the API key is not provided or if there are any issues with the API.