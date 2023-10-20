import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillCopy,
} from "react-icons/ai";
import { copyToClipboard } from "../utils/urlUtils";
const ShortLinkItem = ({ shortUrl }) => {
  const onCopyLink = () => {
    copyToClipboard(shortUrl.short_url);
  };
  return (
    <article className="short-link-item bg-secondaryBackground rounded shadow-md py-2 px-6">
      <header className="flex flex-row justify-between items-center">
        <a href={shortUrl.short_url} className="font-bold">
          {shortUrl.short_url}
        </a>

        <div className="flex flex-row items-center">
          Share to:
          <div className="socialnetworkbox">
            <a
              className="inline-block"
              rel="noreferrer"
              target="_blank"
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                shortUrl.short_url
              )}`}
            >
              <AiFillFacebook className="text-4xl text-facebook" />
            </a>
            <a
              className="inline-block"
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                shortUrl.short_url
              )}&text=${encodeURIComponent("I found this interesting")}`}
              target="_blank"
              rel="noreferrer"
            >
              <AiFillTwitterSquare className="text-4xl text-twitter" />
            </a>
          </div>
        </div>
      </header>
      <div className="text-left mb-3">
        <p>{shortUrl.long_url}</p>
      </div>
      <footer>
        <button
          className="text-center bg-secondary text-white w-full py-2"
          onClick={onCopyLink}
        >
          <AiFillCopy className="inline-block" />
          Copy Link
        </button>
      </footer>
    </article>
  );
};

export default ShortLinkItem;
