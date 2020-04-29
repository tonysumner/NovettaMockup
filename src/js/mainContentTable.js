import React from 'react';
import '../css/app.css';
import calendar from '../images/today-24px.png';
const tableProps = [
  { title:'Title',value: 'Title'},
  { title:'Input', value: 'Input', required: true},
  { title:'Input', value: 'Input'},
  { title:'Input', value: 'Input'},
  { title:'Input', value: 'Input'},
  { title:'Input', value: 'Input'},
  { title:'Input', value: 'Input'},
  { title:'Input', value: 'Input'},
  { title:'Due Date', value: 'Date', required: true},
  { title: 'spacing', value: ''}
]

function createTableBody(){
  let table = []
  for (let i = 0; i < 9; i++) {
    table.push(<tr key={i} className = {((i+1)%2===0)?"alternate-row":""}>
      {
        tableProps.map((props,idx) => (
          <td key={idx} className={`column ${props.title.toLowerCase().replace(/ /gi, "_")}`} >
            <span className ='cell '>
              {createTableCell({props},{idx},i)}
            </span>
          </td>
        ))
      }</tr>)
  }
  return table
}

function createTableCell(props,idx,i){
  switch (props.props.value.toLowerCase()) {
      case 'title':
      return <span className="title" key={idx}>{props.props.title}</span>;
      case 'input':
        return <input key={idx} type='text' />;
      case 'date':
        return <span key={idx} className='datePicker'><div>mm/dd/yy</div><div><img src={calendar} /></div></span>;
      default:
        return null;
    }
  }

function MainContentTable() {
  return (
    <>
    <table id="content-table" cellPadding="0" cellSpacing="0">
      <thead>
        <tr className="bottom-border">
          {
            tableProps.map((element, idx) => (
              <td key={idx} className='column'>
                <span className='text'>
                  {(element.required ? "* " : "")}
                  {element.title !== 'spacing' ? element.title.toUpperCase() : ""}
                </span>
              </td>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {createTableBody()}
      </tbody>
    </table>
    <hr />
    <span className='initial-entry-form'>Initial Entry Form</span>
          </>
  );
}
export default MainContentTable;
