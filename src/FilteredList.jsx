import React, { useMemo } from 'react';

const FilteredList = ({ list }) => {
  const filteredList = useMemo(() => list.filter(item => item.age > 18), [list]);

  return (
    <div>
      {filteredList.map(item => (
        <div key={item.id}>
          <span>Name: {item.name}</span>
          <span>Age: {item.age}</span>
        </div>
      ))}
    </div>
  );
};

export default FilteredList;
