import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const ChartComponent = () => {
    const [temperature, setTemperature] = useState([]);
    const [time, setTime] = useState([]);
    const [refresh, setRefresh] = useState(0);
    const [loading, setLoading] = useState(true);

    const baseURL = 'https://archive-api.open-meteo.com/v1/era5?latitude=52.52&longitude=13.41&start_date=2023-09-01&end_date=2023-09-26&hourly=temperature_2m';
    const newBaseURL = 'https://api.open-meteo.com/v1/forecast?latitude=21.18&longitude=72.85&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m';

    const chartProperties = {
        options: {
            chart: {
                id: 'basic-bar',
            },
            xaxis: {
                categories: time,
            },
        },
        series: [
            {
                name: 'Temperature',
                data: temperature,
            },
        ],
    };

    useEffect(() => {
        const fetchData = async (url) => {
            try {
                const response = await axios.get(url);
                const newData = response.data?.hourly;

                if (newData) {
                    setTemperature(newData.temperature_2m.slice(-10));
                    setTime(newData.time.slice(-10));
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        if (refresh === 0) {
            fetchData(baseURL);
        } else {
            fetchData(newBaseURL);
        }
    }, [refresh]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRefresh((previousRefresh) => previousRefresh + 1);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="app">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={chartProperties.options}
                            series={chartProperties.series}
                            type="bar"
                            width="500"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChartComponent;
