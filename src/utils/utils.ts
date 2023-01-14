export const getTypeName = (type: string) => {
    switch (type) {
        case "Allround": return "Adventure";
        default: return type;
    }
}