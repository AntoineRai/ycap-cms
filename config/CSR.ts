const API_URLS = {
    local: "http://localhost:3000",
    dev : "https://chasseauxportails-ws-dev.bcd.tech",
    prod : "https://chasseauxportails-ws-prod.bcd.tech",
}

const URL: { [key: string]: string } = { 
    local: "http://localhost:3001",
    dev: "https://chasseauxportails-cms-dev.bcd.tech",
    prod: "https://chasseauxportails-cms-prod.bcd.tech",
};

let CSR: string;

if (typeof window === "undefined") {
    CSR = API_URLS[process.env.NEXT_PUBLIC_ENV as keyof typeof API_URLS] || "DEFAULT_VALUE";
} else {
    for (const e in URL) {
        if (URL[e] === window.location.origin) {
            CSR = API_URLS[e as keyof typeof API_URLS];
            break;
        }
    }
}

export { CSR };