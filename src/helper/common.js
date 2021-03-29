

export const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

export const fetchOption = () => {
    return [
        { value: "1", text: "Solo yo" },
        { value: "2-10", text: "2-10" },
        { value: "11-25", text: "11-25" },
        { value: "26-50", text: "26-50" },
        { value: "151-100", text: "51-100" },
        { value: "100+", text: "100+" },
    ]
}

export const fetchColor = () => {
    return [
        "#39b0ff",
        "#04b58b",
        "#3e9c4b",
        "#b6bc00",
        "#e59100",
        "#e55c00",
        "#ee1f50",
        "#d6198a",
        "#b321f1",
    ]
}

export const getInitial = (name) => {
    return name && name.length>0?name.charAt(0).toUpperCase():"A";
}