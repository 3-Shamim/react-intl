import React, {useState} from 'react';
import {I18nProvider, Locales} from "./i18n";
import Translate from "./i18n/translate";

const App = () => {

    const [locale, setLocale] = useState(Locales.english);

    return (
        <I18nProvider locale={locale}>
            <div className="App">
                {Translate("hello")}
                <p>{Translate("name", {name: "hello"})}</p>
                <h1>{Translate("name", {name: "test"})}</h1>

                <button onClick={() => setLocale(Locales.english)}>English</button>
                <button onClick={() => setLocale(Locales.german)}>German</button>
                <button onClick={() => setLocale(Locales.french)}>French</button>
            </div>
        </I18nProvider>
    );
}

export default App;
