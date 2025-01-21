export const getAuthToken = () => {
    const token = localStorage.getItem("auth-token");
    return token;
};
export const setAuthToken = (token: string) => {
    localStorage.setItem("auth-token", token);
};
export const removeAuthToken = () => {
    localStorage.removeItem("auth-token");
};
