import React, { useEffect, useState } from "react";
import "./PlatformSettings.css";

const PlatformSettings = () => {
    const [settings, setSettings] = useState({
        account: {
            follow: false,
            answer: false,
            mention: true,
        },
        application: {
            launches: false,
            updates: false,
            newsletter: true,
        },
    });

    useEffect(() => {
        // Загрузка данных из db.json, эмулируем пока локально
        fetch("http://localhost:3000/platformSettings")
            .then((res) => res.json())
            .then((data) => setSettings(data))
            .catch((err) => console.error("Fetch error:", err));
    }, []);

    const toggleSetting = (section, key) => {
        setSettings((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [key]: !prev[section][key],
            },
        }));
    };

    return (
        <div className="platform-settings">
            <h3>Platform Settings</h3>
            <div className="settings-section">
                <h5>ACCOUNT</h5>
                <SwitchItem
                    label="Email me when someone follows me"
                    checked={settings.account.follow}
                    onChange={() => toggleSetting("account", "follow")}
                />
                <SwitchItem
                    label="Email me when someone answers on my post"
                    checked={settings.account.answer}
                    onChange={() => toggleSetting("account", "answer")}
                />
                <SwitchItem
                    label="Email me when someone mentions me"
                    checked={settings.account.mention}
                    onChange={() => toggleSetting("account", "mention")}
                />
            </div>

            <div className="settings-section">
                <h5>APPLICATION</h5>
                <SwitchItem
                    label="New launches and projects"
                    checked={settings.application.launches}
                    onChange={() => toggleSetting("application", "launches")}
                />
                <SwitchItem
                    label="Monthly product updates"
                    checked={settings.application.updates}
                    onChange={() => toggleSetting("application", "updates")}
                />
                <SwitchItem
                    label="Subscribe to newsletter"
                    checked={settings.application.newsletter}
                    onChange={() => toggleSetting("application", "newsletter")}
                />
            </div>
        </div>
    );
};

const SwitchItem = ({ label, checked, onChange }) => (
    <label className="switch-container">

        <label className="switch">
            <input type="checkbox" checked={checked} onChange={onChange} />
            <span className="slider round"></span>
        </label>
        <span>{label}</span>
    </label>
);

export default PlatformSettings;
