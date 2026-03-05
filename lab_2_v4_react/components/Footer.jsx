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
      userAgentData: navigator.userAgentData ? "[object Object]" : "Не підтримується",
      screen: "[object Object]" 
    };

    localStorage.setItem('systemInfo', JSON.stringify(sysInfo));
    localStorage.setItem('osBrowserInfo', JSON.stringify(osBrowsInfo));

    setStorageData({
      systemInfo: JSON.parse(localStorage.getItem('systemInfo')),
      osBrowserInfo: JSON.parse(localStorage.getItem('osBrowserInfo')),
    });
  }, []); 

  const renderList = (dataObj) => {
    if (!dataObj) return null;
    return (
      <ul className="list-[circle] list-outside ml-5 space-y-2 text-[15px] text-gray-800 dark:text-gray-300 break-words">
        {Object.entries(dataObj).map(([key, value]) => (
          <li key={key}>
            <strong className="font-bold text-black dark:text-white">{key}:</strong> {value}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <footer className="w-full mt-10 bg-[#f8f9fa] border-t-2 border-gray-200 py-10 px-6 dark:bg-[#1e1e1e] dark:border-[#444]">
      <div className="max-w-6xl mx-auto">
        
        <h3 className="text-xl font-bold text-center mb-8 text-black dark:text-white">
          Дані, збережені у localStorage:
        </h3>

        {storageData.systemInfo || storageData.osBrowserInfo ? (
          <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
            {storageData.systemInfo && (
              <div className="flex-1 bg-white border border-gray-200 rounded-lg p-6 shadow-sm dark:bg-[#2a2a2a] dark:border-[#444]">
                <h4 className="font-bold text-lg mb-4 text-black dark:text-white">
                  Ключ: systemInfo
                </h4>
                {renderList(storageData.systemInfo)}
              </div>
            )}
            {storageData.osBrowserInfo && (
              <div className="flex-1 bg-white border border-gray-200 rounded-lg p-6 shadow-sm dark:bg-[#2a2a2a] dark:border-[#444]">
                <h4 className="font-bold text-lg mb-4 text-black dark:text-white">
                  Ключ: osBrowserInfo
                </h4>
                {renderList(storageData.osBrowserInfo)}
              </div>
            )}
            
          </div>
        ) : (
          <p className="text-center text-gray-500">Завантаження системної інформації...</p>
        )}
      </div>
    </footer>
  );
};

