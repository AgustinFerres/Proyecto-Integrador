
export const normalizeDescription = (description, limit) => {
    if (description.length > limit) {
        return description.substring(0, limit) + "...";
    } else {
        return description
    }
}