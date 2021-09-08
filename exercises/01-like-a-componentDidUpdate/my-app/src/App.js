import React, { useState, useEffect, useRef } from 'react';

const Area = ({ count, lastUpdatedAt, setCount }) => {
  return (
    <div>
      <p>カウント {count} 回目</p>

      <p>🎉最終カウントアップ日時🎉 {lastUpdatedAt || ''} </p>

      <p>
        <button onClick={() => setCount(count + 1)}>カウントアップ</button>
      </p>
    </div>
  );
};

const Qiita = () => {
  const [count, setCount] = useState(0);
  const [lastUpdatedAt, setLastUpdatedAt] = useState(null);

  const isFirstRender = useRef(false);

  useEffect(() => {
    // このeffectは初回レンダー時のみ呼ばれるeffect
    isFirstRender.current = true;
  }, []);

  useEffect(() => {
    // 『count』 が更新された場合『と』初回レンダー時に動くeffect
    if (isFirstRender.current) {
      // 初回レンダー判定
      isFirstRender.current = false; // もう初回レンダーじゃないよ代入
    } else {
      setLastUpdatedAt(new Date().toString());
    }
  }, [count]);

  return (
    <Area count={count} lastUpdatedAt={lastUpdatedAt} setCount={setCount} />
  );
};

const Michael = () => {
  const [count, setCount] = useState(0);
  const [lastUpdatedAt, setLastUpdatedAt] = useState(null);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      setLastUpdatedAt(new Date().toString());
    }
  }, [count]);

  return (
    <Area count={count} lastUpdatedAt={lastUpdatedAt} setCount={setCount} />
  );
};

const Janet = () => {
  const [count, setCount] = useState(0);
  const [lastUpdatedAt, setLastUpdatedAt] = useState(null);

  useEffect(() => {
    if (count === 0) return;

    setLastUpdatedAt(new Date().toString());
  }, [count]);

  return (
    <Area count={count} lastUpdatedAt={lastUpdatedAt} setCount={setCount} />
  );
};

const App = () => {
  return (
    <>
      <Qiita />
      <Michael />
      <Janet />
    </>
  );
};

export default App;
