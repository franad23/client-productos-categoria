import { useState } from "react";
import { axiosClient } from "../helpers/axiosClient";
import { toast } from "sonner";

function UploadImagesPage() {
    const [file, setFile ] = useState(null);
    async function uploadImage(e) {
        try {
            e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        const response =  await axiosClient.post('/images/upload', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        toast.success(response.data.message);
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    return <form onSubmit={(e) => uploadImage(e)}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
        <button>Guardar</button>
    </form>
}

export default UploadImagesPage;