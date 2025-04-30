export const msalConfig = {
    auth: {
        clientId: "c75f9388-4a96-4f8b-9232-4b031bf5db0c",
        authority: "https://login.microsoftonline.com/common",
        redirectUri: "http://localhost:3000/login",
        postLogoutRedirectUri: "http://localhost:3000/login",
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
    }
};

export const loginRequest = {
    scopes: ["User.Read", "openid", "profile", "email"]
};

export const protectedResources = {
    apiEndpoint: "http://localhost:5000/api",
    scopes: {
        read: ["api://c75f9388-4a96-4f8b-9232-4b031bf5db0c/read"],
        write: ["api://c75f9388-4a96-4f8b-9232-4b031bf5db0c/write"]
    }
}; 