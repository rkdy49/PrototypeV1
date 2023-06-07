import React, { useEffect, useState } from 'react';

function IPFSImage({ ipfsUrl }) {
  const [imageUrl, setImageUrl] = useState('');
  console.log('label1')

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await fetch(`https://ipfs.io/ipfs/${extractCID(ipfsUrl)}`);
        if (response.ok) {
          const blob = await response.blob();
          setImageUrl(URL.createObjectURL(blob));
        }
      } catch (error) {
        console.error('Error fetching IPFS image:', error);
      }
    }

    fetchImage();
  }, [ipfsUrl]);

  // Extracts the CID (Content Identifier) from the IPFS URL
  function extractCID(url) {
    return url.split('://')[1];
  }

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="IPFS Image" />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
}

export default IPFSImage;
