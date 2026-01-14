const SEARCH_ENGINES = [
  "google",
  "bing",
  "yahoo",
  "duckduckgo",
  "yandex",
  "baidu",
  "ask",
  "aol",
  "naver",
  "ecosia",
  "search.brave",
];

const SOCIAL_NETWORKS = [
  "facebook",
  "instagram",
  "messenger",
  "linkedin",
  "twitter",
  "t.co",
  "pinterest",
  "reddit",
  "snapchat",
  "whatsapp",
  "youtube",
  "quora",
  "discord",
  "telegram",
];

const PAID_KEYWORDS = ["cpc", "ppc", "paid", "sem", "ads", "adwords", "cpv", "cpa", "cpl"];

function normaliseHost(host) {
  if (!host) return "";
  return host.replace(/^www\./, "").toLowerCase();
}

function matchesDomain(host, patterns) {
  if (!host) return false;
  const normalised = normaliseHost(host);
  return patterns.some((pattern) => normalised.includes(pattern));
}

function isMeaningful(snapshot) {
  if (!snapshot) return false;
  if (!snapshot.source) return false;
  const src = snapshot.source.toLowerCase();
  return src !== "direct" && src !== "";
}

function readStoredSource() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem("orderSource");
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch (err) {
    console.warn("orderSource parse failed", err);
    return null;
  }
}

function buildSnapshot() {
  if (typeof window === "undefined" || typeof document === "undefined") return null;

  const params = new URLSearchParams(window.location.search || "");
  const utmSource = (params.get("utm_source") || "").trim();
  const utmMedium = (params.get("utm_medium") || "").trim();
  const utmCampaign = (params.get("utm_campaign") || "").trim();
  const utmTerm = (params.get("utm_term") || "").trim();
  const utmContent = (params.get("utm_content") || "").trim();
  const utmId = (params.get("utm_id") || "").trim();
  const gclid = (params.get("gclid") || "").trim();
  const fbclid = (params.get("fbclid") || "").trim();
  const msclkid = (params.get("msclkid") || "").trim();

  const currentHost = normaliseHost(window.location.hostname || "");

  const referrer = document.referrer || "";
  let referrerHost = "";
  let referrerType = "";

  if (referrer) {
    try {
      const refUrl = new URL(referrer);
      const host = normaliseHost(refUrl.hostname);
      if (host && host !== currentHost) {
        referrerHost = host;
        if (matchesDomain(host, SEARCH_ENGINES)) {
          referrerType = "search";
        } else if (matchesDomain(host, SOCIAL_NETWORKS)) {
          referrerType = "social";
        } else {
          referrerType = "referral";
        }
      }
    } catch (err) {
      // ignore bad referrers
    }
  }

  let source = utmSource;
  let medium = utmMedium;

  if (!source) {
    source = referrerHost || "direct";
  }

  if (!medium) {
    if (gclid || msclkid || matchesDomain(source, SEARCH_ENGINES)) {
      medium = "cpc";
    } else if (fbclid) {
      medium = "paid-social";
    } else if (referrerType === "search") {
      medium = "organic";
    } else if (referrerType === "social") {
      medium = "social";
    } else if (referrerType === "referral") {
      medium = "referral";
    } else {
      medium = "direct";
    }
  }

  const channel = classifyChannel({
    source,
    medium,
    referrerType,
    gclid,
    fbclid,
    msclkid,
  });

  return {
    source: normaliseHost(source) || "direct",
    medium: medium.toLowerCase(),
    channel,
    campaign: utmCampaign,
    term: utmTerm,
    content: utmContent,
    utmId,
    gclid,
    fbclid,
    msclkid,
    referrer,
    referrerHost,
    landingPage: `${window.location.pathname || "/"}${window.location.search || ""}`,
    landingUrl: window.location.href,
    timestamp: new Date().toISOString(),
  };
}

function classifyChannel({ source, medium, referrerType, gclid, fbclid, msclkid }) {
  const mediumLower = (medium || "").toLowerCase();
  const sourceLower = normaliseHost(source);

  const hasPaidKeyword = PAID_KEYWORDS.some((keyword) => mediumLower.includes(keyword));

  if (gclid || msclkid || hasPaidKeyword) {
    if (matchesDomain(sourceLower, SOCIAL_NETWORKS) || mediumLower.includes("social")) {
      return "Paid Social";
    }
    return "Paid Search";
  }

  if (fbclid || mediumLower.includes("paid-social")) {
    return "Paid Social";
  }

  if (mediumLower.includes("display")) {
    return "Display";
  }

  if (mediumLower.includes("affiliate")) {
    return "Affiliate";
  }

  if (mediumLower.includes("email") || mediumLower.includes("newsletter")) {
    return "Email";
  }

  if (mediumLower.includes("sms")) {
    return "SMS";
  }

  if (mediumLower.includes("organic") && (referrerType === "search" || matchesDomain(sourceLower, SEARCH_ENGINES))) {
    return "Organic Search";
  }

  if (referrerType === "search") {
    return "Organic Search";
  }

  if (referrerType === "social") {
    return "Organic Social";
  }

  if (mediumLower === "referral" || referrerType === "referral") {
    return "Referral";
  }

  if (mediumLower === "direct") {
    return "Direct";
  }

  return referrerType ? referrerType.charAt(0).toUpperCase() + referrerType.slice(1) : "Direct";
}

export function captureSource() {
  if (typeof window === "undefined") return;

  try {
    const snapshot = buildSnapshot();
    if (!snapshot) return;

    const stored = readStoredSource();

    const firstTouch = stored?.firstTouch
      ? isMeaningful(stored.firstTouch)
        ? stored.firstTouch
        : isMeaningful(snapshot)
        ? snapshot
        : stored.firstTouch
      : snapshot;

    const lastTouch = isMeaningful(snapshot)
      ? snapshot
      : stored?.lastTouch && isMeaningful(stored.lastTouch)
      ? stored.lastTouch
      : snapshot;

    const history = Array.isArray(stored?.history)
      ? [...stored.history, snapshot].slice(-10)
      : [snapshot];

    const result = {
      source: lastTouch.source,
      medium: lastTouch.medium,
      channel: lastTouch.channel,
      campaign: lastTouch.campaign,
      term: lastTouch.term,
      content: lastTouch.content,
      utmId: lastTouch.utmId,
      gclid: lastTouch.gclid,
      fbclid: lastTouch.fbclid,
      msclkid: lastTouch.msclkid,
      referrer: lastTouch.referrer,
      referrerHost: lastTouch.referrerHost,
      landingPage: lastTouch.landingPage,
      landingUrl: lastTouch.landingUrl,
      timestamp: snapshot.timestamp,
      firstTouch,
      lastTouch,
      history,
      totalVisits: (stored?.totalVisits || 0) + 1,
      firstVisit: stored?.firstVisit || firstTouch?.timestamp || snapshot.timestamp,
      lastUpdated: snapshot.timestamp,
    };

    window.localStorage.setItem("orderSource", JSON.stringify(result));
  } catch (error) {
    console.error("orderSource capture failed", error);
  }
}

export function getOrderSource() {
  const stored = readStoredSource();
  return stored || {};
}
