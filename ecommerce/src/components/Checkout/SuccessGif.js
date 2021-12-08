import { GiphyFetch } from "@giphy/js-fetch-api";
import {Gif} from "@giphy/react-components";
import { useState } from "react";
import { useAsync } from "react-async-hook";


const API_KEY = 'tmqxS7FUBlaM8YEDA8Eod9GwUirCO8ML'
const successGifId = 'IwAZ6dvvvaTtdI8SD5';

const giphyFetch = new GiphyFetch(API_KEY);

export function SuccessGif() {
  const [gif, setGif] = useState(null);
  useAsync(async () => {
    const { data } = await giphyFetch.gif(successGifId);
    setGif(data);
  }, []);
  return (
      gif && <Gif gif={gif} width={400} background-color='white'/>
      );
}
