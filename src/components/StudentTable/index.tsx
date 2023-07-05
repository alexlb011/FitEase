import React, { useState } from 'react';
import PropTypes from 'prop-types';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import axios from '../../services/axios';
import Loading from '../Loading';
import PopUpElement from '../PopUp';
import * as actionLoading from '../../store/modules/load/actions';
import {
  Header,
  FooterData,
  TableStyle,
  Th,
  Td,
  Tdinc,
  SchoolData,
  Slot,
  InputTitle,
  ButtonInput,
} from './styled';

interface ColumUnity {
  describe: string;
  rep: number;
  set: number;
  title: string;
  weight: number;
  youtubepath: string;
}
interface DefaultTable {
  columfield: ColumUnity[];
  tablename: string;
}
interface DefaultPopUp {
  title: string;
  describe: string;
  link: string;
  table: number;
  colum: number;
}

export default function StudentTable({ allTables, id, studentName }: any) {
  const dispatch = useDispatch();
  const [LocalTable, setLocalTable] = useState<DefaultTable[]>([]);
  const [editState, setEditState] = useState(false);
  const rootLoader = useSelector((state: any) => state.loading.IsLoading);
  const [popUp, setPopup] = useState<DefaultPopUp>();
  const [exibirPopup, setExibirPopup] = useState(false);

  React.useEffect(() => {
    setLocalTable(allTables);
  }, [allTables]);

  if (allTables === null) return <> </>;

  function handleEditTable() {
    setEditState(true);
  }
  async function HandleSaveTable() {
    dispatch(actionLoading.IsLoading(true));

    try {
      await axios.put(`table/${id}`, LocalTable);
      toast.success('Tabela salva');
      dispatch(actionLoading.IsLoading(false));
      setEditState(false);
      return;
    } catch (error) {
      toast.error('Ocorreu um erro. Tente mais tarde');
      dispatch(actionLoading.IsLoading(false));
    }
  }
  function handleAddTable() {
    const newTable: DefaultTable = {
      columfield: [],
      tablename: 'Novo Treino',
    };
    const newAllTables = [...LocalTable, newTable];
    setLocalTable(newAllTables);
  }
  function handleAddColum(e: any, tableIndex: number) {
    const newColum: ColumUnity = {
      describe: '',
      rep: 0,
      set: 0,
      title: 'Nova Atividade',
      weight: 0,
      youtubepath: '',
    };

    setLocalTable((prevTable) => {
      const allTable = [...prevTable];
      allTable[tableIndex].columfield.push(newColum);
      return allTable;
    });
  }
  function handleChangeSave(
    e: any,
    field: string,
    tableIndex?: number,
    columIndex?: number
  ) {
    setLocalTable(() => {
      const CurrentAllTalbe = [...LocalTable];

      if (tableIndex != null && field === 'tablename') {
        CurrentAllTalbe[tableIndex].tablename = e;
        return CurrentAllTalbe;
      }
      if (
        columIndex != null &&
        tableIndex != null &&
        field === 'exerciseTitle'
      ) {
        CurrentAllTalbe[tableIndex].columfield[columIndex].title = e;
        return CurrentAllTalbe;
      }
      if (columIndex != null && tableIndex != null && field === 'Serie') {
        CurrentAllTalbe[tableIndex].columfield[columIndex].set = e;
        return CurrentAllTalbe;
      }
      if (columIndex != null && tableIndex != null && field === 'repeticoes') {
        CurrentAllTalbe[tableIndex].columfield[columIndex].rep = e;
        return CurrentAllTalbe;
      }
      if (columIndex != null && tableIndex != null && field === 'peso') {
        CurrentAllTalbe[tableIndex].columfield[columIndex].weight = e;
        return CurrentAllTalbe;
      }
      return CurrentAllTalbe;
    });
  }

  function handleMouseClick(
    event: any,
    TableIndex: number,
    ColumIndex: number
  ) {
    setExibirPopup(true);
    const target = LocalTable[TableIndex].columfield[ColumIndex];
    const newPopUp: DefaultPopUp = {
      title: target.title,
      describe: target.describe,
      link: target.youtubepath,
      table: TableIndex,
      colum: ColumIndex,
    };
    setPopup(newPopUp);
  }

  function handleDeleteTable(e: any, tableIndex: number) {
    setLocalTable((prevTable) => {
      const localTables = [...prevTable];
      localTables.splice(tableIndex, 1);
      return localTables;
    });
  }
  function handleDeleteColum(e: any, columIndex: number, tableIndex: number) {
    setLocalTable((prevTable) => {
      const localTables = [...prevTable];
      localTables[tableIndex].columfield.splice(columIndex, 1);
      return localTables;
    });
  }
  function gerarPDF() {
    const element = document.getElementById('AllTableRender');
    if (element) {
      const backUpPrintButton =
        document.getElementById('PrintButton')?.style.display;
      const backUpEditButton =
        document.getElementById('EditButton')?.style.display;
      // document.getElementById('PrintButton').style.display = 'none';

      const PrintButton = document.getElementById('PrintButton');
      const EditButton = document.getElementById('EditButton');
      if (PrintButton) PrintButton.style.display = 'none';
      if (EditButton) EditButton.style.display = 'none';

      const options = {
        scale: 2, // Aumenta a escala de renderização (ajuste conforme necessário)
      };
      html2canvas(element, options).then((canvas) => {
        const img = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          unit: 'px',
          format: [element.offsetWidth, element.offsetHeight],
        });
        const marginX = 20; // Margem horizontal (esquerda e direita)
        const marginY = 50; // Margem vertical (superior e inferior)
        const pdfWidth = pdf.internal.pageSize.getWidth() - marginX * 2;
        const pdfHeight = pdf.internal.pageSize.getHeight() - marginY * 2;
        pdf.addImage(img, 'PNG', marginX, marginY, pdfWidth, pdfHeight);
        pdf.save(`Treino-${studentName}`);

        if (PrintButton && backUpPrintButton !== undefined) {
          PrintButton.style.display = backUpPrintButton.toString();
        }
        if (EditButton && backUpEditButton !== undefined) {
          EditButton.style.display = backUpEditButton.toString();
        }
      });
    }
  }

  return (
    <SchoolData id="AllTableRender">
      <Loading isLoading={rootLoader} />
      {exibirPopup && (
        <PopUpElement
          DefaultPopUp={popUp}
          editState={editState}
          setExibirPopup={setExibirPopup}
          setLocalTable={setLocalTable}
          LocalTable={LocalTable}
        />
      )}
      <Header>
        <h1>Treinamento</h1>

        {!editState && (
          <button id="EditButton" type="submit" onClick={handleEditTable}>
            Editar ficha
          </button>
        )}
        {editState && (
          <button id="SaveButton" type="submit" onClick={HandleSaveTable}>
            Salvar ficha
          </button>
        )}
      </Header>
      {!editState && (
        <button id="PrintButton" type="button" onClick={() => gerarPDF()}>
          Imprimir ficha
        </button>
      )}

      {LocalTable?.map((elementTable: DefaultTable, tableIndex: number) => (
        <div key={tableIndex}>
          <Slot>
            {editState ? (
              <InputTitle
                type="text"
                value={elementTable.tablename}
                disabled={!editState}
                onChange={(e) => {
                  handleChangeSave(e.target.value, 'tablename', tableIndex);
                }}
              />
            ) : (
              <h1>{elementTable.tablename}</h1>
            )}
            {editState && (
              <button
                type="submit"
                onClick={(e) => handleDeleteTable(e, tableIndex)}
              >
                X
              </button>
            )}
            <TableStyle>
              <thead>
                <tr>
                  <Td>Exercício</Td>
                  <Th>Série</Th>
                  <Th>Rep</Th>
                  <Th>Peso</Th>
                </tr>
              </thead>
              <tbody>
                {elementTable.columfield.map((colum, columIndex) => (
                  <tr key={columIndex}>
                    <Tdinc>
                      {(colum.describe || colum.youtubepath) && !editState && (
                        <button
                          type="submit"
                          onClick={(e) =>
                            handleMouseClick(e, tableIndex, columIndex)
                          }
                        >
                          Info
                        </button>
                      )}
                      {editState ? (
                        <>
                          <button
                            type="submit"
                            onClick={(e) =>
                              handleMouseClick(e, tableIndex, columIndex)
                            }
                          >
                            Info
                          </button>
                          <input
                            type="text"
                            value={colum.title}
                            disabled={!editState}
                            onChange={(e) => {
                              handleChangeSave(
                                e.target.value,
                                'exerciseTitle',
                                tableIndex,
                                columIndex
                              );
                            }}
                          />
                        </>
                      ) : (
                        <p>{colum.title}</p>
                      )}
                    </Tdinc>
                    <Td>
                      {editState ? (
                        <input
                          type="number"
                          value={colum.set}
                          disabled={!editState}
                          onChange={(e) => {
                            handleChangeSave(
                              e.target.value,
                              'Serie',
                              tableIndex,
                              columIndex
                            );
                          }}
                        />
                      ) : (
                        <p>{colum.set}</p>
                      )}
                    </Td>
                    <Td>
                      {editState ? (
                        <input
                          type="number"
                          value={colum.rep}
                          disabled={!editState}
                          onChange={(e) => {
                            handleChangeSave(
                              e.target.value,
                              'repeticoes',
                              tableIndex,
                              columIndex
                            );
                          }}
                        />
                      ) : (
                        <p>{colum.rep}</p>
                      )}
                    </Td>
                    <Td>
                      {editState ? (
                        <input
                          type="number"
                          value={colum.weight}
                          disabled={!editState}
                          onChange={(e) => {
                            handleChangeSave(
                              e.target.value,
                              'peso',
                              tableIndex,
                              columIndex
                            );
                          }}
                        />
                      ) : (
                        <p>{colum.weight}</p>
                      )}
                    </Td>
                    <Td>
                      {editState && (
                        <button
                          type="submit"
                          onClick={(e) =>
                            handleDeleteColum(e, columIndex, tableIndex)
                          }
                        >
                          X
                        </button>
                      )}
                    </Td>
                  </tr>
                ))}
              </tbody>
            </TableStyle>
            {editState && (
              <ButtonInput
                type="submit"
                onClick={(e) => handleAddColum(e, tableIndex)}
              >
                Adicionar novo exercício
              </ButtonInput>
            )}
            <FooterData>
              <div>
                <p>Início:</p>
              </div>
              <div>
                <p>Fim:</p>
              </div>
            </FooterData>
          </Slot>
        </div>
      ))}
      {editState && (
        <ButtonInput type="submit" onClick={() => handleAddTable()}>
          Adicionar novo treino!
        </ButtonInput>
      )}
    </SchoolData>
  );
}

StudentTable.defaultProps = {
  studentName: 'Student',
};
StudentTable.propTypes = {
  allTables: PropTypes.any.isRequired,
  id: PropTypes.any.isRequired,
  studentName: PropTypes.any,
};
