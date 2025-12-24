import { useEffect, useState } from "react";

export function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [word, setWord] = useState(0);
  const [char, setChar] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = words[word];
    const timer = setTimeout(() => {
      setText(del ? current.slice(0, char - 1) : current.slice(0, char + 1));
      setChar(del ? char - 1 : char + 1);

      if (!del && char === current.length) setTimeout(() => setDel(true), 1000);
      if (del && char === 0) {
        setDel(false);
        setWord((word + 1) % words.length);
      }
    }, del ? 50 : 100);

    return () => clearTimeout(timer);
  }, [char, del, word]);

  return text;
}
