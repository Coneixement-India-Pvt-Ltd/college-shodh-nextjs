# EmailJS Setup Guide

Follow these steps to set up project using environment variables from the `.env.example` file.

## Step 1: Copy from `.env.example`

1. In the root directory of your project, locate the `.env.example` file.
2. Copy this file and rename the copy to `.env` using the following command:

```bash
cp .env.example .env
```
## Step 2: Update .env File
1. Open the newly created .env file and update the following fields with your EmailJS credentials:

``` bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID =  "your_service_id"
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = "your_template_id"
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = "your_public_key"

NEXT_PUBLIC_MONGO_ALTAS_URL = "your_mongo_atlas_url"
```

2. Replace the placeholder values (your_service_id, your_template_id, your_public_key) with the actual values from your EmailJS account.


SSR and SEO Implementation Guide

---

## 1. Implement Server-Side Rendering (SSR)
- Ensure that pages dynamically fetching content (like search, filter, and sort results) render on the server before sending HTML to the browser.
- Use Next.js's built-in SSR functionality to fetch data at request time, enabling search engines to crawl fully rendered pages.

---

## 2. Optimize for SEO

### a. Metadata
- Add unique and descriptive metadata for every page, such as titles, descriptions, and keywords.
- Tailor the metadata dynamically based on the content (e.g., for a college's details page, include the college name, courses, and location in the title and description).

### b. Sitemap
- Generate and submit a sitemap to help search engines index all the pages of your platform effectively.
- Include all the dynamic routes like college categories, individual college pages, and search result pages.

### c. Robots.txt
- Configure a `robots.txt` file to guide search engines on which parts of the site to crawl and index.

### d. Structured Data
- Use JSON-LD schema markup to provide search engines with structured information about your site (e.g., EducationalOrganization, Course, Review).

### e. Optimize URLs
- Use clean, descriptive URLs for all routes, avoiding query parameters wherever possible. For instance, `/colleges/engineering` is more SEO-friendly than `/colleges?category=engineering`.

---

## 3. Performance Enhancements
- Optimize images and use lazy loading to improve page speed.
- Preload fonts and critical resources for faster initial load times.
- Implement caching strategies for API responses and frequently accessed data.

---

## 4. Content Strategy
- Create high-quality, engaging content related to college search tips, admission processes, and career guidance to attract organic traffic.
- Use keywords strategically in your content but avoid keyword stuffing.

---

## 5. Monitoring and Analysis
- Use tools like Google Search Console to track your SEO performance.
- Regularly analyze site performance with Lighthouse or PageSpeed Insights to identify bottlenecks and improve load times.

---

