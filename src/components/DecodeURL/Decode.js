import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import instance from '../../config/axios';

function Decode() {
    const { code } = useParams();
    const history = useHistory();
    const [url, setUrl] = useState('');

    useEffect(() => {
        instance.get(`/${code}`)
            .then(res => {
                let finalData = res.data.decodedString;
                setUrl(finalData)
                console.log("final ->", finalData)
                if (finalData)
                    window.location.replace(finalData);
            })
            .catch(error => {
                return history.push("/");
            })

    }, []);

    return <div></div>;
}

export default Decode
