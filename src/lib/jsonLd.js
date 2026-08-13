export const buildFaqJsonLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.title,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.trim(),
    },
  })),
});

export const buildArticleJsonLd = (post) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.excerpt,
  image: `https://argo.tech${post.cover || "/hero-bg.jpg"}`,
  datePublished: post.date,
  author: {
    "@type": "Organization",
    name: "ARGO.TECH",
    url: "https://argo.tech",
  },
  publisher: {
    "@type": "Organization",
    name: "ARGO.TECH",
    url: "https://argo.tech",
    logo: {
      "@type": "ImageObject",
      url: "https://argo.tech/logo.svg",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://argo.tech/blog/${post.slug}/`,
  },
});

const BASE_URL = "https://argo.tech";

export const buildBreadcrumbJsonLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: `${BASE_URL}${item.href}${item.href.endsWith("/") ? "" : "/"}`,
  })),
});