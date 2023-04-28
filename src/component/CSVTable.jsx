import React, { useState } from 'react';
import csv from 'csvtojson';

function CSVTable() {
    const [csvData, setCSVData] = useState([]);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = async (event) => {
            const text = event.target.result;
            const jsonData = await csv().fromString(text);
            setCSVData(jsonData);
        };
        reader.readAsText(file);
    };

    return (
        <div style={{ maxWidth: "90vw", fontSize: "12px" }}>
            <input type="file" onChange={handleFileUpload} />
            <table>
                <thead>
                    <tr>
                        {Object.keys(csvData[0] || {}).map((key) => (
                            <th key={key}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {csvData.map((row, index) => (
                        <tr key={index}>
                            {Object.values(row).map((value, index) => (
                                <td key={index}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CSVTable;
