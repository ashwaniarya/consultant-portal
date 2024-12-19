// Type for API response data
type ApiResponse<T> = {
  data: T;
  error: string | null;
  loading: boolean;
};

// Mock API configuration
const MOCK_DELAY = 1000;
const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
  Authorization: "Bearer mock-token",
};

// Generic mock API call function
export async function doMockApi<T>(
  mockData: T,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET", 
  headers: Record<string, string> = DEFAULT_HEADERS
): Promise<ApiResponse<T>> {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY));

    // Simulate request details
    console.log(`Mock ${method} request made with headers:`, headers);

    return {
      data: mockData,
      error: null,
      loading: false
    };

  } catch (err) {
    return {
      data: {} as T,
      error: err instanceof Error ? err.message : "An error occurred",
      loading: false
    };
  }
}

// Mock API error simulation
export async function mockApiWithError<T>(
  mockData: T,
  shouldError: boolean = false,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  headers: Record<string, string> = DEFAULT_HEADERS
): Promise<ApiResponse<T>> {
  try {
    await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY));

    // Simulate request details
    console.log(`Mock ${method} request made with headers:`, headers);

    if (shouldError) {
      throw new Error("Mock API Error");
    }

    return {
      data: mockData,
      error: null,
      loading: false
    };

  } catch (err) {
    return {
      data: {} as T,
      error: err instanceof Error ? err.message : "An error occurred",
      loading: false
    };
  }
}
