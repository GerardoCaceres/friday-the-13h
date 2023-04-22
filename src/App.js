import AceEditor from 'react-ace';
import './App.scss';

import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/webpack-resolver';
import {Toolbar} from "./components/Toolbar";
import {useEffect, useState} from "react";

const App = () => {
    const [data, setData] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    const handleFormat = () => {
        if (!error) {
            setLoading(true);
            setData(x => JSON.stringify(JSON.parse(x), null, 2))
        }
    }

    const handleGenerateLink = () => {
        const url = `${window.location.origin}${window.location.pathname}?q=${encodeURIComponent(data)}`
        console.log(url)
    }

    const handleChange = (value) => {
        setData(value)
    }


    const handleValidate = (errors) => {
        if (errors.length) setError(true)
        else setError(false)
    }

    useEffect(() => {
        if (loading) setLoading(false)
    }, [loading])

    useEffect(() => {
        const url = new URL(window.location.href)
        const query = url.searchParams.get("q")
        if (query) {
            setLoading(true)
            setData(decodeURIComponent(query))
        }
    }, [])

  return (
    <div className="App">
      <AceEditor
          value={data}
          mode="json"
          theme="monokai"
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          width="100%"
          height="100%"
          tabSize={2}
          onChange={handleChange}
          onValidate={handleValidate}
          // readOnly
      />
        <Toolbar
            onFormat={handleFormat}
            onGenerateLink={handleGenerateLink}
        />
    </div>
  );
}

export default App;
