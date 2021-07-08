import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import instance from '../../config/axios';

function Decode() {
    const { code } = useParams();
    const history = useHistory();

    useEffect(() => {
        instance.get(`/${code}`)
            .then(res => {
                let finalData = res.data.decodedString;
                console.log("final ->", finalData)
                if (finalData)
                    window.location.replace(finalData);
            })
            .catch(error => {
                return history.push("/");
            })
        // eslint-disable-next-line
    }, []);

    return <div></div>;
}

export default Decode
