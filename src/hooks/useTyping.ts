import { useEffect, useState } from "react";

export function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const interval = window.setTimeout(() => {
      const nextText = deleting
        ? currentWord.slice(0, charIndex - 1)
        : currentWord.slice(0, charIndex + 1);

      setText(nextText);
      setCharIndex((value) => (deleting ? value - 1 : value + 1));

      if (!deleting && charIndex === currentWord.length) {
        window.setTimeout(() => setDeleting(true), 1000);
      }

      if (deleting && charIndex === 0) {
        setDeleting(false);
        setWordIndex((value) => (value + 1) % words.length);
      }
    }, deleting ? 55 : 95);

    return () => window.clearTimeout(interval);
  }, [charIndex, deleting, wordIndex, words]);

  return text;
}
