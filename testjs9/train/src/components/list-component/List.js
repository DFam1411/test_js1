import {useEffect, useState} from "react";
import './List.css';

function List() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [entriesToShow, setEntriesToShow] = useState(50);


    useEffect(() => {
        fetch('https://api.publicapis.org/entries')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then(data => {
                setData(data.entries);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [])
    // const renderItems = () => {
    //     return data?.map(({API, Description, Link, Category, Auth}, index) => {
    //         return (
    //             <tr key={index}>
    //                 <td>{API}</td>
    //                 <td>{Description}</td>
    //                 <td><a href={Link}>{Link}</a></td>
    //                 <td>{Category}</td>
    //             </tr>
    //         )
    //     })
    // };

    const renderItems = () => {
        const limitedData = data?.slice(0, entriesToShow); // Slice the data array based on entriesToShow
        return limitedData?.map(({ API, Description, Link, Category }, index) => {
            return (
                <tr key={index}>
                    <td>{API}</td>
                    <td>{Description}</td>
                    <td>
                        <a href={Link}>{Link}</a>
                    </td>
                    <td>{Category}</td>
                </tr>
            );
        });
    };
    return (
        <div>
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            <div>
                <button onClick={() => setEntriesToShow(50)}>Show 50 entries</button>
                <button onClick={() => setEntriesToShow(100)}>Show 100 entries</button>
                <button onClick={() => setEntriesToShow(200)}>Show 200 entries</button>
                <button onClick={() => setEntriesToShow(500)}>Show 500 entries</button>
                <button onClick={() => setEntriesToShow(1000)}>Show 1000 entries</button>
            </div>
            <table className={'List'}>
                <thead>
                <tr>
                    <th>API</th>
                    <th>Description</th>
                    <th>Link</th>
                    <th>Category</th>
                </tr>
                </thead>
                <tbody>
                   {renderItems()}
                </tbody>
            </table>
        </div>
    );
}

export default List;
