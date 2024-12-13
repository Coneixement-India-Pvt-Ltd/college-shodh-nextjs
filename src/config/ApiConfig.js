
// Getting the base URL from environment variables, defaulting to localhost if not available
const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

// API Config class containing all endpoint URLs
export class ApiConfig {
    static colleges = `${baseUrl}/api/colleges`;
}
