export const uploadFile = async (file) => {
    if (!file) throw new Error('No file provided');
    const url = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_ENVIROMENT}/upload`
    const formData = new FormData();
    formData.append('upload_preset', 'mrharry');
    formData.append('file', file);

    try {
        const resp = await fetch(url, {
            method: 'POST',
            body: formData
        })
        if (!resp.ok) throw new Error('Error uploading file');
        const cloudResp = await resp.json();
        return cloudResp.secure_url;

    } catch (error) {
        console.log(error)
        throw new Error(error.message);
    }
}