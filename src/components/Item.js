import React from 'react'

export default function Item({ item, onDirectorySelect }) {
const MAX_FILE_NAME_LENGTH = 8

  const onItemClick = () => {
    if (item.type !== 'directory') return
    onDirectorySelect(item)
  }

  const getItemName = (name) => name.split('.')[0].length <= MAX_FILE_NAME_LENGTH ? name : `${name.substring(0, MAX_FILE_NAME_LENGTH)}...`

  return (
    <div
      onClick={onItemClick}
      style={{margin: '20px', cursor: 'pointer'}}
    >
      {getItemName(item.name)}
    </div>
  )
}
