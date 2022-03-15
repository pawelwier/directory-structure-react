import React from 'react'
import { Item } from './Item'

export const FolderContents = ({ setCurrentDirectory, contents }) => {
  const itemContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 100px)',
    margin: '10px',
  }
  return (
    <div style={itemContainer}>
      {contents && contents.length ? contents.map((item, i) => (
        <Item
          onDirectorySelect={setCurrentDirectory}
          item={item}
          key={i}
        />
      )) : <div>- empty -</div>}
    </div>
  )
}
