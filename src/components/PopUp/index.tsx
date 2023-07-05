import React from 'react';
import PropTypes from 'prop-types';
import { PopUp, TitlePop, DescribePop } from './styled';

export default function PopUpElement({
  DefaultPopUp,
  editState,
  setExibirPopup,
  setLocalTable,
  LocalTable,
}: any) {
  if (DefaultPopUp === null) return <> </>;

  function handleMouseClickClose() {
    setExibirPopup(false);
  }

  function handleChangeSave(value: any, field: string) {
    setLocalTable(() => {
      const CurrentAllTalbe = [...LocalTable];

      if (field === 'description') {
        CurrentAllTalbe[DefaultPopUp.table].columfield[
          DefaultPopUp.colum
        ].describe = value;
        return CurrentAllTalbe;
      }
      if (field === 'youtubelink') {
        CurrentAllTalbe[DefaultPopUp.table].columfield[
          DefaultPopUp.colum
        ].youtubepath = value;
        return CurrentAllTalbe;
      }
      return CurrentAllTalbe;
    });
  }

  return (
    <PopUp>
      <button type="submit" onClick={() => handleMouseClickClose()}>
        x
      </button>
      {editState ? (
        <>
          <TitlePop disabled defaultValue={DefaultPopUp.title} />
          <DescribePop
            placeholder="descrição"
            defaultValue={DefaultPopUp.describe}
            onChange={(e) => {
              handleChangeSave(e.target.value, 'description');
            }}
          />
          <input
            type="text"
            placeholder="Link do Youtube!"
            defaultValue={DefaultPopUp.link}
            onChange={(e) => {
              handleChangeSave(e.target.value, 'youtubelink');
            }}
          />
        </>
      ) : (
        <>
          <h1>{DefaultPopUp.title}</h1>
          <p>{DefaultPopUp.describe}</p>
          {DefaultPopUp.link && (
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${
                DefaultPopUp.link.split('v=')[1]
              }`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          )}
        </>
      )}
    </PopUp>
  );
}

PopUpElement.defaultProps = {
  DefaultPopUp: null,
  editState: null,
};

PopUpElement.propTypes = {
  DefaultPopUp: PropTypes.any,
  editState: PropTypes.any,
  setExibirPopup: PropTypes.func.isRequired,
  setLocalTable: PropTypes.func.isRequired,
  LocalTable: PropTypes.any.isRequired,
};
