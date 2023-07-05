import React from 'react';
import PropTypes from 'prop-types';
import { BiImageAdd } from 'react-icons/bi';
import { Galeryx, GaleryData } from './styled';

export default function Galery({ allPhoto }: any) {
  if (allPhoto === null) return <> </>;

  return (
    <Galeryx>
      <GaleryData>
        <h1>Galeria</h1>

        {allPhoto.map((photo: any, index: any) => (
          <img key={photo.url} src={photo.url} alt={`Foto ${index}`} />
        ))}

        <label htmlFor="picupload" style={{ cursor: 'pointer' }}>
          <BiImageAdd
            style={{
              width: '100px',
              height: '100px',
            }}
          />
          {/* <input
            type="file"
            id="picupload"
            style={{ display: 'none' }}
            onChange={handleChangePic}
          /> */}
        </label>
      </GaleryData>
    </Galeryx>
  );
}

Galery.defaultProps = {
  allPhoto: null,
};

Galery.propTypes = {
  allPhoto: PropTypes.any,
};
