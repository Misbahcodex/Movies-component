import React from 'react';

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  selectedItem,
  onItemSelect,
}) => {
  return (
    <div className="list-group">
      {items.map((item) => {
        const { [textProperty]: text, [valueProperty]: value } = item;
        return (
          <button
            key={value}
            onClick={() => onItemSelect(item)}
            className={`text-truncate list-group-item list-group-item-action ${
              selectedItem[valueProperty] === value ? 'active' : ''
            }`}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
};

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id',
};

export default ListGroup;
// import React from 'react';

// const ListGroup = (props) => {
// const {items}=props;

//   return <ul className="list-group">
//     { items.map(item => )}
//     <li key={item._id}
//      className="list-group-item">{item.name}</li>
//   </ul>;
// }

// export default ListGroup;
