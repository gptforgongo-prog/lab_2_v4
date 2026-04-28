import React, { useState, useEffect } from 'react';

export default function Footer() {
    const [storageData, setStorageData] = useState({
        systemInfo: null,
        osBrowserInfo: null,
    });

    useEffect(() => {
        const sysInfo = {
            userAgent: navigator.userAgent,
            platform: navigator.platform || (navigator.userAgentData ? navigator.userAgentData.platform : "Невідомо"),
            language: navigator.language,
            cookieEnabled: navigator.cookieEnabled,
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
        };

        const osBrowsInfo = {
            userAgent: navigator.userAgent,
            platform: navigator.platform || (navigator.userAgentData ? navigator.userAgentData.platform : "Невідомо"),
            appVersion: navigator.appVersion,
            appName: navigator.appName,
            vendor: navigator.vendor,
            language: navigator.language,
            userAgentData: navigator.userAgentData ? navigator.userAgentData : "[object Object]",
            screen: window.screen ? "[object Object]" : undefined
        };

        localStorage.setItem("systemInfo", JSON.stringify(sysInfo));
        localStorage.setItem("osBrowserInfo", JSON.stringify(osBrowsInfo));

        setStorageData({
            systemInfo: JSON.parse(localStorage.getItem("systemInfo")),
            osBrowserInfo: JSON.parse(localStorage.getItem("osBrowserInfo")),
        });
    }, []);

    return (
        <section className="bg-slate-50 dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 mt-10">
            <h2 className="text-2xl font-bold uppercase tracking-wider text-slate-800 dark:text-white mb-6 border-b-2 border-slate-200 dark:border-slate-700 pb-2 text-center">
                Дані, збережені у localStorage:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {storageData.systemInfo && (
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Ключ: systemInfo</h3>
                        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                            {Object.entries(storageData.systemInfo).map(([key, val]) => (
                                <li key={key} className="flex items-start">
                                    <span className="text-slate-400 dark:text-slate-500 mr-2">○</span>
                                    <span><strong>{key}:</strong> {String(val)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {storageData.osBrowserInfo && (
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Ключ: osBrowserInfo</h3>
                        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                            {Object.entries(storageData.osBrowserInfo).map(([key, val]) => (
                                <li key={key} className="flex items-start">
                                    <span className="text-slate-400 dark:text-slate-500 mr-2">○</span>
                                    <span><strong>{key}:</strong> {String(val)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
}
